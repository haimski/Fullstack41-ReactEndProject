import {useEffect} from "react";
import {useNavigate, Link} from "react-router-dom";
import customersImg from './../assets/customers.jpg';
import productsImg from './../assets/products.jpg';
import purchasesImg from './../assets/sales.jpg';

const Home = (props) => {
  const style = {
    margin: '3em auto'
  }

  useEffect(() => {
    if (!props.isAuthenticated) {
      navigate('/login');
    }
  });

  return (
    <div className="container home">
      <div className="row" style={style}>
        <div className="col">
          <div className="card">
            <img src={customersImg} className="card-img-top" alt="Customers" />
              <div className="card-body">
                <h5 className="card-title">Customers</h5>
                <p className="card-text">Manage your customers</p>
                <Link to={'/customers'} className="btn btn-primary">Go To Customers</Link>
              </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={productsImg} className="card-img-top" alt="Products" />
            <div className="card-body">
              <h5 className="card-title">Products</h5>
              <p className="card-text">Manage your products</p>
              <Link to={'/products'} className={'btn btn-primary'}>Go To Products</Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={purchasesImg} className="card-img-top" alt="Sales" />
            <div className="card-body">
              <h5 className="card-title">Purchases</h5>
              <p className="card-text">Manage your sales</p>
              <Link to={'/purchases'} className={'btn btn-primary'}>Go To Purchases</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home