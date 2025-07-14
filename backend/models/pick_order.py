from sqlalchemy.dialects.postgresql import UUID as PG_UUID
from uuid import uuid4
from sqlalchemy import Column, Integer, String, ForeignKey
from backend.app.db import Base

class PickOrder(Base):
    __tablename__ = "pick_order"

    id = Column(PG_UUID(as_uuid=True), primary_key=True, index=True, default=uuid4)
    game_id = Column(Integer, ForeignKey("game.id"))
    pick_position = Column(Integer)
    team_side = Column(String)
    champion_name = Column(String)