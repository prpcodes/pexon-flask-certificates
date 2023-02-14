from flask import Flask
from flask_restx import Api, Resource
from config import DevelopmentConfig

app = Flask(__name__)
app.config.from_object(DevelopmentConfig)
api = Api(app, doc='/docs')

@api.route('/certifications')
class Certifications(Resource):
    # Get all certifications
    def get(self):
        return {'certifications': [
            {"id": "0", "name": "AWS Cloud Practitioner"},
            {"id": "1", "name": "AWS Solutions Architect - Associate"},
            {"id": "2", "name": "AWS Solutions Architect - Professional"},
            {"id": "3", "name": "AWS Developer - Associate"},
        ]}
    # Add a new certification
    # Delete a specific certification

if __name__ == '__main__':
    app.run(debug=True)
