import React, { useState, useEffect } from "react";
import SubHeader from "../UI/SubHeader";
import { useDispatch, useSelector } from "react-redux";
import { setContactDetails } from "../../redux/actions/contactDetailsActions"
import { useNavigate } from "react-router-dom";
// import ContactList from "./ContactList";
import "./Home.css";
import axios from "axios";

const Home = (props) => {
  const Navigate = useNavigate();

  const allContacts = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(allContacts);

  // const [addValues, setAddValues] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/users')
      .then((responses) => dispatch(setContactDetails(responses.data)))
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
      {/* <ContactList/> */}
    </>
  );
};

export default Home;
