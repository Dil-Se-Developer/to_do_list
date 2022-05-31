import React from "react";
import Button from "../UI/Button";
import "./Home.css";

const Home = (props) => {

    const onAdd = (event) => {
        event.preventDefault();
    }

  return (
      <>
        <div className="home_section">
            <h2>Contacts List</h2>
            <Button onClick={onAdd} btnName={'Add Contact'}></Button>
        </div>
      </>
  );

};

export default Home;
