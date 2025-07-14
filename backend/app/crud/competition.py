from sqlalchemy.dialects.postgresql import UUID
from uuid import uuid4
from sqlalchemy.orm import Session
from models.competition import Competition
from schemas.competition import CompetitionCreate, CompetitionUpdate

# Create a competition
def create_competition(db: Session, competition: CompetitionCreate):
    print("appel ok")
    db_competition = Competition(name=competition.name)
    db.add(db_competition)
    print("add ok")
    db.commit()
    print("commit ok")
    db.refresh(db_competition)
    print("refresh ok")
    return db_competition

# Get all competitions
def get_competitions(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Competition).offset(skip).limit(limit).all()

# Get one competition from its ID
def get_competition(db: Session, competition_id: UUID):
    return db.query(Competition).filter(Competition.id == competition_id).first()

# Get one competition from its name
def get_competition_by_name(db: Session, name: str):
    return db.query(Competition).filter(Competition.name == name).first()

# Edit a competition
def update_competition(db: Session, competition_id: UUID, updates: CompetitionUpdate):
    db_competition = get_competition(db, competition_id)
    if not db_competition:
        return None
    update_data = updates.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_competition, key, value)
    db.commit()
    db.refresh(db_competition)
    return db_competition

# Delete a competition
def delete_competition(db: Session, competition_id: UUID):
    db_competition = get_competition(db, competition_id)
    if not db_competition:
        return None
    db.delete(db_competition)
    db.commit()
    return db_competition