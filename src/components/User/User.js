import React, { useState } from "react";
import styles from "./User.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import UserList from "./UserList";
import { v4 as uuidv4 } from "uuid";
import ErrorModal from "../UI/ErrorModal";

const User = () => {
  const [newUser, setNewUser] = useState({
    id: "",
    username: "",
    age: "",
  });

  const [isEmpty, setIsEmpty] = useState(false);

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setNewUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
        id: uuidv4(),
      };
    });
  };

  const [userList, setUserList] = useState([]);
  const [isclicked, setIsClicked] = useState(false);

  const clickHandler = (event) => {
    event.preventDefault();

    if (
      newUser.username.trim().length === 0 ||
      newUser.age.trim().length === 0
    ) {
      setIsEmpty(true);
    }

    return setUserList((prevUserList) => {
      setIsClicked(true);
      return [...prevUserList, newUser];
    });
  };

  const resetHandler = () => {
    setIsEmpty(null);
  };

  return (
    <div>
      <Card>
        <form className={styles.input}>
          <label>Username</label>
          <input
            type="text"
            onChange={changeHandler}
            name="username"
            value={newUser.username}
          />
          <label>Age (Years)</label>
          <input
            type="number"
            onChange={changeHandler}
            name="age"
            value={newUser.age}
          />
          <Button click={clickHandler} type="submit" content="Add User" />
        </form>
      </Card>
      <div className={isclicked ? styles.displayVisible : styles.displayHidden}>
        <Card>
          {isEmpty ? (
            <ErrorModal isEmpty={resetHandler} />
          ) : (
            <UserList
              users={userList.filter((user) => {
                return user.username !== "" && user.age !== "";
              })}
            />
          )}
        </Card>
      </div>
    </div>
  );
};

export default User;
