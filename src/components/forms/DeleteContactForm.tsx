import { useDeleteContactMutation } from "../../services/api"

interface Props {
    id: string
}

export const DeleteContactForm: React.FC<Props> = ({id}) => {
    const [deleteContact] = useDeleteContactMutation()

    const handleDelete = async (id: string) => {
        await deleteContact(id)
    }
    
    return (
        <form>
            <button onClick={(e) => {
                e.preventDefault()
                handleDelete(id)
            } }>Delete</button>
        </form>
    )
}