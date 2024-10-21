// src/App.jsx

import NavBar from "./components/NavBar.jsx";
import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import MailboxForm from "./components/MailboxForm.jsx";
import MailboxList from "./components/MailboxList.jsx";
import MailboxDetails from "./components/MailboxDetails.jsx";

const App = () => {


    const [mailboxes, setMailboxes] = useState([])

    const addBox = (formData) => {
        console.log("Adding New Box")
        const newBox = {
            _id: mailboxes.length + 1,
            boxSize: formData.boxSize,
            boxholder: formData.boxholder,
        }
        const updatedMailboxes = [...mailboxes, newBox]
        setMailboxes(updatedMailboxes)
    }

    return (
        <>
            <NavBar/>
            <Routes>
                <Route path="/" element={<main><h1>Post Office</h1></main>}/>
                <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>}/>
                <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}/>}/>
                <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes}/>}/>
            </Routes>
        </>
    )
};

export default App;

