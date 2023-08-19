import {Link} from "react-router-dom";

function Products() {
  return (
    <div className="container">
      Products <br />
      <Link to={'editProduct'}>Edit Product</Link>
    </div>
  )
}

export default Products