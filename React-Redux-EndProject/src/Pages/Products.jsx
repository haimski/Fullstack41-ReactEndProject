import {Link, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useSelector} from "react-redux";

const Products = (props) => {
    const {products} = useSelector((state) => state.products);
    const navigate = useNavigate();

    useEffect(() => {
        if (!props.isAuthenticated) {
            navigate('/login');
        }
    });

    return (
    <div className="container products">
      Products <br />
        {
            products.map((product, index) => {
                return (
                    <div key={index}>{product.name},&nbsp;
                        {product.price}$,&nbsp;
                        {product.quantity}
                    </div>
                );
            })
        }
      <Link to={'editProduct'}>Edit Product</Link>
    </div>
  )
}

export default Products