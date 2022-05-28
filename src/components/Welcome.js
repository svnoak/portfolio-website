import Navigation from "./Navigation";
import "../assets/css/Welcome.css";
function Welcome() {
    return(
        <section id="welcome">
            <h1>Welcome</h1>
            <div className="welcome-navigation">
                <Navigation />
            </div>
            <div className="portrait-section">
                <img src={require("../assets/images/portrait.jpeg")} alt="Kim looking at the camera, smiling"/>
                <div className="portrait-description">
                    <p>Hi, I'm Kim.</p>
                    <p>Pleased to meet you.</p>
                </div>
            </div>
        </section>
    )
}

export default Welcome;