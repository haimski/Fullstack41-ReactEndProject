import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Home = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.isAuthenticated) {
      navigate('/login');
    }
  }, []);

  return (
    <div className="container home">Home</div>
  )
}

export default Home