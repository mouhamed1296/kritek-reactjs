import { useState } from "react"
import { Contact } from "../../models/Contact.model"
import { useUpdateContactMutation } from "../../services/api"

interface Props {
    contact: Contact
}

export const EditContactForm: React.FC<Props> = ({contact}) => {
    const [updateContact] = useUpdateContactMutation()
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    
    const handleUpdate = async (contact: Contact) => {
        await updateContact(contact)
        setName('')
        setEmail('')
      }
    return (
        <form>
            <input 
                type="text" 
                name="name" 
                id="name"
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)} 
            />
            <input 
                type="email" 
                name="email" 
                id="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
            />
            <button onClick={(e) => {
                e.preventDefault()
                handleUpdate({id: contact.id, name, email})
            }}>Edit</button>
        </form>
    )
}