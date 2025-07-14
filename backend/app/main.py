# backend/app/main.py
from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from app.routes import competition
from app.routes import edition
from app.routes import team
from app.routes import player
from dependencies import get_db
from models.game import Game

#from app.routes import 

app = FastAPI()

app.include_router(competition.router)
app.include_router(edition.router)
app.include_router(team.router)
app.include_router(player.router)

@app.get("/games")
def read_games(db: Session = Depends(get_db)):
    return db.query(Game).all()

