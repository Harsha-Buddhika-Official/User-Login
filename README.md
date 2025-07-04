# User Login System

A full-stack user authentication system built with React, Node.js, Express, and MongoDB.

## Project Structure

```
User-Login/
├── Client/          # React frontend application
│   ├── src/
│   │   ├── App.jsx           # Main app component with routing
│   │   ├── Home.jsx          # Home page component
│   │   ├── Login.jsx         # Login form component
│   │   ├── SignUp.jsx        # Registration form component
│   │   ├── Dashboard.jsx     # Protected dashboard component
│   │   └── services/
│   │       └── authService.jsx # Authentication service layer with axios
│   └── package.json
└── Server/          # Node.js backend API
    ├── index.js              # Express server setup
    ├── models/
    │   └── Employee.js       # MongoDB user model
    └── package.json
```

## Features

- **User Registration**: Complete signup form with validation using react-hook-form
- **User Authentication**: Login system with form validation and error handling
- **Protected Routes**: Dashboard accessible only after login
- **Responsive Design**: Built with Tailwind CSS and Lucide React icons
- **API Integration**: Axios-based API calls to backend via authService
- **MongoDB Integration**: User data persistence with Mongoose
- **Client-side Routing**: React Router for navigation
- **Form Validation**: Comprehensive validation with react-hook-form
- **Local Storage**: User session management

## Tech Stack

### Frontend (Client)
- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Styling framework
- **Axios** - HTTP client for API calls
- **Lucide React** - Icon library
- **React Hook Form** - Form validation and management

### Backend (Server)
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **bcrypt/bcryptjs** - Password hashing (installed but not implemented)
- **jsonwebtoken** - JWT token handling (installed but not implemented)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally on port 27017)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd User-Login
   ```

2. **Install client dependencies**
   ```bash
   cd Client
   npm install
   ```

3. **Install server dependencies**
   ```bash
   cd ../Server
   npm install
   ```

### Running the Application

1. **Start MongoDB** (make sure MongoDB is running on `mongodb://localhost:27017/employee`)

2. **Start the backend server**
   ```bash
   cd Server
   npm start
   ```
   Server will run on `http://localhost:5001`

3. **Start the frontend development server**
   ```bash
   cd Client
   npm run dev
   ```
   Client will run on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /register` - Register a new user
  - Body: `{ firstName, lastName, email, phone, dateOfBirth, password }`
  - Response: Created user object
- `POST /login` - Authenticate user
  - Body: `{ email, password }`
  - Response: `{ success: boolean, message: string }`

## Available Scripts

### Client
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Server
- `npm start` - Start server with nodemon
- `npm test` - Run tests (not implemented)

## Database Schema

### Employee Model
```javascript
{
  firstName: String,
  lastName: String,
  email: String,
  phone: Number,
  dateOfBirth: Date,
  password: String
}
```

## Routes

- `/` - Home page with login/signup buttons
- `/signup` - User registration form
- `/login` - User login form
- `/dashboard` - Protected dashboard (requires authentication)

## Form Validation

### Sign Up Form
- First Name: Required, minimum 2 characters
- Last Name: Required, minimum 2 characters
- Email: Required, valid email format
- Phone: Required, valid phone number format
- Date of Birth: Required, user must be 18+ years old
- Password: Required, minimum 8 characters, must contain uppercase, lowercase, and number
- Confirm Password: Must match password
- Terms & Conditions: Must be accepted

### Login Form
- Email: Required, valid email format
- Password: Required, minimum 6 characters
- Remember Me: Optional checkbox

## Security Features

- Client-side form validation
- Password visibility toggle
- Age validation (18+ required)
- Email format validation
- Password strength requirements

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Current Status

### Completed Features
- ✅ User registration with full form validation
- ✅ User login with authentication
- ✅ Protected dashboard route
- ✅ Local storage session management
- ✅ Responsive UI design
- ✅ API integration between frontend and backend

### Known Issues
- ⚠️ Passwords are stored in plain text (no encryption)
- ⚠️ No JWT token implementation
- ⚠️ Case sensitivity issue in model import (`Employee.js` vs `employee`)

## Future Enhancements

- [ ] JWT token-based authentication
- [ ] Password encryption/hashing implementation
- [ ] Email verification
- [ ] Password reset functionality
- [ ] User profile management
- [ ] Session timeout handling
- [ ] Input sanitization
- [ ] Rate limiting for API endpoints
- [ ] User role management
