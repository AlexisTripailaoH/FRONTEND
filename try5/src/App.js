import React, { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import "./styles.css";

export default function App() {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const baseURL = "http://127.0.0.1:8000/api/user/login/";

  const postData = () => {

    setIsLoading(true);

    const postData = {
      username: "alexis2@mail.cl",
      password: "12345",
    };

    try {

      const res = fetch(baseURL, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postData),
      });


      const data = res.json();

      setUsers(data.user);


    } catch (err) {


    }
  }

  const renderUser = (
    <div className="userlist-container">
      {users.map((item, index) => (
        <div className="user-container" key={index}>
          <img src={item.avatar} alt="" />
          <div className="userDetail">
            <div className="first-name">{`${item.first_name}                
                                   ${item.last_name}`}</div>
            <div className="last-name">{item.email}</div>

            <div>{item.email}</div>
            <div className="first-name">{`${item.first_name}                
                                   ${item.last_name}`}</div>
            <div>{item.rol_id}</div>
            <div>{item.dir_id}</div>

          </div>
        </div>
      ))}
    </div>
  );
  return (
    <div className="App">
      {isLoading ? <LoadingSpinner /> : renderUser}
      {errorMessage && <div className="error">{errorMessage}</div>}
      <button onClick={postData} disabled={isLoading}>
        Fetch Users
      </button>
    </div>
  );
}
