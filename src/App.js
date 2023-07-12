import "./App.css";
import {
  Bookmark,
  Explore,
  Home,
  SignUp,
  Login,
  Profile,
  Search,
} from "./pages";
import "./normalize.css";
import { Route, Routes } from "react-router-dom";
import { AuthLayout, AppLayout } from "./layout";
import PrivateRoutes from "./routes/PrivateRoutes";
import { ToastWrapper } from "./components";

function App() {
  return (
    <div className="App">
      <ToastWrapper />
      <>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="explore" element={<Explore />} />
              <Route path="bookmark" element={<Bookmark />} />
              <Route path="search" element={<Search />} />
              <Route path="profile/:userId" element={<Profile />} />
            </Route>
          </Route>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
