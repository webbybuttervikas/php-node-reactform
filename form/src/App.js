import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const api = "http://localhost:5000";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleAlert = ()=>{
    alert("data added successfull")
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(api, {
        Name: name,
        Phone: phone,
        Email: email,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  


  return (
    <div className="d-flex  container justify-content-center mt-5">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1>FORM DATA</h1>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="Name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="john doe"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="johndoe@gmail.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Phone
          </label>
          <input
            type="number"
            className="form-control"
            id="example"
            placeholder="+9195746"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <button disabled={(!name,!email,!phone)} type="submit" onClick={()=>{handleAlert()}} className="btn btn-primary">
          Submit
        </button>
      </form> 
    </div>
  );
}

export default App;
