import "../assets/css/About.css";

function About(props){
    return(
        <section id="about" ref={props.refs}>
            <h1>About me</h1>
            <div className="portrait-section">
                <img src={require("../assets/images/portrait.jpeg")} alt="Kim looking at the camera, smiling"/>
                <div className="portrait-description">
                    <p>This is me</p>
                </div>
            </div>
            <div className="description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                <button>Read more</button>
            </div>
    </section>
    )
}

export default About;