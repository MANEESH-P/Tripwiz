import React, { useState, useRef, useEffect } from "react";
import "./modal.css";

function Modal() {
  const [destinationButton, setDestinationButton] = useState("Destinations");
  const [stateButton, setStateButton] = useState("Select your state");
  const didMountRef = useRef(false);
  const nameInput = useRef("");
  const emailInput = useRef("");
  const phoneInput = useRef("");
  const [errors, setError] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    state: "",
    destination: "",
  });
  const [destinations, setDestination] = useState([]);

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    state: "",
    destination: "",
  });

  const resetModal = (e) => {
    nameInput.current.value = "";
    emailInput.current.value = "";
    phoneInput.current.value = "";
    setStateButton("Select your state");
    setDestinationButton("Destinations");
    setDestination([]);
    setError({
      name: "",
      email: "",
      phoneNumber: "",
      state: "",
      destination: "",
    });
    setFormFields({
      name: "",
      email: "",
      phoneNumber: "",
      state: "",
      destination: "",
    });
    didMountRef.current = false;
  };

  const handleStateClick = (e) => {
    didMountRef.current = true;
    setStateButton(e.target.innerHTML);
    setFormFields({ ...formFields, state: e.target.innerHTML });
    if (e.target.innerHTML === "Kerala") {
      setDestinationButton("Destinations");
      setDestination(["Palakkad", "Kozhikode", "Thiruvananthapuram"]);
    } else {
      setDestinationButton("Destinations");
      setDestination(["Chennai", "Coimbatore", "Erode"]);
    }
  };

  const handleDestinationClick = (e) => {
    didMountRef.current = true;
    setDestinationButton(e.target.innerHTML);
    setFormFields({ ...formFields, destination: e.target.innerHTML });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const key in formFields) {
      validateInput(key);
    }
    if (stateButton === "Select your state") {
      setError((prevErrors) => ({
        ...prevErrors,
        state: "Please enter state",
      }));
    } else {
      setError((prevErrors) => ({
        ...prevErrors,
        state: "",
      }));
    }
    if (destinationButton === "Destinations") {
      setError((prevErrors) => ({
        ...prevErrors,
        destination: "please enter destination",
      }));
    } else {
      setError((prevErrors) => ({
        ...prevErrors,
        destination: "",
      }));
    }
  };

  const validateInput = (input) => {
    let error = "";
    var pattern = /^[789]\d{9}$/;
    const EmailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (formFields[input] === "") {
      error = `please enter ${input}`;
    } else {
      switch (input) {
        case "name":
          error = formFields[input].length <= 0 ? "Name is required" : "";
          break;
        case "email":
          error = !EmailRegex.test(formFields[input])
            ? "Enter valid email"
            : "";
          break;
        case "phoneNumber":
          error = !pattern.test(formFields[input])
            ? "Enter valid phonenumber"
            : "";
          break;
        default:
          break;
      }
    }

    setError((prevErrors) => ({
      ...prevErrors,
      [input]: [error],
    }));
  };

  useEffect(() => {
    if (didMountRef.current) {
      if (stateButton === "Select your state") {
        setError((prevErrors) => ({
          ...prevErrors,
          state: "Please enter state",
        }));
      } else {
        setError((prevErrors) => ({
          ...prevErrors,
          state: "",
        }));
      }
    }
  }, [stateButton]);

  useEffect(() => {
    if (didMountRef.current) {
      if (destinationButton === "Destinations") {
        setError((prevErrors) => ({
          ...prevErrors,
          destination: `please enter destination`,
        }));
      } else {
        setError((prevErrors) => ({
          ...prevErrors,
          destination: "",
        }));
      }
    } else {
      didMountRef.current = true;
    }
  }, [destinationButton]);

  const handleChange = (event) => {
    var pattern = /^[789]\d{9}$/;
    const EmailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    event.preventDefault();
    const { name, value } = event.target;
    let error = "";

    switch (name) {
      case "name":
        error = value.length <= 0 ? "Name is required" : "";
        break;
      case "email":
        error = !EmailRegex.test(value) ? "Enter valid email" : "";
        break;
      case "phoneNumber":
        error = !pattern.test(value) ? "Enter valid phonenumber" : "";
        break;
      default:
        break;
    }

    setError({ ...errors, [name]: [error] });
  };

  return (
    <div
      class="modal fade"
      id="modal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
      data-backdrop="static"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content text-white">
          <div class="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={resetModal}
            >
              <span className="text-white" aria-hidden="true">
                &times;
              </span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="row">
                <div className="col-lg-6 container-left">
                  <h5 className="modal-title">ENTER YOUR DETAILS</h5>

                  <div class="form-group">
                    <input
                      name="name"
                      className="form-control"
                      type="text"
                      placeholder="Name"
                      required
                      data-error="Name is required"
                      onChange={(e) => {
                        setFormFields({ ...formFields, name: e.target.value });
                        handleChange(e);
                      }}
                      ref={nameInput}
                    />
                    {errors.name.length > 0 && (
                      <span className="error">{errors.name}</span>
                    )}
                  </div>
                  <div class="form-group">
                    <input
                      name="email"
                      className="form-control"
                      type="email"
                      placeholder="E-mail"
                      data-error="Email is required"
                      required
                      onChange={(e) => {
                        setFormFields({ ...formFields, email: e.target.value });
                        handleChange(e);
                      }}
                      ref={emailInput}
                    />
                    {errors.email.length > 0 && (
                      <span className="error">{errors.email}</span>
                    )}
                  </div>
                  <div class="form-group">
                    <input
                      name="phoneNumber"
                      className="form-control"
                      type="text"
                      placeholder="Phone No"
                      required
                      data-error="Phone Number is required"
                      value={formFields.phoneNumber}
                      onChange={(e) => {
                        setFormFields({
                          ...formFields,
                          phoneNumber: e.target.value,
                        });
                        handleChange(e);
                      }}
                      ref={phoneInput}
                    />
                    {errors.phoneNumber.length > 0 && (
                      <span className="error">{errors.phoneNumber}</span>
                    )}
                  </div>
                </div>
                <div className="col-lg-6 container-right">
                  <h5 className="modal-title">SELECT YOUR DESTINATION</h5>

                  <div className="form-group custom-dropdown state">
                    <div className="dropdown">
                      <button
                        class="btn dropdown"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {stateButton}
                        <span class="caret">
                          <i
                            className="fa fa-caret-down"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <li
                          onClick={(e) => {
                            handleStateClick(e);
                          }}
                          className="dropdown-item"
                        >
                          Kerala
                        </li>
                        <hr className="dropdown" />
                        <li
                          onClick={(e) => {
                            handleStateClick(e);
                          }}
                          className="dropdown-item"
                        >
                          Tamil Nadu
                        </li>
                      </div>
                    </div>
                    {errors.state.length > 0 && (
                      <span className="error">{errors.state}</span>
                    )}
                  </div>
                  <div className="form-group custom-dropdown state">
                    <div className="dropdown">
                      <button
                        className="btn dropdown"
                        type="button"
                        id="dropdownMenuButton2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {destinationButton}
                        <span className="caret">
                          <i
                            className="fa fa-caret-down"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        {destinations.length !== 0 ? (
                          destinations.map((item, index) => {
                            if (index !== destinations.length - 1) {
                              return (
                                <React.Fragment key={index}>
                                  <li
                                    onClick={(e) => {
                                      handleDestinationClick(e);
                                    }}
                                    className="dropdown-item"
                                  >
                                    {item}
                                  </li>
                                  <hr className="dropdown"></hr>
                                </React.Fragment>
                              );
                            } else {
                              return (
                                <li
                                  key={index}
                                  onClick={(e) => {
                                    handleDestinationClick(e);
                                  }}
                                  className="dropdown-item"
                                >
                                  {item}
                                </li>
                              );
                            }
                          })
                        ) : (
                          <li className="dropdown-item disabled">
                            Choose a state
                          </li>
                        )}
                      </div>
                    </div>
                    {errors.destination.length > 0 && (
                      <span className="error">{errors.destination}</span>
                    )}
                  </div>

                  <div className="row">
                    <div className="col-lg-6 col-6 " id="left-btn">
                      <button
                        onClick={handleSubmit}
                        type="submit"
                        className="btn modal-btn"
                      >
                        Submit
                      </button>
                    </div>
                    <div className="col-lg-6 col-6" id="right-btn">
                      <button
                        onClick={resetModal}
                        className="btn modal-btn "
                        data-dismiss="modal"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
