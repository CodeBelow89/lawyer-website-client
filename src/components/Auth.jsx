import React, { useEffect, useState } from "react";
import { Collapse } from "react-daisyui";
import "./Auth.css";
const Auth = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isAdmin, setIsAdmin] = useState("");
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);

  const handleSignup = async () => {
    try {
      setErrorMsg("");
      const result = await fetch("http://localhost:8080/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: username,
          email: email,
          phoneNumber: phoneNumber,
          pass: password,
        }),
      });

      let json = await result.json();

      setResults(json.Results);
      console.log(json);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if(localStorage.getItem("token")){

      getAllClients();
    }
  }, []);
  const getAllClients = async (e) => {
    try {
      console.log("popcorn");

      let result = await fetch("http://localhost:8080/user/api/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const json = await result.json();
      if (json.Error) {
        throw new Error(error.json);
      }

      console.log(json);
      setResults(json);
      console.log("hi");
      // props.updateToken(json.Token);
    } catch (err) {
      console.log(err);
      setErrorMsg(err.message);
    }
  };

  const displayUsers = () => {
    return results.map((user) => (
      <table>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Username
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Password
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Email</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Phone Number
            </th>
          </tr>
        </thead>
        <tbody>
          {results.map((item) => (
            <tr key={item.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {item.username}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {item.password}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {item.email}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {item.phoneNumber}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ));
  };

  return (
    <div>
      <form
        onSubmit={(i) => {
          i.preventDefault();
          handleSignup();
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          borderStyle: "solid",
        }}
      >
        <label className="label first-line:left-7">Username:</label>
        <input
          required
          type="username"
          className="input input-bordered w-full max-w-xs"
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="label first-line:left-7">Email:</label>
        <input
          type="email"
          className="input input-bordered w-full max-w-xs"
          placeholder="Enter Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="label first-line:left-7">Password:</label>
        <input
          required
          type="password"
          className="input input-bordered w-full max-w-xs"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="label first-line:left-7">Phone Number:</label>
        <input
          type="phoneNumber"
          className="input input-bordered w-full max-w-xs"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit" className="btn-outline btn-success btn btn-wide">
          Sign Up
        </button>
      </form>

      <div>
        <form>
          <input value={text} onChange={(e) => setText(e.target.value)} />

          <button
            type="button"
            onClick={() => {
              console.log("hello");
              getAllClients();
            }}
          >
            Submit
          </button>
        </form>
        {displayUsers()}
      </div>
    </div>
  );
};

export default Auth;
