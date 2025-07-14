# test_db_connection.py
from app.db import SessionLocal
from sqlalchemy import text

def test_connection():
    db = SessionLocal()
    try:
        # Test de connexion simple
        db.execute(text("SELECT 1"))
        print("✅ Connexion réussie à la base de données.")

        # Récupération des tables existantes
        result = db.execute(text("""
            SELECT table_name
            FROM information_schema.tables
            WHERE table_schema = 'public'
              AND table_type = 'BASE TABLE';
        """))

        tables = [row[0] for row in result]
        if tables:
            print("📋 Tables présentes dans la base de données :")
            for table in tables:
                print(f" - {table}")
        else:
            print("⚠️ Aucune table trouvée dans le schéma public.")
        db_name = db.execute(text("SELECT current_database()")).scalar()
        print(f"📌 Connecté à la base : {db_name}")

    except Exception as e:
        print("❌ Échec de la connexion à la base de données.")
        print(e)
    finally:
        db.close()

if __name__ == "__main__":
    test_connection()
