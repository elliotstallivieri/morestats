.PHONY: database database-reset run

database:
	@echo "Creating database tables..."
	@python app/create_db.py

database-reset: database

run:
	@uvicorn app.main:app --reload
