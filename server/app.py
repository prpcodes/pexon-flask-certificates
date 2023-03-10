import os
import psycopg2
from dotenv import load_dotenv
from flask import Flask, request
from flask_cors import CORS
import itertools
import re

app = Flask(__name__)
CORS(app)

# Load the environment variables from the .env file
load_dotenv()
DATABASE_URL = os.getenv('DATABASE_URL')

# Connect to the database
connection = psycopg2.connect(DATABASE_URL)


# Create the tables in the database if they don't exist
CREATE_CERTIFICATES_TABLE = (
    "CREATE TABLE IF NOT EXISTS certificates (id SERIAL PRIMARY KEY, name VARCHAR(50) NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);"
)

INSERT_CERTIFICATION = (
    "INSERT INTO certificates (name) VALUES (%s) RETURNING id, name, created_at;"
)

DELETE_CERTIFICATION = (
    "DELETE FROM certificates WHERE id = %s RETURNING id, name, created_at;"
)

# Get all the certifications from the database table
@app.get('/api/certifications')
def get_certifications():
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM certificates;")
            certifications = cursor.fetchall()
            # Convert the list of tuples to a list of dictionaries
    except Exception as e:
        return {'message': 'An error occurred while fetching the certifications'}, 500
    return {'certifications': [dict(itertools.zip_longest(['id', 'name', 'created_at'], certification)) for certification in certifications]}, 200

# Create a new certification in the database table
@app.post('/api/certification')
def create_certification():
    name = request.json.get('name')
    if not name or not re.match(r'^[a-zA-Z0-9()/ -]+$', name):
        return {'message': 'Missing name parameter'}, 400
    try:
        with connection.cursor() as cursor:
            # Create the table if it doesn't exist
            cursor.execute(CREATE_CERTIFICATES_TABLE)
            # Insert the certification into the database table
            cursor.execute(INSERT_CERTIFICATION, (name,))
            certification = cursor.fetchone()
        connection.commit()
    except Exception as e:
        return {'message': 'An error occurred while creating the certification'}, 500
    return {'message': 'Certification created successfully', 'certification': dict(itertools.zip_longest(['id', 'name', 'created_at'], certification))}, 201

# Delete a certification from the database table
@app.delete('/api/certification/<int:id>')
def delete_certification(id):
    try:
        with connection.cursor() as cursor:
            cursor.execute(DELETE_CERTIFICATION, (id,))
            certification = cursor.fetchone()
        connection.commit()
    except Exception as e:
        return {'message': 'An error occurred while deleting the certification'}, 500
    return {'message': 'Certification deleted successfully', 'certification': dict(itertools.zip_longest(['id', 'name', 'created_at'], certification))}, 200