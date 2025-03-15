# Chat App (MERN + Socket.io)

This is a real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.io for real-time messaging.

## Features
- Real-time messaging with Socket.io
- User authentication (Login & Signup)
- Group and one-on-one chat support
- Responsive UI

## Tech Stack
### Frontend (SC Frontend)
- React.js (with React Router DOM for navigation)
- CSS (for styling)
- Axios (for API calls)
- Socket.io-client (for real-time communication)

### Backend (CD Backend)
- Node.js with Express.js
- MongoDB (Database)
- Mongoose (ODM for MongoDB)
- Socket.io (for real-time communication)
- bcrypt (for password hashing)
- JWT (for authentication)

## Getting Started
### Prerequisites
Make sure you have the following installed:
- Node.js (Latest LTS version recommended)
- MongoDB (Local or Cloud - MongoDB Atlas)

### Installation
#### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/chat-app.git
cd chat-app
```

#### 2. Setup Backend (CD Backend)
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder and add the following:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend server:
```bash
npm start
```

#### 3. Setup Frontend (SC Frontend)
```bash
cd ../frontend
npm install
```

Start the frontend server:
```bash
npm start
```

### Running the App
1. Start the backend first (`npm start` in `backend` folder)
2. Start the frontend (`npm start` in `frontend` folder)
3. Open the app in your browser at `http://localhost:3000` (or the port your frontend runs on)

## Usage
- Sign up or log in with your credentials
- Start a chat with a user or a group
- Send and receive messages in real time

## Contributing
Feel free to fork this repository and make improvements! PRs are welcome. 😊

## Acknowledgments
Thanks to Socket.io and MERN stack for making real-time communication easy!

## License
No license is applied to this project.

