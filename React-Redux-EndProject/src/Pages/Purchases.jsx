import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Purchases = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.isAuthenticated) {
      navigate('/login');
    }
  });

  return (
    <div className="container">Purchases</div>
  )
}

export default Purchases