import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Pages from "./Design/Pages";
import Loading from "./Design/Pages/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 2 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return <div>{loading ? <Loading /> : <Pages />}</div>;
}

export default App;
