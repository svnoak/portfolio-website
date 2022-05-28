import Navigation from "./Navigation";

function Welcome() {
    return(
        <section id="welcome">
            <div>
                <Navigation />
            </div>
            <div className="introduction">
                <img src="./assets/images/portrait.png" alt="Kim looking at the camera, smiling"/>
                <div className="portrait-description">
                    <p>Hi, I'm Kim.</p>
                    <p>Pleased to meet you.</p>
                </div>
            </div>
        </section>
    )
}

export default Welcome;