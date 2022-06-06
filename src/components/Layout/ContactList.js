import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./ContactList.css";

const ContactList = (props) => {
  let {addValues} = props;
  // console.log(addValues);
  const renderList = addValues.map((addValue) => {
    const { id, name, emailid } = addValue;
    return (
      <div className="contact_list" key={id}>
        <div className="contact_list_text">
          <h4>{name}</h4>
          <p>{emailid}</p>
        </div>
        <div className="contact_list_icons">
          <FaEdit />
          <MdDelete />
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
