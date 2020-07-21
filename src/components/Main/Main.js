import React from "react";
import image from "../../assets/image.png";
import "./main.css";
import Modal from "../Modal/Modal";

function Main() {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="jumbotron-row row">
            <div className="col-12 col-md-6 col-lg-5 offset-lg-1 col-sm-12">
              <h1 className="display-4 jumbotron-heading text-white">
                DISCOVER NEW ADVENTURES
              </h1>
              <hr id="heading" />
            </div>
            <div className="col-12 col-md-6 col-lg-5 col-sm-12">
              <p className="jumbotron-text">
                We offer you a totally flexible and personal service so you can
                experience Kerala and Tamil Nadu your way.Take a glimpse at the
                tours we offer - for you to get inspired.
              </p>
              <p className="jumbotron-text">
                All of our sample tours can be customized to suit your personal
                preferences. Or, you can request your own personal tour!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container section-container">
        <div className="row section">
          <div className="col-12 col-md-12 col-lg-6 offset-lg-1 column-left">
            <div className="card">
              <img className="card-img-top" src={image} alt="Card image cap" />
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 column-right">
            <h1 className="section-heading text-black">HERE WE GO</h1>
            <p className="section-text">
              We will design a complete itinerary for you. From suggesting our
              favourite places that we are sure you'd love and the sights you
              shouldn't miss, we are at your service, throughout. We'll book
              your accomodation and transport, and are happy to drive you
              anywhere you want.
            </p>
            <button
              type="button"
              className="btn btn-sm section-btn"
              data-toggle="modal"
              data-target="#modal"
            >
              CUSTOMIZE MY TRIP
            </button>
          </div>
        </div>
      </div>
      <Modal />
    </>
  );
}

export default Main;
