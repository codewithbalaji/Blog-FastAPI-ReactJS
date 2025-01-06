from pydantic import BaseModel

class Settings(BaseModel):
    SECRET_KEY: str = "your-secret-key-here"  # In production, use a secure secret key
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

settings = Settings() 