import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../Redux/action";
import styles from "./SideContainer.module.css";

function SideContainer() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    city: "",
    country: "",
  });

  function changeHandle(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const saveUser = () => {
    dispatch(addUser(input));
  };

  return (
    <div className={styles.container}>
      <>
        <br />
        <br />
        <br />
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Name"
          value={input.name}
          onChange={changeHandle}
        />
        <br />
        <br />
        <input
          className={styles.input}
          type="text"
          name="city"
          placeholder="City"
          value={input.city}
          onChange={changeHandle}
        />
        <br />
        <br />
        <input
          className={styles.input}
          type="text"
          name="country"
          placeholder="Country"
          value={input.country}
          onChange={changeHandle}
        />
        <br />
        <br />

        <button className={styles.button} onClick={() => saveUser()}>
          Save
        </button>
      </>
    </div>
  );
}

export default SideContainer;
