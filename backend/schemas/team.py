from pydantic import BaseModel
from uuid import UUID
from typing import Optional

class TeamBase(BaseModel):
    name: str

class TeamCreate(TeamBase):
    pass

class TeamUpdate(BaseModel):
    name : str
    pass

class Team(TeamBase):
    id: UUID

    class Config:
        orm_mode = True
