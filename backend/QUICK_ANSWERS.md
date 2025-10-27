# Quick Answers for Common Judge Questions

## Technical Stack

**Q: What technologies did you use?**
- **Backend:** Node.js with Express framework
- **Language:** TypeScript for type safety
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens)
- **Security:** bcrypt for password hashing, Helmet for security headers, CORS

---

## Architecture

**Q: Explain your architecture**
- **MVC Pattern:** Models (Mongoose schemas), Controllers (business logic), Routes (endpoints)
- **Middleware:** Authentication verification, error handling
- **Three-tier:** Routes → Controllers → Database
- **RESTful design:** Standard HTTP methods and status codes

---

## Database

**Q: Why MongoDB?**
- Flexible schema for temple data with varying fields
- Easy to store arrays (opening hours, events, FAQs)
- Mongoose provides validation and relationships
- Good for read-heavy applications like temple browsing

**Q: What are your collections?**
1. **Users:** Authentication, favorites, role
2. **Temples:** Temple data, ratings, events
3. **Reviews:** Ratings linked to users and temples

**Q: How do you handle relationships?**
- References using ObjectIds
- Populated queries to fetch related data
- Compound indexes for data integrity

---

## Security

**Q: How do you secure passwords?**
- bcrypt hashing with 10 salt rounds
- Passwords never stored in plain text
- Excluded from queries by default (select: false)

**Q: How does authentication work?**
- User registers → password hashed → saved to DB
- User logs in → credentials verified → JWT token issued
- Token sent in Authorization header for protected routes
- Middleware verifies token before accessing protected resources

**Q: What security measures did you implement?**
- JWT authentication
- Password hashing (bcrypt)
- Helmet.js for security headers
- CORS configuration
- Input validation
- Role-based access control
- Environment variables for secrets

---

## Features

**Q: What's unique about your API?**
- **Automatic rating aggregation:** Reviews auto-update temple ratings
- **Favorites system:** Users can bookmark temples
- **Advanced filtering:** Region, search, sorting
- **One review per user per temple:** Enforced at DB level
- **Admin capabilities:** Role-based temple management

**Q: How do reviews work?**
- Protected route - requires authentication
- User can review each temple once (enforced by compound index)
- Rating 1-5 stars
- Automatically calculates and updates temple's average rating
- Linked to user (shows reviewer name)

---

## API Design

**Q: Why RESTful?**
- Industry standard
- Easy to understand and use
- Proper HTTP methods (GET, POST, PUT, DELETE)
- Consistent URL structure
- Standard status codes

**Q: What's your response format?**
```json
{
  "success": true/false,
  "data": {...} or "error": "message"
}
```

---

## Scalability

**Q: Is this scalable?**
- **Yes:** Modular architecture allows easy additions
- Database indexes for fast queries
- Middleware pattern for cross-cutting concerns
- Environment-based configuration
- Stateless JWT authentication (no server sessions)

**Q: How would you handle more traffic?**
- Add caching (Redis)
- Database replication
- Load balancing
- Rate limiting
- CDN for static content

---

## Error Handling

**Q: How do you handle errors?**
- Centralized error handling middleware
- Try-catch blocks in async functions
- Mongoose validation errors
- Custom error messages
- Proper HTTP status codes (400, 401, 404, 500)

---

## Testing

**Q: How would you test this?**
- Unit tests for controllers
- Integration tests for API endpoints
- Database mocking for tests
- Tools: Jest, Supertest
- Test authentication flows
- Validate business logic

---

## Deployment

**Q: How would you deploy this?**
- **Backend:** Heroku, Railway, Render, or DigitalOcean
- **Database:** MongoDB Atlas (cloud)
- **Environment:** Production .env with secure secrets
- **Process:** 
  1. Build TypeScript to JavaScript
  2. Set environment variables
  3. Start server with PM2
  4. Enable SSL/HTTPS

---

## TypeScript

**Q: Why TypeScript?**
- Type safety prevents runtime errors
- Better IDE support and autocomplete
- Easier refactoring
- Self-documenting code
- Industry best practice for Node.js projects

---

## Performance

**Q: How did you optimize performance?**
- Database indexes on frequently queried fields
- Text index for search functionality
- Lean queries when full documents not needed
- Proper HTTP caching headers
- Efficient aggregation pipelines for ratings

---

## Future Improvements

**Q: What would you add next?**
- Image upload for temples (AWS S3)
- Email verification for users
- Password reset functionality
- Social login (Google, Facebook)
- Real-time notifications (WebSockets)
- Analytics dashboard for admins
- Rate limiting for API protection
- Pagination for large datasets
- Geolocation-based temple search
- Multi-language support in API

---

## Code Quality

**Q: How do you ensure code quality?**
- TypeScript for type checking
- ESLint for code standards
- Consistent naming conventions
- Modular structure (separation of concerns)
- Comments for complex logic
- Environment variables for configuration
- Git version control

---

## Time Complexity

**Q: What's the complexity of your queries?**
- Get all temples: O(n)
- Get single temple: O(1) with index on ID
- Search: O(n) with text index optimization
- Reviews for temple: O(m) where m = number of reviews
- Rating calculation: O(m) aggregation

---

## Remember These Numbers

- **3 collections** (Users, Temples, Reviews)
- **15+ API endpoints**
- **2 user roles** (user, admin)
- **JWT expires in 7 days**
- **bcrypt salt rounds: 10**
- **Password min length: 6 characters**
- **Review rating: 1-5 stars**
- **Port: 5000**

---

## If You Don't Know Something

**Be honest:**
- "That's a great question. In a production environment, I would research [X] and implement it."
- "I haven't implemented that yet, but here's how I would approach it..."
- "That's outside my current implementation, but I'd love to learn more about it."

**Redirect to strengths:**
- "While I haven't done X, let me show you Y which demonstrates similar concepts..."
