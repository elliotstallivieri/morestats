from sqlalchemy.dialects.postgresql import UUID as PG_UUID
from uuid import uuid4
from sqlalchemy import Column, Integer, String, ForeignKey, Boolean
from backend.app.db import Base

class PlayerGame(Base):
    __tablename__ = "player_game"

    id = Column(PG_UUID(as_uuid=True), primary_key=True, index=True, default=uuid4)
    game_id = Column(Integer, ForeignKey("game.id"), index = True)
    team_side = Column(String(4), nullable=False)
    role = Column(String, nullable=False)
    player_id = Column(Integer, ForeignKey("player.id"))
    champion_id = Column(Integer, ForeignKey("champion.id"))
    ennemy_champion_id = Column(Integer, ForeignKey("champion.id"))
    gold_earned = Column(Integer)
    gold_diff_10 = Column(Integer)
    gold_diff_15 = Column(Integer)
    gold_diff_20 = Column(Integer)
    gold_diff_25 = Column(Integer)
    gold_diff_30 = Column(Integer)
    kda_k = Column(Integer)
    kda_d = Column(Integer)
    kda_a = Column(Integer)
    damage_dealt = Column(Integer)
    gold_earned = Column(Integer)
    first_to_6 = Column(Boolean)
    