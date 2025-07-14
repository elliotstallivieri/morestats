from sqlalchemy.dialects.postgresql import UUID as PG_UUID
from uuid import uuid4
from sqlalchemy import Column, Integer, String
from backend.app.db import Base

class Champion(Base):
    __tablename__ = "champion"

    id = Column(PG_UUID(as_uuid=True), primary_key=True, index=True, default=uuid4)
    name = Column(String(100), nullable=False)
    icon = Column(String(250))
    picture = Column(String(250))