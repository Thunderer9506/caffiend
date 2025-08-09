# Caffiend ☕

Caffiend is a full-stack React application for coffee enthusiasts to track their coffee consumption, caffeine levels, and spending habits. It leverages Firebase for authentication and data storage.

## Features

- **Track Coffee Consumption:** Log every coffee or energy drink you consume, including type, cost, and time.
- **Caffeine Level Calculation:** See your current blood caffeine level, calculated using caffeine half-life.
- **Statistics Dashboard:** View daily averages, total cost, and your most consumed drinks.
- **History:** Visualize your coffee consumption history.
- **Authentication:** Sign up and log in securely with Firebase Auth.
- **Persistent Data:** Your data is stored in Firestore and synced across devices.

## Technologies Used

- React
- Firebase (Auth & Firestore)
- CSS (FantaCss design library)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd caffiend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Firebase:**
   - Create a `.env` file in the root directory.
   - Add your Firebase config:
     ```
     VITE_FIREBASE_APIKEY=your_api_key
     VITE_FIREBASE_AUTHDOMAIN=your_auth_domain
     VITE_FIREBASE_PROJECTID=your_project_id
     VITE_FIREBASE_STORAGEBUCKET=your_storage_bucket
     VITE_FIREBASE_MESSAGINGSENDERID=your_messaging_sender_id
     VITE_FIREBASE_APPID=your_app_id
     ```

4. **Run the app:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   - Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Project Structure

- `src/components/` - React components (CoffeeForm, Stats, History, etc.)
- `src/context/` - Auth context for user state management
- `src/utils/` - Utility functions and constants
- `firebase.js` - Firebase initialization

## GitHub

- [GitHub Repository](https://github.com/shaursrivastava/caffiend)

## Live Website

- [Caffiend Live](https://project-caffiend.netlify.app/)

## Credits

- Built by Shaurya Srivastava
- UI inspired by [FantaCss](https://github.com/shaursrivastava/FantaCss)

## License

MIT License
