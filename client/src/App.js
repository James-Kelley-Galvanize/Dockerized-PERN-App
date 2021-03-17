import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [pageContent, setPageContent] = useState(
    "No successful API call made... yet..."
  );
  useEffect(() => {
    fetch("http://localhost:3003/test_route")
      .then((res) => res.json())
      .then((json) => setPageContent(JSON.stringify(json)))
      .catch((err) => setPageContent(err));
  });
  return (
    <div className="App">
      <h1>{pageContent}</h1>
    </div>
  );
}

export default App;
