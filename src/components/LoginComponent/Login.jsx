import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postLogin } from '../Redux/ActionNames/ActionCreator';

const Login = (props) => {

    const [state, setState] = React.useState({
        username: "",
        password: "",
    });

    const { username, password } = state;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [error, setError] = React.useState("");

    const [message, setMessage] = React.useState("");


    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
            setError("Please Fill all the Input Field")
        } else {
            dispatch(postLogin(state, navigate));
            setMessage("Login SuccessFul")
        }
    }

    return (
        <>
            <main className='container'>
                <div className='' id='account-login'>
                    <div className='form-container' style={{ width: "400px" }}>
                        {error && <h3 style={{ color: "red" }}>{error}</h3>}
                        {message && <h3 style={{ color: "green" }}>{message}</h3>}
                        <form onSubmit={handleSubmit}>
                            <div className='login-header'>
                                <h1>Login to your account</h1>
                                <p className="small-login">Enter your username and password to login to your account</p>
                            </div>
                            <div className="form-group pt-2">
                                <input type="username" className="form-control" id="username"
                                    aria-describedby="username Help"
                                    placeholder='Username'
                                    name='username'
                                    value={username || ""}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="password"
                                    placeholder='Password'
                                    name='password'
                                    value={password || ""}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className='loginfrm-btn-section'>
                                <button type="submit" className="btn-login btn btn-primary">Login</button>
                                <Link to="#" className=' small forget-section'>Forget your password</Link>
                            </div>
                        </form>
                        <div className='or-section'>
                            <p className="or">OR</p>
                        </div>
                        <div className='row'>
                            <div className='google-login'>
                                <Link className="btn btn-outline-light" to="#" role="button" >
                                    <img width="20px" style={{ marginBottom: "3px", marginRight: "5px" }} alt="Google sign-in"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                                    Login with Google
                                </Link>
                            </div>
                            <div className='fb-login'>
                                <Link className="btn btn-outline" to="#" role="button" >
                                    <img width="20px" style={{ marginBottom: "3px", marginRight: "5px" }} alt="Facebook sign-in"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                                    Login with Facebook
                                </Link>
                            </div>
                        </div>
                        <div className='create_account justify-content-center d-flex'>
                            <p>Don't have account?</p> &nbsp;
                            <Link to={"/signup/"}>Create a new account</Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Login;