function About(){
    return(
        <section id="about">
            <h2>About me</h2>
            <div className="portrait-section">
                <img src="./assets/images/portrait.png" alt="Kim looking at the camera, smiling"/>
                <div className="portrait-description">
                    <p>This is me</p>
                </div>
            </div>
            <div>
                <p>Lorem ipsum</p>
                <button>Read more</button>
            </div>
    </section>
    )
}

export default About;