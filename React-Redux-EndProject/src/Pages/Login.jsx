import {useNavigate} from "react-router-dom";

const Login = ({setIsAuthenticated}) => {
    const winHeight = window.innerHeight;
    const winWidth = window.innerWidth;
    const formWidth = 400;
    const style = {
        margin: '0 auto',
        width: formWidth + 'px',
        position: 'absolute',
        top: winHeight / 2 - (formWidth / 2),
        left: winWidth / 2 - (formWidth / 2),
        borderBottom: '1px solid #cdcdcd'
    }
    const navigate = useNavigate();

    const handleLogin = () => {
        setIsAuthenticated(true);
        navigate("/");
    }

  return (
    <div className="container login">
        <div className="mx-auto" style={style}>
            <h4>Login</h4>
            <h6>please login to use application</h6>
            <div className="mb-3 row">
                <label htmlFor="username" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input className="form-control" name="username" type="text" placeholder="User Name" />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" name="inputPassword" placeholder="Enter Password" />
                </div>
            </div>
            <div className="col-auto">
                <button onClick={() => handleLogin()} className="btn btn-primary mb-3">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login