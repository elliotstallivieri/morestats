from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from uuid import UUID
from typing import List

from dependencies import get_db
from schemas.team import Team, TeamCreate, TeamUpdate
from app.crud import team as crud_team

router = APIRouter(
    prefix="/teams",
    tags=["teams"]
)


# Get all teams
@router.get("/", response_model=List[Team])
def read_teams(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud_team.get_teams(db, skip=skip, limit=limit)

# Get one team from its ID
@router.get("/id/{team_id}", response_model=Team)
def read_team_from_id(team_id: UUID, db: Session = Depends(get_db)):
    db_team = crud_team.get_team_from_id(db, team_id) # type: ignore
    if db_team is None:
        raise HTTPException(status_code=404, detail="Equipe non trouvée")
    return db_team

#  Get one team from its name
@router.get("/name/{team_name}", response_model=Team)
def read_team_from_name(team_name: str, db: Session = Depends(get_db)):
    db_team = crud_team.get_team_from_name(db, team_name=team_name) # type: ignore
    if db_team is None:
        raise HTTPException(status_code=404, detail="Equipe non trouvée")
    return db_team

# Create a new team
@router.post("/", response_model=Team)
def create_team(team: TeamCreate, db: Session = Depends(get_db)):
    db_comp = crud_team.get_team_from_name(db, team_name=team.name) 
    print("name : ", team.name)
    if db_comp:
        raise HTTPException(status_code=400, detail="Une équipe avec ce nom existe déjà.")
    return crud_team.create_team(db, team)

#  Update an existing team
@router.put("/{team_id}", response_model=Team)
def update_team(team_id: UUID, updates: TeamUpdate, db: Session = Depends(get_db)):
    updated = crud_team.update_team(db, team_id, updates) # type: ignore
    if updated is None:
        raise HTTPException(status_code=404, detail="Édition non trouvée")
    return updated

#  Delete a competition
@router.delete("/{team_id}", response_model=Team)
def delete_team(team_id: UUID, db: Session = Depends(get_db)):
    deleted = crud_team.delete_team(db, team_id=team_id) # type: ignore
    if deleted is None:
        raise HTTPException(status_code=404, detail="Team not found")
    return deleted
