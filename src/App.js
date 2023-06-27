import "./App.css";
import { Bookmark, Explore, Home } from "./pages";
import "./normalize.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="bookmark" element={<Bookmark />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
