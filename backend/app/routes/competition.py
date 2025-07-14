from uuid import UUID, uuid4
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from dependencies import get_db
from schemas.competition import Competition, CompetitionCreate, CompetitionUpdate
from app.crud import competition as crud_competition

router = APIRouter(
    prefix="/competitions",
    tags=["competitions"]
)

#  Get all competitions
@router.get("/", response_model=List[Competition])
def read_competitions(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud_competition.get_competitions(db, skip=skip, limit=limit)

# Get one edition from its id
@router.get("/id/{competition_id}", response_model=Competition)
def read_competition_from_id(competition_id: UUID, db: Session = Depends(get_db)):
    db_competition = crud_competition.get_competition(db, competition_id)  # type: ignore
    if db_competition is None:
        raise HTTPException(status_code=404, detail="Compétition non trouvée")
    return db_competition

# Get one edition from its name
@router.get("/name/{competition_name}", response_model=Competition)
def read_competition_from_name(competition_name: str, db: Session = Depends(get_db)):
    db_competition = crud_competition.get_competition_by_name(db, name=competition_name)
    if db_competition is None:
        raise HTTPException(status_code=404, detail="Compétition non trouvée")
    return db_competition

# 🔹 Créer une compétition
@router.post("/", response_model=Competition)
def create_competition(competition: CompetitionCreate, db: Session = Depends(get_db)):
    db_comp = crud_competition.get_competition_by_name(db, name=competition.name)
    if db_comp:
        raise HTTPException(status_code=400, detail="Une compétition avec ce nom existe déjà.")
    return crud_competition.create_competition(db, competition)

# 🔹 Mettre à jour une compétition
@router.put("/{competition_id}", response_model=Competition)
def update_competition(competition_id: UUID, updates: CompetitionUpdate, db: Session = Depends(get_db)):
    updated = crud_competition.update_competition(db, competition_id, updates)
    if updated is None:
        raise HTTPException(status_code=404, detail="Compétition non trouvée")
    return updated

# 🔹 Supprimer une compétition
@router.delete("/{competition_id}", response_model=Competition)
def delete_competition(competition_id: UUID, db: Session = Depends(get_db)):
    deleted = crud_competition.delete_competition(db, competition_id)
    if deleted is None:
        raise HTTPException(status_code=404, detail="Compétition non trouvée")
    return deleted
