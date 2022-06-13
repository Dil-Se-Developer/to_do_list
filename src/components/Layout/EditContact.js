import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SubHeader from "../UI/SubHeader";
import FormInput from "../UI/FormInput";
import Button from "../UI/Button";
import axios from "axios";

const EditContact = () => {
  const Navigate = useNavigate();
  const param = useParams();
  let { id } = param;
  //   console.log(id);


  const [existingValues, setExistingValues] = useState({});

  // const initialValues = {
  //   name: existingValues.name,
  //   emailid: existingValues.emailid,
  // };

  const onCancelAddContact = (event) => {
    event.preventDefault();
    Navigate("/");
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => setExistingValues(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onUpdateContact = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:3000/users/${id}`, existingValues)
    .catch((error) => {
      console.log(error);
    });
    Navigate("/");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setExistingValues((prevExistingValues) => {
      return { ...prevExistingValues, [name]: value }
    });
  };

  console.log(existingValues);

  return (
    <>
      <SubHeader
        customClass="subheader_section danger_btn"
        subHeading="Edit Contact"
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
            inputValue={existingValues.name}
            onHandleChange={handleChange}
          />
          <FormInput
            customClass={"form_input"}
            inputLabel="Email ID:-"
            inputType="email"
            inputName="emailid"
            inputValue={existingValues.emailid}
            onHandleChange={handleChange}
          />
          <Button btnName="Update" btnHandler={onUpdateContact} />
        </form>
      </div>
    </>
  );
};

export default EditContact;
