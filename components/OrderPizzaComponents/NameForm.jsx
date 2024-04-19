import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import "/Users/gmzsever/Downloads/workintechTasks/fsweb-s7-challenge-pizza-main/src/styles/nameForm.css";

function NameForm({ handleNameChange, name }) {
  return (
    <div className="name-container">
      <FormGroup>
        <Label className="name-label" for="name">
          {" "}
          Adınız
          <Input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Lütfen en az 3 karakter giriniz."
          />{" "}
        </Label>
      </FormGroup>
    </div>
  );
}

export default NameForm;
