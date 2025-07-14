from app.db import SessionLocal
from sqlalchemy import text

def run_sql_file(filepath):
    db = SessionLocal()
    try:
        with open(filepath, "r", encoding="utf-8") as file:
            sql_commands = file.read()
            db.execute(text(sql_commands))
            db.commit()
        print("✅ Script exécuté avec succès.")
    except Exception as e:
        print("❌ Erreur lors de l'exécution du script :", e)
    finally:
        db.close()

if __name__ == "__main__":
    run_sql_file("sql/init_db.sql")
