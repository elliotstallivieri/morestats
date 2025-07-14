from sqlalchemy.dialects.postgresql import UUID as PG_UUID
from uuid import uuid4
from sqlalchemy import Column, Integer, ForeignKey
from app.db import Base

class FirstBlood(Base):
    __tablename__ = "first_blood"

    id = Column(PG_UUID(as_uuid=True), primary_key=True, index=True, default=uuid4)
    game_id = Column(Integer, ForeignKey("game.id"))
    killing_player_side = Column(Integer) # 0 for blue, 1 for red
    killing_player_id = Column(Integer, ForeignKey("player_id"))
    killed_player_id = Column(Integer, ForeignKey("player_id"))
    time = Column(Integer) # in seconds