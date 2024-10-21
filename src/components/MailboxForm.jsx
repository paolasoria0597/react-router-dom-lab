import {useState} from "react";
import {useNavigate} from "react-router-dom";

const MailboxForm = ({addBox}) => {
    const initialFormState = {
        boxholder: "",
        boxSize: "small"
    }
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialFormState)

    const handleFormChange = ({target}) => {
        setFormData({...formData, [target.name]: target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // add new box
        addBox(formData)
        // we want to refresh form
        setFormData(initialFormState)
        navigate("/mailboxes")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxholder">Enter a Boxholder:</label>
                <input name="boxholder" type="text" value={formData.boxholder} onChange={handleFormChange}/>
                <label htmlFor="boxSize">Select a Box Size:</label>
                <select name="boxSize" id="size" required value={formData.boxSize} onChange={handleFormChange}>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default MailboxForm