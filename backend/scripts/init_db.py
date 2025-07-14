import psycopg2
import os

def run_sql_script(file_path: str):
    with open(file_path, "r") as file:
        sql = file.read()

    conn = psycopg2.connect(
        host=os.getenv("DB_HOST", "localhost"),
        port=os.getenv("DB_PORT", "5432"),
        dbname=os.getenv("DB_NAME"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD")
    )
    conn.autocommit = True
    cursor = conn.cursor()
    cursor.execute(sql)
    cursor.close()
    conn.close()
    print("Database initialized successfully.")

if __name__ == "__main__":
    run_sql_script("sql/init_db.sql")
