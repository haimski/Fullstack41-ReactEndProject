import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const EditCustomer = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.isAuthenticated) {
      navigate('/login');
    }
  }, []);

  return (
    <div>EditCustomer</div>
  )
}

export default EditCustomer