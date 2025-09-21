import "./styles.css";
import { useState } from "react";
import json from "./data.json";
import { File } from "./components/file";

export default function App() {
  const [data, setData] = useState(json);

  return (
    <div className="App">
      <h1>File explorer</h1>
      <File list={data} />
    </div>
  );
}
