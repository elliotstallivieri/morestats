from sqlalchemy.dialects.postgresql import UUID as PG_UUID
from uuid import uuid4
from sqlalchemy import Column, Integer, String
from app.db import Base

class Team(Base):
    __tablename__ = "team"

    id = Column(PG_UUID(as_uuid=True), primary_key=True, index=True, default=uuid4)
    name = Column(String(100), unique=True, nullable=False)