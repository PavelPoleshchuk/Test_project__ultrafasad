import "./App.css";
import { Navigate, Route, RouteProps, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";

export function PrivateRoute({ children }: RouteProps): JSX.Element {
  const isLoggedIn = true; // check cookie or local storage etc.
  return <>{isLoggedIn ? children : <Navigate to="/login" />}</>;
}

function App() {
  return (
    <div className="mainWrapper">
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Header />
              <MainPage/>
            </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <Header />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;

// <Routes>
//   <Route path="/login" element={<AboutUs />} />
//   <Route path="/" element={<Layout />}>
//     <Route index element={<HomePage />} />
//     <Route path="about" element={<AboutUs />} />
//     <Route path="forms" element={<FormPage />} />
//     <Route path="*" element={<NotFoundPage />} />
//   </Route>
// </Routes>
