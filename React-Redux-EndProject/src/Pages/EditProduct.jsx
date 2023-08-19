import {useEffect} from 'react'
import {useNavigate} from "react-router-dom";

const EditProduct = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.isAuthenticated) {
      navigate('/login');
    }
  }, []);

  return (
    <div>EditProduct</div>
  )
}

export default EditProduct