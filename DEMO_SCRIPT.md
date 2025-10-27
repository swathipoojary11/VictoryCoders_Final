# Backend Demo Script for Judges

## Pre-Demo Setup (Do this before judges arrive)

### 1. Start MongoDB
```bash
# Windows: MongoDB should auto-start as service
# Or manually: mongod
```

### 2. Start Backend Server
```bash
cd backend
npm run dev
```

You should see:
```
✅ MongoDB Connected: localhost
🚀 Server running in development mode on port 5000
```

### 3. Seed Database (if not done)
```bash
npm run seed
```

---

## Live Demo for Judges (Copy-Paste These Commands)

### Step 1: Health Check
**What to say:** "First, let me show the API is running"

```bash
curl http://localhost:5000/api/health
```

**Expected output:**
```json
{
  "success": true,
  "message": "TempleVerse API is running",
  "timestamp": "2024-10-26T..."
}
```

---

### Step 2: Get All Temples
**What to say:** "Here's our temple database with MongoDB integration"

```bash
curl http://localhost:5000/api/temples
```

**Show features:** Returns all temples with ratings, region info, events

---

### Step 3: Filter by Region
**What to say:** "We have advanced filtering - let me show temples in Mangalore region"

```bash
curl "http://localhost:5000/api/temples?region=Mangalore"
```

---

### Step 4: Register a User
**What to say:** "Now I'll demonstrate user authentication with password hashing"

```bash
curl -X POST http://localhost:5000/api/auth/register ^
  -H "Content-Type: application/json" ^
  -d "{\"name\":\"Demo User\",\"email\":\"demo@temple.com\",\"password\":\"secure123\"}"
```

**Expected output:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "...",
    "name": "Demo User",
    "email": "demo@temple.com",
    "role": "user"
  }
}
```

**What to explain:** 
- Password is hashed with bcrypt (not stored in plain text)
- JWT token returned for authentication
- User automatically gets 'user' role

---

### Step 5: Login
**What to say:** "Let me login with the same credentials"

```bash
curl -X POST http://localhost:5000/api/auth/login ^
  -H "Content-Type: application/json" ^
  -d "{\"email\":\"demo@temple.com\",\"password\":\"secure123\"}"
```

**Copy the token from response** - You'll need it for next steps!

---

### Step 6: Create a Review (Protected Route)
**What to say:** "Now I'll create a review - this requires JWT authentication"

**IMPORTANT:** Replace `YOUR_TOKEN_HERE` with the actual token from Step 5!

```bash
curl -X POST http://localhost:5000/api/temples/mangaladevi-temple/reviews ^
  -H "Content-Type: application/json" ^
  -H "Authorization: Bearer YOUR_TOKEN_HERE" ^
  -d "{\"rating\":5,\"comment\":\"Beautiful temple with rich history!\",\"visitDate\":\"2024-10-15\"}"
```

**Expected output:**
```json
{
  "success": true,
  "data": {
    "temple": "...",
    "user": {
      "name": "Demo User"
    },
    "rating": 5,
    "comment": "Beautiful temple with rich history!",
    "visitDate": "2024-10-15T00:00:00.000Z"
  }
}
```

**What to explain:**
- Protected route - requires valid JWT token
- Review linked to user and temple
- Rating automatically updates temple's average

---

### Step 7: Get Temple Reviews
**What to say:** "Let me fetch all reviews for this temple"

```bash
curl http://localhost:5000/api/temples/mangaladevi-temple/reviews
```

**Show:** Your review appears with user name attached

---

### Step 8: Add Temple to Favorites
**What to say:** "Users can save favorite temples - another protected route"

```bash
curl -X POST http://localhost:5000/api/temples/mangaladevi-temple/favorite ^
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

### Step 9: Get Current User Info
**What to say:** "Let me show the user profile with favorites"

```bash
curl http://localhost:5000/api/auth/me ^
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

**Shows:** User data with favorites array populated

---

### Step 10: Sort by Rating
**What to say:** "We support sorting - here are temples sorted by highest rating"

```bash
curl "http://localhost:5000/api/temples?sort=rating"
```

---

## Key Points to Emphasize

### 1. **Security Features**
- ✅ Passwords hashed with bcrypt (10 salt rounds)
- ✅ JWT authentication for protected routes
- ✅ Role-based access control (user vs admin)
- ✅ CORS configured
- ✅ Helmet security headers

### 2. **Database Design**
- ✅ MongoDB with Mongoose ODM
- ✅ Three related collections: Users, Temples, Reviews
- ✅ Automatic average rating calculation
- ✅ Data validation and constraints

### 3. **API Design**
- ✅ RESTful endpoints
- ✅ Proper HTTP methods (GET, POST, PUT, DELETE)
- ✅ Query parameters for filtering/sorting
- ✅ Consistent JSON response format

### 4. **Advanced Features**
- ✅ One review per user per temple (enforced at DB level)
- ✅ Automatic rating aggregation
- ✅ Favorites system
- ✅ Search and filter functionality

---

## If Judges Ask Questions

### "How do you handle passwords?"
"We use bcrypt with 10 salt rounds to hash passwords before storing. Plain text passwords are never saved in the database."

### "What about authentication?"
"JWT tokens are generated on login and verified using middleware on protected routes. Tokens expire after 7 days by default."

### "How do you prevent duplicate reviews?"
"MongoDB compound index on temple+user ensures one review per user per temple. Attempts to create duplicates are rejected."

### "What's your database structure?"
"Three main models: User (auth and favorites), Temple (temple data and ratings), Review (linked to both user and temple with auto-rating calculation)."

### "How do you calculate average ratings?"
"Mongoose middleware automatically recalculates temple's average rating whenever a review is created or deleted using aggregation pipeline."

### "Is this production-ready?"
"Yes - includes environment variables, error handling, validation, security headers, CORS, logging, and TypeScript for type safety."

---

## Troubleshooting During Demo

### If server isn't running:
```bash
cd backend
npm run dev
```

### If MongoDB connection fails:
- Check if MongoDB service is running
- Verify MONGODB_URI in .env file

### If "JWT token invalid":
- Get new token by logging in again (Step 5)
- Copy the full token including "Bearer " prefix

### If "Temple not found":
- Run seed script: `npm run seed`
- Use temple IDs from GET /api/temples response

---

## Opening Statement to Judges

*"I've built a full-stack REST API for a temple exploration platform using Node.js, Express, TypeScript, and MongoDB. It includes JWT authentication, a review system with automatic rating aggregation, role-based access control, and advanced filtering. Let me demonstrate the key features."*

---

## Closing Statement

*"This backend demonstrates industry-standard practices: secure authentication, proper database design with relationships, RESTful API structure, comprehensive error handling, and security best practices. It's fully documented, type-safe with TypeScript, and production-ready."*
