import { useState } from "react"
import { Contact } from "../../models/Contact.model";
import { useAddContactMutation } from "../../services/api";

 interface Props {
    data?: Contact[]
 }
 
 export const AddContactForm: React.FC<Props> = ({data}) => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [addContact] = useAddContactMutation();

    const handleAdd = async () => {
        await addContact({
        id: `${parseInt(data?.[data?.length -1].id as string) + 1}`,
        name,
        email
        })
        setName("")
        setEmail("")
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
            handleAdd()
          }}>Add Contact</button>
        </form>
    )
}