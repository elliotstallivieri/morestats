from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from uuid import UUID
from typing import List

from dependencies import get_db
from schemas.edition import Edition, EditionCreate, EditionUpdate
from app.crud import edition as crud_edition

router = APIRouter(
    prefix="/editions",
    tags=["editions"]
)

# Get all editions
@router.get("/", response_model=List[Edition])
def read_editions(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud_edition.get_editions(db, skip=skip, limit=limit)

# Get one edition from its ID
@router.get("/id/{edition_id}", response_model=Edition)
def read_edition_from_id(edition_id: UUID, db: Session = Depends(get_db)):
    db_edition = crud_edition.get_edition_from_id(db, edition_id) # type: ignore
    if db_edition is None:
        raise HTTPException(status_code=404, detail="Edition non trouvée")
    return db_edition

#  Get one edition from its name
@router.get("/name/{edition_name}", response_model=Edition)
def read_edition_from_name(edition_name: str, db: Session = Depends(get_db)):
    db_edition = crud_edition.get_edition_from_name(db, edition_name) # type: ignore
    if db_edition is None:
        raise HTTPException(status_code=404, detail="Edition non trouvée")
    return db_edition

# Get all editions from a competition ID
@router.get("/competition/{competition_id}", response_model=List[Edition])
def get_editions_for_competition(competition_id: UUID, db: Session = Depends(get_db)):
    db_editions = crud_edition.get_editions_by_competition_id(db, competition_id) # type: ignore
    if not db_editions:
        raise HTTPException(status_code=404, detail="Aucune édition trouvée pour cette compétition")
    return db_editions

# Create a new edition
@router.post("/", response_model=Edition)
def create_edition(edition: EditionCreate, db: Session = Depends(get_db)):
    db_comp = crud_edition.get_edition_from_name(db, edition_name=edition.name) # type: ignore
    if db_comp:
        raise HTTPException(status_code=400, detail="Une édition de cette compétition avec ce nom existe déjà.")
    return crud_edition.create_edition(db, edition)

#  Update an existing edition
@router.put("/{edition_id}", response_model=Edition)
def update_edition(edition_id: UUID, updates: EditionUpdate, db: Session = Depends(get_db)):
    updated = crud_edition.update_edition(db, edition_id, updates) # type: ignore
    if updated is None:
        raise HTTPException(status_code=404, detail="Édition non trouvée")
    return updated

#  Delete a competition
@router.delete("/{edition_id}", response_model=Edition)
def delete_competition(edition_id: UUID, db: Session = Depends(get_db)):
    deleted = crud_edition.delete_edition(db, edition_id=edition_id) # type: ignore
    if deleted is None:
        raise HTTPException(status_code=404, detail="Compétition non trouvée")
    return deleted
