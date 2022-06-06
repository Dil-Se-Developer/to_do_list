import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setContactDetails } from "../../redux/actions/contactDetailsActions"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./ContactList.css";
import axios from "axios";

const ContactList = () => {

  const allContacts = useSelector((state) => state);
  const dispatch = useDispatch();
  let addValues = allContacts.allContacts;
  // console.log(allContacts.allContacts);


  const renderList = addValues.map((addValue) => {
    const { id, name, emailid } = addValue;
    const removeContact = () => {
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
      <div className="contact_list" key={id}>
        <div className="contact_list_text">
          <h4>{name}</h4>
          <p>{emailid}</p>
        </div>
        <div className="contact_list_icons">
          <div>
            <FaEdit />
          </div>
          <div className="delete_content" onClick={removeContact}>
            <MdDelete />
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      {renderList}
    </>
  )
};

export default ContactList;
