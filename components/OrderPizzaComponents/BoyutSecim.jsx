import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import "/Users/gmzsever/Downloads/workintechTasks/fsweb-s7-challenge-pizza-main/src/styles/boyutKalinlik.css";

function BoyutSecim({ handleSizeChange, handleThicknessChange }) {
  return (
    <div className="boyut-secim-container">
      <div className="boyut-secim">
        <Form>
          <FormGroup>
            <Label for="boyut" className="custom-label">
              Boyut Seç
            </Label>
            <div className="radio-group">
              <FormGroup className="boyut-options" check>
                <Label check>
                  <Input
                    type="radio"
                    name="boyut"
                    value="Küçük"
                    onChange={handleSizeChange}
                  />{" "}
                  Küçük
                </Label>
              </FormGroup>
              <FormGroup className="boyut-options" check>
                <Label check>
                  <Input
                    type="radio"
                    name="boyut"
                    value="Orta"
                    onChange={handleSizeChange}
                  />{" "}
                  Orta
                </Label>
              </FormGroup>
              <FormGroup className="boyut-options" check>
                <Label check>
                  <Input
                    type="radio"
                    name="boyut"
                    value="Büyük"
                    onChange={handleSizeChange}
                  />{" "}
                  Büyük
                </Label>
              </FormGroup>
            </div>
          </FormGroup>
        </Form>
      </div>
      <div className="kalinlik-secim">
        <Form>
          <FormGroup>
            <div style={{ flexDirection: "column" }}>
              <Label for="kalinlik" className="custom-label">
                Hamur Seç
              </Label>
              <Input
                type="select"
                name="kalinlik"
                id="kalinlik"
                onChange={handleThicknessChange}
              >
                <option className="select-group" value="">
                  Hamur Kalınlığı:
                </option>
                <option className="select-group" value="İnce">
                  İnce
                </option>
                <option className="select-group" value="Orta">
                  Normal
                </option>
                <option className="select-group" value="Kalın">
                  Kalın
                </option>
              </Input>
            </div>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}

export default BoyutSecim;
