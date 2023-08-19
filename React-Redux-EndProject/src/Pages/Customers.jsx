import {Link} from "react-router-dom";

function Customers() {
  return (
    <div className="container">
        Customers <br />
        <Link to="editCustomer">Edit Customer</Link>
    </div>
  )
}

export default Customers