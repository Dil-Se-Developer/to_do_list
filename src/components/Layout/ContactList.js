import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { setContactDetails } from "../../redux/actions/contactDetailsActions"
import { setContactDetails } from "../../redux_toolkit/slices/contactDetailsSlice";
import { useNavigate } from 'react-router-dom'
import "./ContactList.css";
import axios from "axios";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const allContacts = useSelector((state) => state.allContacts.items);
  // console.log(allContacts);
  const dispatch = useDispatch();
  // let addValues = allContacts;
  // console.log(addValues);
  const Navigate = useNavigate()

  const removeContact = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`).catch((error) => {
      console.log(error);
    });
    const newContactList = allContacts.filter((addValue) => {
      return addValue.id !== id;
    });
    dispatch(setContactDetails(newContactList));
  };

  const editContant = (id) => {
    Navigate(`/editcontact/${id}`)
  }

  return (
    <>
      {allContacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          handleUpdate={editContant}
          handleDelete={removeContact}
        />
      ))}
    </>
  );
};

export default ContactList;
