# TempleVerse – Coastal Temples of Mangalore & Udupi

A comprehensive full-stack digital guide to explore the sacred temples and divine heritage of Karnataka's coastal region, featuring temples from Mangalore, Udupi, and surrounding areas of Tulunadu.

## Features

### Frontend
- 📍 Interactive map view with temple locations
- 📖 Detailed temple histories and descriptions
- 🗓️ Event calendar with temple festivals
- 🔊 Text-to-speech in English and Kannada
- 🌐 Bilingual support (English/ಕನ್ನಡ)
- 📱 Fully responsive design

### Backend
- 🔐 User authentication (JWT)
- ⭐ Review & rating system
- 💾 MongoDB database integration
- 🔍 Advanced search & filtering
- 👤 User profiles with favorites
- 🛡️ Admin panel for temple management

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas account)

### Installation

#### Frontend Setup

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd coastal-divine-verse

# Install frontend dependencies
npm install

# Start frontend development server
npm run dev
```

The frontend will be available at `http://localhost:8080`

#### Backend Setup

```sh
# Navigate to backend directory
cd backend

# Install backend dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env and add your MongoDB URI and JWT secret
# MONGODB_URI=mongodb://localhost:27017/templeverse
# JWT_SECRET=your-secret-key

# Seed the database with sample data
npm run seed

# Start backend development server
npm run dev
```

The backend API will be available at `http://localhost:5000`

### Running Full Stack

**Terminal 1 - Frontend:**
```sh
cd coastal-divine-verse
npm run dev
```

**Terminal 2 - Backend:**
```sh
cd coastal-divine-verse/backend
npm run dev
```

## Build for Production

### Frontend
```sh
npm run build
```

### Backend
```sh
cd backend
npm run build
npm start
```

## Technologies Used

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Accessible component library
- **React Leaflet** - Interactive maps
- **React Router** - Client-side routing
- **Lucide Icons** - Beautiful icon library

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **TypeScript** - Type-safe development
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **bcrypt** - Password hashing

## Project Structure

```
coastal-divine-verse/
├── backend/                    # Backend API
│   ├── src/
│   │   ├── config/            # Database configuration
│   │   ├── controllers/       # Route controllers
│   │   ├── middleware/        # Auth & error handling
│   │   ├── models/            # MongoDB models
│   │   ├── routes/            # API routes
│   │   ├── utils/             # Utilities & seeders
│   │   └── server.ts          # Entry point
│   ├── package.json
│   └── tsconfig.json
├── src/                       # Frontend
│   ├── components/            # Reusable UI components
│   ├── pages/                 # Page components
│   ├── data/                  # Temple data & translations
│   ├── context/               # React contexts
│   └── assets/                # Images & static files
├── package.json
└── README.md
```

## API Documentation

See [backend/README.md](backend/README.md) for detailed API documentation including:
- Authentication endpoints
- Temple CRUD operations
- Review management
- Request/response examples

## Environment Variables

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

### Backend (backend/.env)
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/templeverse
JWT_SECRET=your-super-secret-key
JWT_EXPIRE=7d
CLIENT_URL=http://localhost:8080
```

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

This project is open source and available under the MIT License.
