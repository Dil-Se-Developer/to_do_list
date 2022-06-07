import React, { useEffect } from "react";
import SubHeader from "../UI/SubHeader";
import { useSelector, useDispatch } from "react-redux";
import { setContactDetails } from "../../redux/actions/contactDetailsActions";
import { useNavigate } from "react-router-dom";
import ContactList from "./ContactList";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const Navigate = useNavigate();
  // const allContacts = useSelector((state) => state);
  // console.log(allContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((responses) => dispatch(setContactDetails(responses.data)))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  
  // let addValues = allContacts.allContacts;
  // dispatch(setContactDetails(addValues));

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
