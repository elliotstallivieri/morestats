from sqlalchemy.dialects.postgresql import UUID
from uuid import uuid4
from sqlalchemy.orm import Session
from models.edition import Edition
from schemas.edition import EditionCreate, EditionUpdate

# Create a edition
def create_edition(db: Session, edition: EditionCreate):
    db_edition = Edition(**edition.model_dump())
    db.add(db_edition)
    db.commit()
    db.refresh(db_edition)
    return db_edition

# Get all editions
def get_editions(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Edition).offset(skip).limit(limit).all()

# Get one edition from its ID
def get_edition_from_id(db: Session, edition_id: UUID):
    return db.query(Edition).filter(Edition.id == edition_id).first()

# Get one edition from its ID
def get_edition_from_name(db: Session, edition_name: str):
    return db.query(Edition).filter(Edition.name == edition_name).first()

# Get all editions from a competition ID
def get_editions_by_competition_id(db: Session, competition_id: UUID):
    return db.query(Edition).filter(Edition.competition_id == competition_id).all()

# Edit a edition
def update_edition(db: Session, edition_id: UUID, updates: EditionUpdate):
    db_edition = get_edition_from_id(db, edition_id)
    if not db_edition:
        return None
    update_data = updates.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_edition, key, value)
    db.commit()
    db.refresh(db_edition)
    return db_edition

# Delete a edition
def delete_edition(db: Session, edition_id: UUID):
    db_edition = get_edition_from_id(db, edition_id)
    if not db_edition:
        return None
    db.delete(db_edition)
    db.commit()
    return db_edition