from fastapi import APIRouter
from ..services.post_service import PostService
from ..models.post import Post

class PostController:
    @staticmethod
    async def get_posts():
        posts = await PostService.get_all_posts()
        return {"data": posts}
    
    @staticmethod
    async def create_post(post: Post):
        post_id = await PostService.create_post(post.dict())
        return {"message": "Post created successfully", "id": post_id} 