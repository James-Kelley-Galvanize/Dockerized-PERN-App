import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [pageContent, setPageContent] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/cats")
      .then((res) => res.json())
      .then((json) => setPageContent(json))
      .catch((err) => setPageContent(err));
  }, []);
  return (
    <div className="App">
      <h1>
        {pageContent.map((item, index) => (
          <div key={index}>{JSON.stringify(item)}</div>
        ))}
      </h1>
    </div>
  );
}
export default App;
