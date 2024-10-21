import {Link} from "react-router-dom";

const MailboxList = ({mailboxes}) => {
    return (
        <div>
            <h1>Mailbox List</h1>
            {mailboxes.map(mailbox => (
                <div key={mailbox._id}>
                <Link to={`/mailboxes/${mailbox._id}`}>
                    Mailbox {mailbox._id}
                </Link>
                </div>
            ))}
        </div>
    )
}

export default MailboxList