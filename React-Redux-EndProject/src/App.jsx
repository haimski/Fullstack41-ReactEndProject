import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'
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

  return (
      <Router>
          <div className="container">
              <NavigationBar />
          </div>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/customers" element={<Customers />}>
                  <Route path={'editCustomer'} element={<EditCustomer />} />
              </Route>
              <Route path={'/products'} element={<Products />}>
                  <Route path={'editProduct'} element={<EditProduct />} />
              </Route>
              <Route path={'/purchases'} element={<Purchases />} />
              <Route path={'/login'} element={<Login />} />
          </Routes>
      </Router>
  )
}

export default App
