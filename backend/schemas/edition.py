from pydantic import BaseModel
from uuid import UUID
from typing import Optional

class EditionBase(BaseModel):
    name: str
    year: int
    competition_id: UUID
    split: str

class EditionCreate(EditionBase):
    pass

class EditionUpdate(BaseModel):
    name: Optional[str] = None
    year: Optional[int] = None
    competition_id: Optional[UUID] = None
    split: Optional[str] = None

class Edition(EditionBase):
    id: UUID

    class Config:
        orm_mode = True
