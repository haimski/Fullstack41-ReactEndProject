import {Link, useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Products = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!props.isAuthenticated) {
            navigate('/login');
        }
    }, []);

    return (
    <div className="container products">
      Products <br />
      <Link to={'editProduct'}>Edit Product</Link>
    </div>
  )
}

export default Products