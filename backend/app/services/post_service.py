from ..database.mongodb import db
from bson import json_util
import json

class PostService:
    @staticmethod
    async def get_all_posts():
        posts = list(db.posts.find())
        return json.loads(json_util.dumps(posts))
    
    @staticmethod
    async def create_post(post: dict):
        result = db.posts.insert_one(post)
        return str(result.inserted_id) 