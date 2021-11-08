import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import Slide from "react-reveal/Fade";
import DatePicker from "react-date-picker";
import Footer from "../Footer";

const AddPost = ({ contacts, addContact }) => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  // const [dob, setDOB] = useState(new Date());
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkContactEmailExists = contacts.filter((contact) =>
      contact.email === email ? contact : null
    );
    const checkContactPhoneExists = contacts.filter((contact) =>
      contact.phone === phone ? contact : null
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
      id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
      email,
      name,
      lastname,
      description,
      phone,
    };

    addContact(data);
    toast.success("Contact added successfully!!");
    history.push("/");
  };

  return (
    <div className="container-fluid">
      <Slide top duration={2000}>
        <h1
          className="text-center text-dark py-3 display-4"
          style={{ fontWeight: 400 }}
        >
          Add Address Book.
        </h1>
      </Slide>
      <div className="row">
        <Slide top duration={2000}>
          <div className="col-md-6 p-5 mx-auto shadow">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Last name"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              {/* <div className="form-group">
              <DatePicker
                className="form-control"
                placeholder="DOB"
                // value={dob}
                // onChange={(e) => setDOB(e.target.value)}
              />
            </div> */}
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="number"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="btn btn-block btn-dark"
                  type="submit"
                  value="Add"
                />
              </div>
            </form>
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
  addContact: (data) => {
    dispatch({ type: "ADD_CONTACT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
