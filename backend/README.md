# TempleVerse Backend API

RESTful API built with Node.js, Express, TypeScript, and MongoDB for the TempleVerse temple exploration application.

## Features

- 🔐 **JWT Authentication** - Secure user registration and login
- 👤 **User Management** - User profiles with favorites
- 🏛️ **Temple CRUD** - Complete temple management (admin)
- ⭐ **Reviews & Ratings** - Users can review temples
- 🔍 **Search & Filter** - Search temples by name, location, deity, and region
- 📊 **Aggregate Ratings** - Automatic calculation of average ratings

## Tech Stack

- **Node.js** - Runtime environment
- **Express** - Web framework
- **TypeScript** - Type-safe development
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing

## Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)
- npm or yarn

## Installation

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your configuration
# Set your MongoDB URI and JWT secret
```

## Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/templeverse
JWT_SECRET=your-super-secret-jwt-key-change-this
JWT_EXPIRE=7d
CLIENT_URL=http://localhost:8080
```

### MongoDB Setup Options

**Option 1: Local MongoDB**
```
MONGODB_URI=mongodb://localhost:27017/templeverse
```

**Option 2: MongoDB Atlas (Cloud)**
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/templeverse
```

## Running the Application

```bash
# Development mode (with hot reload)
npm run dev

# Build TypeScript
npm run build

# Production mode
npm start

# Seed database with sample data
npm run seed
```

## API Endpoints

### Authentication

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/auth/register` | Register new user | Public |
| POST | `/api/auth/login` | Login user | Public |
| GET | `/api/auth/me` | Get current user | Private |

### Temples

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/temples` | Get all temples | Public |
| GET | `/api/temples/:id` | Get single temple | Public |
| POST | `/api/temples` | Create temple | Admin |
| PUT | `/api/temples/:id` | Update temple | Admin |
| DELETE | `/api/temples/:id` | Delete temple | Admin |
| POST | `/api/temples/:id/favorite` | Add to favorites | Private |
| DELETE | `/api/temples/:id/favorite` | Remove from favorites | Private |

### Reviews

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/temples/:id/reviews` | Get temple reviews | Public |
| POST | `/api/temples/:id/reviews` | Create review | Private |
| PUT | `/api/reviews/:id` | Update review | Private (Owner) |
| DELETE | `/api/reviews/:id` | Delete review | Private (Owner/Admin) |

## Request Examples

### Register User
```bash
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Login
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Get Temples (with filters)
```bash
GET /api/temples?region=Mangalore&sort=rating
```

### Create Review
```bash
POST /api/temples/mangaladevi-temple/reviews
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
  "rating": 5,
  "comment": "Beautiful temple with rich history",
  "visitDate": "2024-10-15"
}
```

## Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.ts          # MongoDB connection
│   ├── controllers/
│   │   ├── authController.ts    # Auth logic
│   │   ├── templeController.ts  # Temple CRUD
│   │   └── reviewController.ts  # Review logic
│   ├── middleware/
│   │   ├── auth.ts              # JWT verification
│   │   └── errorHandler.ts      # Error handling
│   ├── models/
│   │   ├── User.ts              # User schema
│   │   ├── Temple.ts            # Temple schema
│   │   └── Review.ts            # Review schema
│   ├── routes/
│   │   ├── authRoutes.ts        # Auth endpoints
│   │   ├── templeRoutes.ts      # Temple endpoints
│   │   └── reviewRoutes.ts      # Review endpoints
│   ├── utils/
│   │   └── seedDatabase.ts      # Database seeder
│   └── server.ts                # App entry point
├── .env.example
├── package.json
├── tsconfig.json
└── README.md
```

## Database Models

### User Model
- name, email, password (hashed)
- role (user/admin)
- favorites (array of temple references)

### Temple Model
- Basic info: name, location, deity, description
- Opening hours, FAQs, events
- Travel information
- Average rating & total reviews

### Review Model
- Temple and user references
- Rating (1-5), comment, visit date
- Helpful count
- Automatic rating calculation

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Protected routes with middleware
- Role-based access control (RBAC)
- Helmet.js security headers
- CORS configuration
- Input validation

## Error Handling

The API uses consistent error responses:

```json
{
  "success": false,
  "error": "Error message here"
}
```

## Development

```bash
# Install dependencies
npm install

# Run in dev mode with watch
npm run dev

# Build for production
npm run build

# Run tests (when implemented)
npm test
```

## Deployment

1. Set `NODE_ENV=production`
2. Use MongoDB Atlas for database
3. Set strong `JWT_SECRET`
4. Configure CORS for your frontend domain
5. Deploy to services like Heroku, Railway, or Render

## License

MIT
