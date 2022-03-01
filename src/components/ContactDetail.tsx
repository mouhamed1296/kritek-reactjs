import { Contact } from "../models/Contact.model"
import { useContactQuery } from "../services/api"

interface Props {
    id: string
}
export const ContactDetail: React.FC<Props> = ({id}) => {
    const { data } = useContactQuery(id)
    return (
        <pre>{ JSON.stringify(data, undefined, 2) }</pre>
    )
}