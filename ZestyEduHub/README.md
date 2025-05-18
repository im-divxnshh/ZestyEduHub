# Zesty Hub 🚀

Welcome to **Zesty Hub** – the all-in-one platform for seamless communication, collaboration, and fun! Whether you're chatting with friends, making video calls, or coding together, Zesty Hub has everything you need to stay connected in real-time. 🎉

## Features ✨

- **User Authentication 🔒**: Secure login with Email/Password or Google Sign-In.
- **Dashboard 📊**: A user-friendly dashboard to manage your profile, settings, and more.
- **Friends & Chat 💬**: Add friends, send messages, and share resources.
- **Video Calls 📹**: High-quality video calls with friends or group members.
- **Collaborative IDE 💻**: Real-time collaboration on coding and document creation in a built-in IDE.
- **Groups 👥**: Create and join groups for chats, video calls, and collaborative work.

## Tech Stack 🛠️

### Frontend:
- **React.js**: Build dynamic user interfaces with the power of JavaScript.
- **Tailwind CSS**: Utility-first CSS framework for building responsive, customizable designs.

### Backend:
- **Node.js**: JavaScript runtime for scalable server-side logic.
- **Express.js**: Web framework for handling HTTP requests and managing server-side operations.
- **WebRTC**: Peer-to-peer communication for fast, low-latency video calls and data exchange.

### Database:
- **Firebase Firestore**: Real-time NoSQL database for storing user data and group info.

### Authentication:
- **Firebase Authentication**: Secure, seamless user authentication using Email/Password or Google login.

## Features in Detail 📋

### 1. **User Authentication 🔑**
Easily sign up and log in using your **Email/Password** or **Google Authentication**. Your security and privacy are top priorities.

### 2. **Dashboard 🏠**
A personalized space to manage:
- Account settings ⚙️
- Friends list 📇
- Group management 🏆
- Notifications 🔔

### 3. **Chat & Friends 💬**
- Add friends and chat with them in real-time.
- Share images, documents, and links effortlessly.
  
### 4. **Video Calling 🎥**
Initiate **peer-to-peer video calls** with friends or group members. Powered by **WebRTC** for a smooth and high-quality experience.

### 5. **Collaborative IDE 📝**
Write, edit, and share documents or code with others in real-time. Perfect for **collaborative projects**.

### 6. **Groups 🧑‍🤝‍🧑**
Create or join groups to:
- Chat 🗣️
- Video call 🎥
- Collaborate on projects together 🛠️

## Setup Instructions 🛠️

### 1. **Clone the Repository 🖥️**
```bash
git clone https://github.com/your-username/zesty-hub.git
cd zesty-hub
```

### 2. **Install Dependencies 📦**

#### Frontend (React.js):
```bash
cd client
npm install
```

#### Backend (Node.js + Express.js):
```bash
cd server
npm install
```

### 3. **Configure Firebase 🔥**
- Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
- Set up **Firebase Authentication** and **Firestore Database**.
- Obtain your **Firebase config keys** and update them in `client/src/utils/firebaseConfig.js`.

### 4. **WebRTC Server Setup ⚡**
For video call functionality, you'll need a WebRTC signaling server.

- Install and configure the WebRTC server by following the instructions in the `server/webrtc-server/` directory.

### 5. **Run the Application 🏃‍♂️**

#### Frontend (React.js):
```bash
cd client
npm start
```
- The frontend will be available at [http://localhost:3000](http://localhost:3000).

#### Backend (Express.js):
```bash
cd server
npm start
```
- The backend will be available at [http://localhost:5000](http://localhost:5000).

### 6. **Environment Variables 🌱**

Make sure to create a `.env` file in the root of the backend server directory and add your Firebase and WebRTC credentials, for example:

```ini
FIREBASE_API_KEY=your-api-key
FIREBASE_AUTH_DOMAIN=your-auth-domain
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_STORAGE_BUCKET=your-storage-bucket
FIREBASE_MESSAGING_SENDER_ID=your-sender-id
FIREBASE_APP_ID=your-app-id
WEBRTC_SERVER_URL=your-webrtc-server-url
```

### 7. **Development Mode ⚙️**
The app runs in **development mode** by default. As you make changes, both the client and server will auto-refresh (via hot reloading). You can easily modify components, update logic, or add new features.

---

## Contributing 🤝

We welcome contributions to Zesty Hub! If you want to help us improve, here's how you can get started:

1. **Fork** the repository
2. **Create a new branch** 🏗️
3. **Make your changes** 🔧
4. **Create a pull request** 🚀

---

## License 📜

Distributed under the **MIT License**. See [LICENSE](LICENSE) for more details.

---

💬 **Join the Zesty Hub community** and start collaborating today! Let's code, chat, and create together! 🚀