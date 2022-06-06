import React, { useEffect } from "react";
import SubHeader from "../UI/SubHeader";
import { useDispatch } from "react-redux";
import { setContactDetails } from "../../redux/actions/contactDetailsActions"
import { useNavigate } from "react-router-dom";
import ContactList from "./ContactList";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const Navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('http://localhost:3000/users')
      .then((responses) => dispatch(setContactDetails(responses.data)))
      .catch((error) => {
        console.log(error)
      })
  }, [])

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
      {<ContactList />}
    </>
  );
};

export default Home;
