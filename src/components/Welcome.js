import Navigation from "./Navigation";
import "../assets/css/Welcome.css";
function Welcome(props) {
    return(
        <section id="welcome" ref={props.refs}>
            <h1>Welcome</h1>
                <Navigation views={props.views}/>
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