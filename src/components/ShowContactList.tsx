import { Contact } from "../models/Contact.model";
import { ShowContact } from "./ShowContact";

interface Props {
    contacts: Contact[]
}

export const ShowContactList: React.FC<Props> = ({contacts}) => {
    return (
        <div>
            {contacts?.map(contact => 
                <ShowContact 
                    contact={contact} 
                    key={contact.id}
                />
            )}
        </div>
    )
}