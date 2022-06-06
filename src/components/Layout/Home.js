import React, { useState, useEffect } from "react";
import SubHeader from "../UI/SubHeader";
import { useNavigate } from "react-router-dom";
import ContactList from "./ContactList";
import "./Home.css";
import axios from "axios";

const Home = (props) => {
  const Navigate = useNavigate();

  const [addValues, setAddValues] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/users')
      .then((responses) => setAddValues(responses.data))
      .catch((error) => {
        console.log(error)
      })
  },[])

  const onAdd = (event) => {
    event.preventDefault();
    Navigate("/addcontact");
  };

  return (
    <>
      <SubHeader
        customClass="subheader_section"
        subHeading="Contacts List"
        btnHandler={onAdd}
        btnName={"Add Contact"}
      />
      <ContactList addValues={addValues}/>
    </>
  );
};

export default Home;
