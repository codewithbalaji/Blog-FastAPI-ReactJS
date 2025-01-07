# Blog Website Backend

A FastAPI-based backend service for the Blog Website application.

## Features

- User authentication (register/login)
- Blog post management (create/read/update/delete)
- MongoDB integration
- JWT-based authentication
- RESTful API endpoints

## Tech Stack

- Python 3.8+
- FastAPI
- MongoDB
- PyJWT
- Bcrypt for password hashing
- Pydantic for data validation

## Project Structure

```
backend/
├── app/
│   ├── controllers/
│   │   ├── post_controller.py
│   │   └── user_controller.py
│   ├── core/
│   │   ├── config.py
│   │   └── security.py
│   ├── database/
│   │   └── mongodb.py
│   ├── models/
│   │   ├── post.py
│   │   └── user.py
│   ├── routes/
│   │   ├── post_routes.py
│   │   └── user_routes.py
│   └── services/
│       ├── post_service.py
│       └── user_service.py
└── requirements.txt
```

## Setup

1. Create a virtual environment:
```bash
python -m venv env
```

2. Activate the virtual environment:
```bash
# Windows
.\env\Scripts\activate

# Unix or MacOS
source env/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Set up MongoDB:
- Install MongoDB locally or use MongoDB Atlas
- Update the connection string in `app/database/mongodb.py`

5. Run the application:
```bash
uvicorn main:app --reload
```

## API Endpoints

### Authentication
- `POST /register` - Register a new user
- `POST /login` - Login user and get JWT token

### Blog Posts
- `GET /posts` - Get all blog posts
- `GET /posts/{id}` - Get a specific blog post
- `POST /posts` - Create a new blog post (requires authentication)
- `PUT /posts/{id}` - Update a blog post (requires authentication)
- `DELETE /posts/{id}` - Delete a blog post (requires authentication)

### Users
- `GET /users/me` - Get current user profile (requires authentication)

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
SECRET_KEY=your-secret-key
MONGODB_URL=your-mongodb-connection-string
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

## Security

- Passwords are hashed using bcrypt
- JWT tokens are used for authentication
- Protected routes require valid JWT token
- CORS middleware enabled for frontend integration

## Development

1. Follow the setup instructions above
2. Make your changes
3. Test your changes
4. Create a pull request

## Testing

Run tests using pytest:
```bash
pytest
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## License

MIT License
