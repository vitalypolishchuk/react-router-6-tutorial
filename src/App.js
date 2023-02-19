import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SingleProduct from "./pages/SingleProduct";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <div>Navbar</div>
      <Routes>
        <Route path="/homepage" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<SingleProduct />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <div>Footer</div>
    </BrowserRouter>
  );
}

export default App;
