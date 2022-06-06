import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubHeader from "../UI/SubHeader";
import FormInput from "../UI/FormInput";
import Button from "../UI/Button";
import "./AddContact.css";
import axios from "axios";

const AddContact = () => {
  
  const Navigate = useNavigate();

  const initialValues = {
    name: "",
    emailid: "",
  };

  const [formValues, setFormValues] = useState(initialValues);

  const onCancelAddContact = (event) => {
    event.preventDefault();
    Navigate("/");
  };

  const onAddContact = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/users", formValues)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
      });
    Navigate("/");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //   console.log(formValues);

  return (
    <>
      <SubHeader
        customClass="subheader_section danger_btn"
        subHeading="Add Contact"
        btnHandler={onCancelAddContact}
        btnName={"Cancel"}
      />
      <div className="form_card">
        <form>
          <FormInput
            customClass={"form_input"}
            inputLabel="Name:-"
            inputType="text"
            inputName="name"
            inputValue={formValues.name}
            onHandleChange={handleChange}
          />
          <FormInput
            customClass={"form_input"}
            inputLabel="Email ID:-"
            inputType="email"
            inputName="emailid"
            inputValue={formValues.emailid}
            onHandleChange={handleChange}
          />
          <Button btnName="Add" btnHandler={onAddContact} />
        </form>
      </div>
    </>
  );
};

export default AddContact;
