// src/App.js
import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { db } from "./firebaseConfig";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const dbRef = ref(db, "https://quizmaster-1608-default-rtdb.europe-west1.firebasedatabase.app/"); // Replace 'yourDataPath' with your Realtime Database path
      onValue(dbRef, (snapshot) => {
        if (snapshot.exists()) {
          const dataObject = snapshot.val();
          const formattedData = Object.keys(dataObject).map((key) => ({
            id: key,
            ...dataObject[key],
          }));
          setData(formattedData);
        } else {
          console.log("No data available");
        }
      });
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Realtime Database Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;