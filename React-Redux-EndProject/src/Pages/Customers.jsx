import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Customers = (props) => {
  const navigate = useNavigate();

    useEffect(() => {
        if (!props.isAuthenticated) {
            navigate('/login');
        }
    });

  return (
          <div className="container customers">
              Customers <br />
              <Link to="editCustomer">Edit Customer</Link>
          </div>
      )
  }

export default Customers