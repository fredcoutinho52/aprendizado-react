import bg from "../../images/bg.jpeg";

import "./style.css";

function Login() {
    return (
        <main>

            <img className="wave" src={bg} />

            <div className="big-wrapper light">
                <img src="./img/shape.png" alt="" className="shape" />

                <header>
                    <div className="container">
                        <div className="logo">
                            <img src="img/logo-removebg-preview.png" alt="Logo" />
                            <h3>Vestibunauta</h3>
                        </div>

                        <div className="links">
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Register</a></li>
                                <li><a href="#" className="btn">SignUp</a></li>
                            </ul>
                        </div>

                        <div className="overlay"></div>

                        <div className="hamburger-menu">
                            <div className="bar"></div>
                        </div>
                    </div>
                </header>

                <div className="showcase-area">
                    <div className="container">
                        <div className="left">
                            <div className="astro">
                                <img src="img/undraw_Astronaut_re_8c33 (1).svg" />
                            </div>
                        </div>

                        <div className="login-content">
                            <form action="index.html">

                                <img src="img/undraw_profile_pic_ic5t.svg" />
                                <h2 className="title">Welcome Back!</h2>

                                <div className="input-div one">
                                    <div className="i">
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <div className="div">
                                        <h5>E-mail</h5>
                                        <input type="email" className="email" />
                                    </div>
                                </div>

                                <div className="input-div pass">
                                    <div className="i">
                                        <i className="fas fa-lock"></i>
                                    </div>
                                    <div className="div">
                                        <h5>Password</h5>
                                        <input type="password" className="input" />
                                    </div>
                                </div>
                                <a href="#">Forgot Password?</a>
                                <input type="submit" className="log" value="Login" />

                            </form>
                        </div>
                    </div>
                </div>

                <div className="bottom-area">
                    <div className="container">
                        <button className="toggle-btn">
                            <i className="far fa-moon"></i>
                            <i className="far fa-sun"></i>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login;