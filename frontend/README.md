# Blog Website Frontend

A modern React-based frontend for the Blog Website application.

## Features

- User authentication (Login/Register)
- Blog creation with rich text editor
- Responsive design
- Blog listing and single blog view
- Protected routes
- Toast notifications
- Mobile-friendly navigation

## Tech Stack

- React 18
- TypeScript
- Vite
- TailwindCSS
- React Router DOM
- TinyMCE Editor
- Axios
- React Toastify

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   └── ProtectedRoute.tsx
│   ├── contexts/
│   │   └── auth-contexts.tsx
│   ├── hooks/
│   │   ├── use-create-blogs.tsx
│   │   ├── use-get-blogs.tsx
│   │   └── use-get-single-blog.tsx
│   ├── pages/
│   │   ├── Auth/
│   │   │   ├── Login.tsx
│   │   │   └── Register.tsx
│   │   ├── Dashboard/
│   │   │   ├── Blog.tsx
│   │   │   └── index.tsx
│   │   └── Home/
│   │       └── index.tsx
│   ├── App.tsx
│   └── main.tsx
└── package.json
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file in the root directory:
```env
VITE_TINYMCE_API_KEY=your-api-key-here
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Environment Variables

The following environment variables are required:

- `VITE_TINYMCE_API_KEY`: Your TinyMCE API key for the rich text editor

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Features in Detail

### Authentication
- User registration with email
- Login with JWT token
- Protected routes for authenticated users
- Persistent authentication state

### Blog Management
- Create new blogs with rich text editor
- Upload images via URL
- View all blogs
- View single blog with full content
- Responsive image handling

### UI/UX
- Mobile-responsive design
- Toast notifications for user feedback
- Loading states and animations
- Error handling
- Clean and modern interface

## API Integration

The frontend integrates with the backend API running on `http://localhost:8000`. Key endpoints:

- `/register` - User registration
- `/login` - User authentication
- `/posts` - Blog post management
- `/users/me` - Current user information

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Development

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Implement proper error handling
- Write clean, documented code

### State Management

- Context API for global state
- Local state with useState
- Custom hooks for reusable logic

## License

MIT License
