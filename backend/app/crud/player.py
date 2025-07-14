from sqlalchemy.dialects.postgresql import UUID
from uuid import uuid4
from sqlalchemy.orm import Session
from models.player import Player
from schemas.player import PlayerCreate, PlayerUpdate

# Create a player
def create_player(db: Session, player: PlayerCreate):
    db_player = Player(**player.model_dump())
    db.add(db_player)
    db.commit()
    db.refresh(db_player)
    return db_player

# Get all players
def get_players(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Player).offset(skip).limit(limit).all()

# Get all players from a team
def get_player_from_team_id(db: Session, team_id: UUID):
    return db.query(Player).filter(Player.team_id == team_id).all()

# Get one player from its ID
def get_player_from_id(db: Session, player_id: UUID):
    return db.query(Player).filter(Player.id == player_id).first()

# Edit a player
def update_player(db: Session, player_id: UUID, updates: PlayerUpdate):
    db_player = get_player_from_id(db, player_id)
    if not db_player:
        return None
    update_data = updates.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_player, key, value)
    db.commit()
    db.refresh(db_player)
    return db_player

# Delete a player
def delete_player(db: Session, player_id: UUID):
    db_player = get_player_from_id(db, player_id)
    if not db_player:
        return None
    db.delete(db_player)
    db.commit()
    return db_player

