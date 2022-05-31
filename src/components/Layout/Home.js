import React from "react";
import SubHeader from "../UI/SubHeader";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = (props) => {

  const Navigate = useNavigate();

  const onAdd = (event) => {
    event.preventDefault();
    Navigate("/addcontact");
  }

  return (
    <>
      <SubHeader
        customClass='subheader_section'
        subHeading='Contacts List'
        btnHandler={onAdd}
        btnName={'Add Contact'}
      />
    </>
  );

};

export default Home;
