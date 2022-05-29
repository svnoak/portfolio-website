import contactList from "./data/contact.json";
function Contact(props){
    return(
        <section id="contact" ref={props.refs}>
            <h1>Contact</h1>
            <ul>
                {contactList.map( contact => {
                    return(
                        <li key={contact.name}>
                            <img src={"assets/images/"+contact.icon} alt="Icon"/>
                            <a href={contact.link}>{contact.name}</a>
                        </li>
                    )
                } )}
            </ul>
        </section>
    )
}

export default Contact;