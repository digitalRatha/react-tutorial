import React, { useState } from "react";

export default function Contact() {
  const [formval, setFormVal] = useState({ email: '', name: '', queries: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formval)
  };

  return (
    <div className="col-lg-6 text-center" style={{ marginLeft: "25%" , marginTop : '100px' , color:'red' }}>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput3" className="form-label">
            Name
          </label>
          <input
            type="text" 
            value={formval.name}
            className="form-control"
            id="exampleFormControlInput3"
            onChange={event =>  setFormVal({ ...formval , name : event.target.value})}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
           value={formval.email}
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={event =>  setFormVal({  ...formval,  email: event.target.value})}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Queries
          </label>
          <textarea
            value={formval.queries}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={event =>  setFormVal({...formval, queries : event.target.value}) }
          ></textarea>
        </div>
        <button onClick={handleSubmit}
          className="btn btn-lg btn-success"
          type="submit"
        >
          Submit
        </button>
        {/* <h1>
          {JSON.stringify(formval)}
        </h1> */}
      </form>
    </div>
  );
}
