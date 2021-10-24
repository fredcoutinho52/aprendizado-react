import bg from "../../images/bg.jpeg";
import removebg from "../../images/removebg.png";
import lost from "../../images/lost.svg";
import undraw from "../../images/undraw.svg";

function Register() {
    return (
        <main>
            <img className="wave" src={bg} />

            <div className="big-wrapper light">
                <header>
                    <div className="container">
                        <div className="logo">
                            <img src={removebg} alt="Logo" />
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
                                <img src={lost} />
                            </div>
                        </div>

                        <div className="login-content">
                            <form action="index.html">
                                <img src={undraw} />

                                <h2 className="title">WELCOME!</h2>

                                <div className="input-div one">
                                    <div className="i">
                                        <i className="fas fa-user"></i>
                                    </div>

                                    <div className="div">
                                        <h5>Username</h5>
                                        <input type="text" className="input" />
                                    </div>
                                </div>

                                <div className="input-div one">
                                    <div className="i">
                                        <i className="fas fa-user"></i>
                                    </div>

                                    <div className="div">
                                        <h5>E-mail</h5>
                                        <input type="text" className="input" />
                                    </div>
                                </div>

                                <div className="input-div one">
                                    <div className="i">
                                        <i className="fas fa-user"></i>
                                    </div>

                                    <div className="div">
                                        <h5>Password</h5>
                                        <input type="text" className="input" />
                                    </div>
                                </div>

                                <div className="input-div pass">
                                    <div className="i">
                                        <i className="fas fa-lock"></i>
                                    </div>

                                    <div className="div">
                                        <h5>Confirm password</h5>
                                        <input type="password" className="input" />
                                    </div>
                                </div>
                                <input type="submit" className="log" value="Register" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Register;