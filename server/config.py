from decouple import config

class Config: 
    DATABASE_HOST=config('DATABASE_HOST')
    DATABASE_NAME=config('DATABASE_PASSWORD')
    DATABASE_USER=config('DATABASE_PASSWORD')
    DATABASE_PASSWORD=config('DATABASE_PASSWORD')
    SQLALCHEMY_TRACK_MODIFICATIONS=config('SQLALCHEMY_TRACK_MODIFICATIONS', cast=bool, default=False)
    
class DevelopmentConfig(Config):
    SQLALCHEMY_DATABASE_URI = 'postgresql://{DATABASE_USER}:{DATABASE_PASSWORD}@{DATABASE_HOST}/{DATABASE_NAME}'
    DEBUG = True
    SQLALCHEMY_ECHO = True
    
class ProductionConfig(Config):
    pass

class TestingConfig(Config):
    pass
    
    
    