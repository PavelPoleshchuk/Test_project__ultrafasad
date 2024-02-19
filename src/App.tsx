import "./App.css";
import { Navigate, Route, RouteProps, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Blank from "./pages/Blank/Blank";
import { isLoggedIn } from "./components/tools/useToken";

const PrivateRoute = ({ children }: RouteProps): JSX.Element => {
  return <>{isLoggedIn() ? children : <Navigate to="/login" />}</>;
};

function App() {
  return (
    <div className="mainWrapper">
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Blank title={"Profile"} />} />
        <Route path="/orders" element={<Blank title={"My orders"} />} />
        <Route path="/specifications" element={<Blank title={"Specifications"} />} />
        <Route path="/chat" element={<Blank title={"Chat"} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
