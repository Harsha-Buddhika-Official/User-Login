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
│   │   └── services/
│   │       └── api.jsx       # API service layer with axios
│   └── package.json
└── Server/          # Node.js backend API
    ├── index.js              # Express server setup
    ├── models/
    │   └── Employee.js       # MongoDB user model
    └── package.json
```

## Features

- **User Registration**: Complete signup form with validation
- **User Authentication**: Login system with form validation
- **Responsive Design**: Built with Tailwind CSS and Lucide React icons
- **API Integration**: Axios-based API calls to backend
- **MongoDB Integration**: User data persistence with Mongoose
- **Client-side Routing**: React Router for navigation

## Tech Stack

### Frontend (Client)
- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Styling framework
- **Axios** - HTTP client for API calls
- **Lucide React** - Icon library

### Backend (Server)
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing

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
   Server will run on `http://localhost:3000`

3. **Start the frontend development server**
   ```bash
   cd Client
   npm run dev
   ```
   Client will run on `http://localhost:3000` (Vite config)

## API Endpoints

### Authentication
- `POST /register` - Register a new user
  - Body: `{ firstName, lastName, email, phone, dateOfBirth, password }`

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

- `/` - Home page
- `/signup` - User registration
- `/login` - User login

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Known Issues

- [ ] Login functionality not yet connected to backend
- [ ] Password confirmation validation needs implementation in SignUp
- [ ] Form submission in SignUp component needs completion

## Future Enhancements

- [ ] JWT token-based authentication
- [ ] Password encryption/hashing
- [ ] Email verification
- [ ] Password reset functionality
- [ ] User profile management
- [ ] Session management
