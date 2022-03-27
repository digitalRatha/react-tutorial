import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formval, setFormVal] = useState({
    name: "",
    contactno: "",
    email: "",
    message: "",
  });
  const [contacts, setContacts] = useState([]);
  const postContactApiUrl = "http://localhost:3030/api/1.0/addContact";
  const getContactsApiUrl = "http://localhost:3030/api/1.0/contactus";
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formval);
    if (formval.name !== '' && formval.contactno !== '' && formval.email !== '' && formval.message !== '' ) {
      postContact(formval);
    }
    else{
      alert('Form is invalid')
    }
  };

  useEffect(() => {
    let initial = true;
    if (initial) {
      getContacts();
    }

    return () => {
      initial = false;
    };
  }, []);

  const getContacts = async () => {
    try {
      const contacts = await axios.get(getContactsApiUrl);
      setContacts(contacts.data.Contacts)
    } catch (e) {
      console.log(e);
    }
  };
  const postContact = async (formval) => {

    try {
      let postData = await axios.post(postContactApiUrl, formval);
      getContacts();
      setFormVal({
        name: "",
        contactno: "",
        email: "",
        message: "",
      })
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div
        className="col-lg-6 text-center"
        style={{ marginLeft: "25%", marginTop: "100px", color: "red" }}
      >
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
              onChange={(event) =>
                setFormVal({ ...formval, name: event.target.value })
              }
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
              onChange={(event) =>
                setFormVal({ ...formval, email: event.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Contact No
            </label>
            <input
              value={formval.contactno}
              type="tel"
              className="form-control"
              id="exampleFormControlInput1"
              onChange={(event) =>
                setFormVal({ ...formval, contactno: event.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Queries
            </label>
            <textarea
              value={formval.message}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(event) =>
                setFormVal({ ...formval, message: event.target.value })
              }
            ></textarea>
          </div>
          <button
            onClick={handleSubmit}
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

      <div>
        <div className="col-lg-6 text-center mt-4">
          <div className="col-6 ">
            <div className="list-group">
              {contacts.map((contact) => (
                <button
                  key={contact._id}
                  type="button"
                  className="list-group-item list-group-item-action"
                >
                  {contact.name} , {contact.email} , {contact.contactno}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
