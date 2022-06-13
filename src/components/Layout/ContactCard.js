import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function ContactCard(props) {
  const { contact, handleDelete, handleUpdate } = props;
  const { id, name, emailid } = contact;
  return (
    <div className="contact_list">
      <div className="contact_list_text">
        <h4>{name}</h4>
        <p>{emailid}</p>
      </div>
      <div className="contact_list_icons">
        <div onClick={() => handleUpdate(id)}>
          <FaEdit />
        </div>
        <div className="delete_content" onClick={() => handleDelete(id)}>
          <MdDelete />
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
