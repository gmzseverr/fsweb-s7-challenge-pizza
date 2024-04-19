import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

function Note() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <label
        htmlFor="exampleText"
        style={{
          fontWeight: "bold",
          fontSize: "large",
          fontFamily: `"Barlow", sans serif`,
          textAlign: "left",
          marginTop: "10%",
        }}
      >
        Sipariş Notu
      </label>
      <input
        fontSize="small"
        className="note-container"
        type="textarea"
        id="exampleText"
        placeholder="Siparişine eklemek istediğin bir not var mı?"
        style={{
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ced4da",
          width: "590px",
          fontStyle: "italic",
        }}
      />
    </div>
  );
}

export default Note;
