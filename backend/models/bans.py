from sqlalchemy.dialects.postgresql import UUID as PG_UUID
from uuid import uuid4
from sqlalchemy import Column, Integer, String, ForeignKey
from backend.app.db import Base

class Bans(Base):
    __tablename__ = "bans"

    id = Column(PG_UUID(as_uuid=True), primary_key=True, index=True, default=uuid4)
    game_id = Column(Integer, ForeignKey("game.id"))
    team_side = Column(String)
    ban_position = Column(Integer)
    champion_name = Column(String)