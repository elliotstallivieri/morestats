from sqlalchemy.dialects.postgresql import UUID as PG_UUID
from uuid import uuid4
from sqlalchemy import Column, Integer, String, ForeignKey
from app.db import Base

class Player(Base):
    __tablename__ = "player"

    id = Column(PG_UUID(as_uuid=True), primary_key=True, index=True, default=uuid4)
    name = Column(String(100), nullable=False)
    team_id = Column(PG_UUID, ForeignKey("team.id"))
    role = Column(String(10))