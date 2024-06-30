const express = require("express");
const { initializeApp } = require("firebase/app");
const { getDatabase, ref, set } = require("firebase/database");
const cors = require("cors");

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCwAMrMTk96PffuW7a4yEKifshfGoCQBZ4",
  authDomain: "sms-server-adef0.firebaseapp.com",
  databaseURL: "https://sms-server-adef0-default-rtdb.firebaseio.com",
  projectId: "sms-server-adef0",
  storageBucket: "sms-server-adef0.appspot.com",
  messagingSenderId: "155027503725",
  appId: "1:155027503725:web:0c46d7f10aef2e2fdfdd64",
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Enable JSON parsing for request bodies

// API to write data to Firebase
app.post("/write-data", async (req, res) => {
  try {
    const { designation, message } = req.body;

    if (!designation || !message) {
      return res
        .status(400)
        .json({ error: "Designation and message are required" });
    }

    // Define the data to be written
    const data = {
      designation,
      message,
    };

    // Reference to the specific path in the database
    const dataRef = ref(database, "messages");

    // Write the data to Firebase
    await set(dataRef, data);

    // Send the response
    res.json({ message: "Data written successfully" });
  } catch (error) {
    console.error("Error writing data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



// Start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
