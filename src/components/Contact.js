import contactList from "./data/contact.json";
function Contact(){
    return(
        <section id="contact">
            <h1>Contact</h1>
            <ul>
                {contactList.map( contact => {
                    return(
                        <li key={contact.name}>
                            <img src={contact.icon} alt="Icon"/>
                            <a href={contact.link}>{contact.name}</a>
                        </li>
                    )
                } )}
            </ul>
        </section>
    )
}

export default Contact;