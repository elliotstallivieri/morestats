from sqlalchemy.dialects.postgresql import UUID
from uuid import uuid4
from sqlalchemy.orm import Session
from models.team import Team
from schemas.team import TeamCreate, TeamUpdate

# Create a team
def create_team(db: Session, team: TeamCreate):
    db_team = Team(**team.model_dump())
    db.add(db_team)
    db.commit()
    db.refresh(db_team)
    return db_team

# Get all teams
def get_teams(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Team).offset(skip).limit(limit).all()

# Get one team from its ID
def get_team_from_id(db: Session, team_id: UUID):
    return db.query(Team).filter(Team.id == team_id).first()

# Get one team from its name
def get_team_from_name(db: Session, team_name: str):
    return db.query(Team).filter(Team.name == team_name).first()

# Edit a team
def update_team(db: Session, team_id: UUID, updates: TeamUpdate):
    db_team = get_team_from_id(db, team_id)
    if not db_team:
        return None
    update_data = updates.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_team, key, value)
    db.commit()
    db.refresh(db_team)
    return db_team

# Delete a team
def delete_team(db: Session, team_id: UUID):
    db_team = get_team_from_id(db, team_id)
    if not db_team:
        return None
    db.delete(db_team)
    db.commit()
    return db_team

