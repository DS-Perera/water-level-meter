const express = require("express");
const { initializeApp } = require("firebase/app");
const { getDatabase, ref, set, get, child } = require("firebase/database");
const cors = require("cors");

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD1aTtGBQIwHVNffrtgbokuOngQAYvH8Bo",
  authDomain: "water-tank-6ccdc.firebaseapp.com",
  databaseURL: "https://water-tank-6ccdc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "water-tank-6ccdc",
  storageBucket: "water-tank-6ccdc.appspot.com",
  messagingSenderId: "1045481663635",
  appId: "1:1045481663635:web:1cb0ed10ce67b8bd3ff166",
  measurementId: "G-9XEMVD9MKE"
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Enable JSON parsing for request bodies


// API to view data from Firebase
app.get("/viewData", async (req, res) => {
  try {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, `/`));

    if (snapshot.exists()) {
      res.json(snapshot.val());
    } else {
      res.status(404).json({ error: "No data available" });
    }
  } catch (error) {
    console.error("Error reading data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
