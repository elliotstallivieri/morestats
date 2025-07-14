from pydantic import BaseModel
from uuid import UUID
from typing import Optional

class PlayerBase(BaseModel):
    name: str
    team_id: Optional[UUID]
    role: Optional[str]

class PlayerCreate(PlayerBase):
    pass

class PlayerUpdate(BaseModel):
    name : Optional[str]
    team_id: Optional[UUID]
    pass

class Player(PlayerBase):
    id: UUID

    class Config:
        orm_mode = True
# team
# 08b0fbf4-4dc8-4828-8c28-933770a651bc
# player
# 192d7973-d887-4c56-941f-a565c9691fa5