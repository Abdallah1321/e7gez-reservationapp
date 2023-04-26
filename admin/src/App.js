import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { restaurantInputs, tableInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { useAuthContext } from "./hooks/useAuthContext";
import { restaurantColumns, tableColumns, userColumns } from "./datatablesource";
import NewRestaurant from "./pages/newRestaurant/NewRestaurant";
import NewTable from "./pages/newTable/NewTable";


function App() {
  const { darkMode } = useContext(DarkModeContext);

    const ProtectedRoute = ({ children }) => {
      const { user } = useAuthContext();

      if (!user) {
        return <Navigate to="/login" />;
      }

      return children;
    };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route path="users">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={userColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title="Add New User" />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="restaurants">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={restaurantColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":restaurantId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewRestaurant />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="tables">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={tableColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":tableId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewTable title="Add New Table" />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
