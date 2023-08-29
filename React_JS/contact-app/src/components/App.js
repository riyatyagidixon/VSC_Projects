import React from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contacts = [
    {
      id: "1",
      name: "Riya",
      email: "riya@gmail.com"
    },
    {
      id: "2",
      name: "Tyagi",
      email: "tyagi@gmail.com"
    }

  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList mycontacts={contacts} />
    </div>
  );
}

export default App;


