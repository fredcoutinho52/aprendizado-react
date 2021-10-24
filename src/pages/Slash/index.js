import removebg from "../../images/removebg.png";
import person from "../../images/person.png";
import bg from "../../images/bg.jpeg";

function Slash() {
    return (
        <main>
            <img src={bg} alt="bg" className="wave" />

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
                                <li><a href="register" className="btn">Sign Up</a></li>
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
                            <div className="big-title">
                                <h1>Get things done</h1>
                                <h1>with Vestibunauta!</h1>
                            </div>
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Delectus eius distinctio odit, magni magnam qui ex perferendis
                                vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                            <div className="cta">
                                <a href="login" className="btn">Get started</a>
                            </div>
                        </div>

                        <div className="right">
                            <img src={person} alt="Person Image" className="person" />
                        </div>
                    </div>
                </div>

                <div className="bottom-area">
                    <div className="container">

                    </div>
                </div>
            </div>
        </main>
    );
}

export default Slash;