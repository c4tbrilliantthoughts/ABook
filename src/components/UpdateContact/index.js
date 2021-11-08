import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";
import DatePicker from "react-date-picker";
import Slide from "react-reveal/Fade";
import Footer from "../Footer";

const UpdateContact = ({ contacts, updateContact }) => {
  const { id } = useParams();
  const history = useHistory();
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  useEffect(() => {
    setName(currentContact.name);
    setLastName(currentContact.lastname);
    // setDOB(currentContact.dob);
    setDescription(currentContact.description);
    setEmail(currentContact.email);
    setPhone(currentContact.phone);
  }, [currentContact]);

  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  // const [dob, setDOB] = useState(new Date());
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkContactEmailExists = contacts.filter((contact) =>
      contact.email === email && contact.id !== currentContact.id
        ? contact
        : null
    );
    const checkContactPhoneExists = contacts.filter((contact) =>
      contact.phone === phone && contact.id !== currentContact.id
        ? contact
        : null
    );

    if (!email || !name || !lastname || !description || !phone) {
      return toast.warning("Please fill in all fields!!");
    }
    if (checkContactEmailExists.length > 0) {
      return toast.error("This email already exists!!");
    }
    if (checkContactPhoneExists.length > 0) {
      return toast.error("This phone number already exists!!");
    }

    const data = {
      id: currentContact.id,
      email,
      name,
      lastname,
      // dob,
      description,
      phone,
    };

    updateContact(data);
    toast.success("Contact details updated successfully!");
    history.push("/");
  };
  // const [value, onChange] = useState(new Date());

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <Slide top duration={2000}>
          <button
            className="btn btn-dark ml-auto my-5"
            onClick={() => history.push("/")}
          >
            Go back
          </button>
          <div className="col-md-6 mx-auto shadow p-5">
            {currentContact ? (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    className="form-control"
                    value={name}
                    placeholder={"Name"}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    value={lastname}
                    placeholder={"Last Name"}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                {/* <div className="form-group">
                <DatePicker
                  className="form-control"
                  placeholder="DOB"
                  onChange={setDOB}
                  value={dob}
                />
              </div> */}
                <div className="form-group">
                  <input
                    className="form-control"
                    value={description}
                    placeholder={"Description"}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    value={email}
                    placeholder={"Email"}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    value={phone}
                    placeholder={"Phone"}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="form-group d-flex align-items-center justify-content-between my-2">
                  <button type="submit" className="btn btn-primary">
                    Update Contact
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => history.push("/")}
                  >
                    cancel
                  </button>
                </div>
              </form>
            ) : (
              <h1 className="text-center">No Contact Found</h1>
            )}
          </div>
        </Slide>
        <Footer />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch) => ({
  updateContact: (data) => {
    dispatch({ type: "UPDATE_CONTACT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateContact);
