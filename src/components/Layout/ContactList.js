import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setContactDetails } from "../../redux/actions/contactDetailsActions"
import "./ContactList.css";
import axios from "axios";
import ContactCard from "./ContactCard";

const ContactList = () => {

  const allContacts = useSelector((state) => state);
  const dispatch = useDispatch();
  let addValues = allContacts.allContacts;
  // console.log(allContacts.allContacts);

  const removeContact = (id) => {
    axios
      .delete(`http://localhost:3000/users/${id}`)
      .catch((error) => {
        console.log(error);
      });
    const newContactList = addValues.filter((addValue) => {
      return addValue.id !== id;
    })
    dispatch(setContactDetails(newContactList));
  }


  return (
    <>
      {addValues.map((contact) => (
        <ContactCard key={contact.id} contact={contact} handleDelete={removeContact} />
      )
      )}
    </>
  )
};

export default ContactList;
