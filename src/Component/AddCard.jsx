import { useEffect, useState } from "react";
import "./AddCard.css";

const initialState = {
  name: "",
  email: "",
  phone: "",
};

const AddCard = ({ addUsers, updateUser, editableUser }) => {
  const [user, setUser] = useState(initialState);
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (editableUser) {
      updateUser(user);
    } else {
      addUsers(user);
    }

    setUser(initialState);
  }
  function handleChange(e) {
    if (user.name.length < 3) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }

    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  
  function emailhandleChange(e) {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }

    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function phonehandleChange(e) {
    if (user.phone.length <= 10) {
      setPhoneErr(true);
    } else {
      setPhoneErr(false);
    }

    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  useEffect(() => {
    if (editableUser) {
      setUser(editableUser);
    }
  }, [editableUser]);

  return (
    <>
      <form>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Name"
          value={user.name}
        />
        {nameErr ? <span>Invalid Name</span> : ""}

        <input
          type="email"
          name="email"
          onChange={emailhandleChange}
          placeholder="Email"
          value={user.email}
        />
        {emailErr ? <span>Invalid E-mail</span> : ""}

        <input
          type="number"
          name="phone"
          onChange={phonehandleChange}
          placeholder="Phone"
          value={user.phone}
        />
        {phoneErr ? <span>Invalid Phone Number</span> : ""}

        <button onClick={handleSubmit}>
          {editableUser ? "Edit" : "Add"} User
        </button>
      </form>
    </>
  );
};

export default AddCard;
