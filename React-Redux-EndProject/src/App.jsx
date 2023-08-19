import {useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.scss'
import './Components/NavigationBar'
import NavigationBar from './Components/NavigationBar';
import Home from "./Pages/Home.jsx";
import Customers from "./Pages/Customers.jsx";
import Products from "./Pages/Products.jsx";
import Purchases from "./Pages/Purchases.jsx";
import EditProduct from "./Pages/EditProduct.jsx";
import EditCustomer from "./Pages/EditCustomer.jsx";
import Login from "./Pages/Login.jsx";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
      <Router>
          <div className="container">
              <NavigationBar />
          </div>
          <Routes>
              <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
              <Route path="/customers" element={<Customers isAuthenticated={isAuthenticated} />}>
                  <Route path={'editCustomer'} element={<EditCustomer isAuthenticated={isAuthenticated} />} />
              </Route>
              <Route path={'/products'} element={<Products isAuthenticated={isAuthenticated} />}>
                  <Route path={'editProduct'} element={<EditProduct isAuthenticated={isAuthenticated} />} />
              </Route>
              <Route path={'/purchases'} element={<Purchases isAuthenticated={isAuthenticated} />} />
              <Route path={'/login'} element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          </Routes>
      </Router>
  )
}

export default App
