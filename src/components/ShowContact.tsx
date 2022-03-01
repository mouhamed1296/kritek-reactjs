import { Contact } from "../models/Contact.model"
import { ContactDetail } from "./ContactDetail"
import { DeleteContactForm, EditContactForm } from "./forms"

interface Props {
    contact: Contact
}

export const ShowContact: React.FC<Props> = ({contact}) => {
    return (
        <div>
            <span><strong>Name:</strong> {contact.name}</span>
            <ContactDetail id={contact.id} />
            <EditContactForm contact={contact} />
            <br/>
            <DeleteContactForm id={contact.id} />
            <br /><br />   
        </div>
    )
}
