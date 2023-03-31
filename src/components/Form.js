import React, { useContext, useState } from "react";
import "../components/CSS/Form.css";
import dataContext from "../context/dataContext";

const Form = (props) => {
  const [data, setData] = useState({
    userName: "",
    email: "",
    age: 19,
    phoneno: 8356004202,
    subject: "",
    message: "",
  });


  const context = useContext(dataContext);
  const { addData } = context;

  const handleAddData = (e) => {
	e.preventDefault();
	addData(data.userName, data.email, data.age, data.phoneno, data.subject, data.message);
	setData({userName : "", email : "", age : data.age, phoneno : data.phoneno, subject : "", message: ""})
  props.showAlert("Your message was sent, thank you!", "success", "You will be contacted soon!");
  }

  const onchange = (e) => {
	setData({...data, [e.target.name] : e.target.value})
  }

  return (
    <>
      <section className="ftco-section p-0 pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <strong className="heading-section">Let us know what you felt after watching the video👇...</strong>
            </div>
          </div>
          <div className="row justify-content-center" style={{backgroundColor : "#131212"}}>
            <div className="col-md-10">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <div className="contact-wrap w-100 p-lg-5 p-4">
                      <h3 className="mb-4">Send us a message</h3>
                      <form
                        action="/contact"
                        method="POST"
                        id="contactForm"
                        name="contactForm"
                        className="contactForm"
                      >
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="userName"
                                id="name"
                                placeholder="Name *"
								onChange={onchange
								}
								minLength={5}
                                required
								value={data.userName}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Email *"
                                onChange={onchange
								}
								minLength={5}
                                required
								value={data.email}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="number"
                                className="form-control"
                                name="age"
                                id="phoneno*"
                                placeholder="Age *"
								onChange={onchange
								}
								minLength={5}
								required
								value={data.age}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="phoneno"
                                id="phoneno*"
                                placeholder="Phone No"
                                onChange={onchange
								}
								minLength={5}
								value={data.phoneno}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Guitar Brand / Type you own ? *"
								onChange={onchange
								}
								minLength={5}required
								value={data.subject}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                name="message"
                                className="form-control"
                                id="message"
                                cols="30"
                                rows="6"
                                placeholder="Style of Guitar you know or want to learn *"
                                onChange={onchange
								}
								minLength={5}required
								value={data.message}
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="submit"
                                value="Send Message"
                                className="btn btn-primary"
								onClick={handleAddData}
                              />
                              <div className="submitting"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch" style={{backgroundColor :" #17a2b8"}}>
                    <div className="info-wrap w-100 p-lg-5 p-4 img text-light">
                      <h3>Contact us</h3>
                      <p className="mb-4">
                        We're open for any suggestion or just to have a chat. 
                      </p>
                      <div className="dbox w-100 d-flex align-items-start">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-map-marker"></span>
                        </div>
                        <div className="text pl-3 ">
                          <p>
                            <span>Address:</span> 04 Janta Street, Kalyan 421306
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-phone"></span>
                        </div>
                        <div className="text pl-3 ">
                          <p>
                            <span >Phone:</span>{" "}
                            <a href="tel://8356004202" className="text-light"  target="_blank">+91 8356 0042 02</a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-paper-plane"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Email:</span>{" "}
                            <a href="mailto:jayeshpdeshmukh@gmail.com" className="text-light" target="_blank">
                            jayeshpdeshmukh@gmail.com
                            
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-globe"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <p>New Online Batches Starting Soon</p> <strong>05 April 2023🤩</strong>
                          </p>
                          
                        </div>

                      </div>
                      <strong style={{color : "black"}}>You can send your Guitar Playing videos on our mail!</strong>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
