from sqlalchemy.dialects.postgresql import UUID as PG_UUID
from uuid import uuid4
from sqlalchemy import Column, Integer, String, ForeignKey
from app.db import Base

class Edition(Base):
    __tablename__ = "edition"

    id = Column(PG_UUID(as_uuid=True), primary_key=True, index=True, default=uuid4)
    name = Column(String, nullable=False)
    year = Column(Integer, nullable=False)
    competition_id = Column(PG_UUID, ForeignKey("competition.id"))
    split = Column(String(50))