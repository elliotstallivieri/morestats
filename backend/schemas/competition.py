from pydantic import BaseModel
from uuid import UUID

class CompetitionBase(BaseModel):
    name: str

class CompetitionCreate(CompetitionBase):
    pass

class CompetitionUpdate(CompetitionBase):
    pass

class Competition(CompetitionBase):
    id: UUID

    class Config:
        orm_mode = True