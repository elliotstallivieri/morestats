from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from uuid import UUID
from typing import List

from dependencies import get_db
from schemas.player import Player, PlayerCreate, PlayerUpdate
from app.crud import player as crud_player

router = APIRouter(
    prefix="/players",
    tags=["players"]
)


# Get all players
@router.get("/", response_model=List[Player])
def read_players(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud_player.get_players(db, skip=skip, limit=limit)

# Get one player from its ID
@router.get("/id/{player_id}", response_model=Player)
def read_player_from_id(player_id: UUID, db: Session = Depends(get_db)):
    db_player = crud_player.get_player_from_id(db, player_id) # type: ignore
    if db_player is None:
        raise HTTPException(status_code=404, detail="Player not found")
    return db_player

#  Get al players from a team
@router.get("/team/{team_id}", response_model=List[Player])
def read_player_from_team_id(team_id: UUID, db: Session = Depends(get_db)):
    db_player = crud_player.get_player_from_team_id(db, team_id=team_id) # type: ignore
    if db_player is None:
        raise HTTPException(status_code=404, detail="No player found for this team")
    return db_player

# Create a new player
@router.post("/", response_model=Player)
def create_player(player: PlayerCreate, db: Session = Depends(get_db)):
    return crud_player.create_player(db, player)

#  Update an existing player
@router.put("/{player_id}", response_model=Player)
def update_player(player_id: UUID, updates: PlayerUpdate, db: Session = Depends(get_db)):
    updated = crud_player.update_player(db, player_id, updates) # type: ignore
    if updated is None:
        raise HTTPException(status_code=404, detail="Player not found")
    return updated

#  Delete a player
@router.delete("/{player_id}", response_model=Player)
def delete_player(player_id: UUID, db: Session = Depends(get_db)):
    deleted = crud_player.delete_player(db, player_id=player_id) # type: ignore
    if deleted is None:
        raise HTTPException(status_code=404, detail="Player not found")
    return deleted
