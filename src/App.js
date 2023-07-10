import "./App.css";
import { Bookmark, Explore, Home, SignUp, Login, Profile } from "./pages";
import "./normalize.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="bookmark" element={<Bookmark />} />
          <Route path="profile/:userId" element={<Profile />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
