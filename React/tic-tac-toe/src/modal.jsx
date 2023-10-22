import React, { useState } from "react";
let treatmentName = "Masectomy";

function Modals({ treatmentName, closeModal }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "transparent",
          padding: "20px",
          borderRadius: "5px",
          width: "50%",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          The {treatmentName} treatment is inactive.
        </p>
        <p style={{ marginTop: "1rem" }}>
          Please contact your provider for further information.
        </p>
        <button
          style={{
            marginTop: "2rem",
            backgroundColor: "#1c5c9b",
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={closeModal}
        >
          Back
        </button>
      </div>
    </div>
  );
}

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [treatments, setTreatments] = useState([
    {
      id: "123",
      name: "Masectomy",
      isDeactivated: false,
    },
    {
      id: "456",
      name: "Lumpectomy",
      isDeactivated: false,
    },
    {
      id: "789",
      name: "Radiology",
      isDeactivated: true,
    },
  ]);

  function handleCloseModal() {
    setShowModal(false);
  }

  function treatmentsPush(isDeactivated) {
    if (isDeactivated) {
      setShowModal(true);
    }
  }

  return (
    <div>
      {showModal ? (
        <Modals treatmentName={treatmentName} closeModal={handleCloseModal} />
      ) : (
        <div>
          {treatments.map((treatment) => (
            <div
              key={treatment.id}
              style={{ cursor: "pointer", width: "100%" }}
              onClick={() => treatmentsPush(treatment.isDeactivated)}
            >
              <h3>{treatment.name}</h3>
              <hr style={{ width: "100%" }}></hr>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Modal;
