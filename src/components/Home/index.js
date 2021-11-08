import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Slide from "react-reveal/Fade";
import Jello from "react-reveal/Jello";
import banner from "./banner.svg";
import { FaAddressBook } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaPrescriptionBottle } from "react-icons/fa";

const Home = ({ contacts, deleteContact }) => {
  return (
    <div className="container">
      <div>
        <h1>
          <Jello top duration={2400}>
            <img src={banner} height="300" className="center" />
          </Jello>
          <Slide top duration={5000}>
            <h4
              style={{ textAlign: "center", fontWeight: "350" }}
              className="mt-4"
            >
              <span style={{ fontWeight: "700" }}>ABook.</span> is a very
              minimal and easy way to create contact details
            </h4>
          </Slide>
        </h1>

        <Slide top duration={2000}>
          <div className="row d-flex flex-column">
            <Link to="/add" className="btn btn-outline-dark my-0 ml-auto mr-3">
              <span>
                <FaAddressBook className="mr-1 mb-1" /> Add Contact
              </span>
            </Link>
            <div className="col-md-12 mx-auto my-4">
              <table className="table table-hover">
                <thead className="table-header bg-dark text-white">
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">D.O.B</th>
                    <th scope="col">Description</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.length > 0 ? (
                    contacts.map((contact, id) => (
                      <tr key={id}>
                        <td>{id + 1}</td>
                        <td>{contact.name ? contact.name : "-"}</td>
                        <td>{contact.lastname ? contact.lastname : "-"}</td>
                        <td>{contact.dob ? contact.dob : "-"}</td>
                        <td>
                          {contact.description ? contact.description : "-"}
                        </td>
                        <td>{contact.email ? contact.email : "-"}</td>
                        <td>{contact.phone ? contact.phone : "-"}</td>
                        <td>
                          <Link
                            to={`/edit/${contact.id}`}
                            className="btn btn-sm btn-primary mr-1"
                          >
                            <FaUserEdit
                              style={{ fontSize: "18px" }}
                              className="mb-1 mr-1"
                            />
                            Edit
                          </Link>
                          <button
                            type="button"
                            onClick={() => deleteContact(contact.id)}
                            className="btn btn-sm btn-danger"
                          >
                            <span>
                              <FaPrescriptionBottle
                                style={{ fontSize: "14px" }}
                                className="mb-1 mr-1"
                              />
                              Delete
                            </span>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <th>No contacts found</th>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
