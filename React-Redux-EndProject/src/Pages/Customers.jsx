import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useSelector} from "react-redux";

const Customers = (props) => {
    const {customers} = useSelector((state) => state.customers);
    const navigate = useNavigate();

    useEffect(() => {
        if (!props.isAuthenticated) {
            navigate('/login');
        }
    });

  return (
          <div className="container customers">
              Customers <br />
              {
                  customers.map((customer, index) => {
                     return (<div key={index}>
                         {customer.firstName}&nbsp;
                         {customer.lastName}, &nbsp;
                         {customer.city}
                     </div>);
                  })
              }
              <Link to="editCustomer">Edit Customer</Link>
          </div>
      )
  }

export default Customers