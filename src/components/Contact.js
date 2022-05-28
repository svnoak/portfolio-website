import contactList from "./data/contact.json";
function Contact(){
    return(
        <section id="contact">
            <ul>
                {contactList.map( contact => {
                    return(
                        <li>
                            <img src={contact.icon}/>
                            <a href={contact.link}>{contact.name}</a>
                        </li>
                    )
                } )}
            </ul>
        </section>
    )
}

export default Contact;