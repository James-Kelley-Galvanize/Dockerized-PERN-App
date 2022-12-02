import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [pageContent, setPageContent] = useState(
    []
  );
  useEffect(() => {
    fetch("http://localhost:3003/test_route")
      .then((res) => res.json())
      .then((json) => setPageContent(json))
      .catch((err) => setPageContent(err));
  },[]);
  return (
    <div className="App">
      <h1>{pageContent.map(item=><div>{JSON.stringify(item)}</div>)}</h1>
    </div>
  );
}

export default App;
