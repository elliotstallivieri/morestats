from sqlalchemy.dialects.postgresql import UUID as PG_UUID
from uuid import uuid4
from sqlalchemy import Column, ForeignKey, Integer, String, Boolean
from app.db import Base

class Game(Base):
    __tablename__ = "game"

    id = Column(PG_UUID(as_uuid=True), primary_key=True, index=True, default=uuid4)
    date = Column(String)
    competition = Column(Integer, ForeignKey("competition.id") )
    team_blue = Column(Integer, ForeignKey("team.id"))
    team_red = Column(Integer, ForeignKey("team.id"))
    winner = Column(Boolean)
    patch = Column(String(20))
    game_duration = Column(Integer) #in seconds
