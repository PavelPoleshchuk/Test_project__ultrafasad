import "./App.css";
import { Navigate, Route, RouteProps, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import Header from "./components/Header/Header";
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
              <Header />
              <MainPage />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/blank"
          element={
            <>
              <Header />
              <Blank />
            </>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
