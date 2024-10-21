import {useParams} from "react-router-dom";

const MailboxDetails = ({mailboxes}) => {
    const { mailboxId } = useParams()
    console.log(mailboxes)
    console.log(mailboxId)
    console.log(Number(mailboxId))
    const selectedBox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId))
    console.log(selectedBox)
    return selectedBox? (
        <div>
            <h1>Details</h1>
            <div>
                Boxholder: {selectedBox.boxholder}
            </div>
            <div>
                Box Size: {selectedBox.boxSize}
            </div>
        </div>
    ) :
        (
            <div>
                <h1>Mailbox Not Found</h1>
            </div>
        )
}

export default MailboxDetails;