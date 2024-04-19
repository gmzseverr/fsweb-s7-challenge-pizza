import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import "/Users/gmzsever/Downloads/workintechTasks/fsweb-s7-challenge-pizza-main/src/styles/malzemeler.css";

function Malzemeler({ malzemeler, handleMalzemeSecimi }) {
  return (
    <div>
      <FormGroup
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <h2 className="malzeme-baslik">Ek Malzemeler</h2>
        <span className="malzeme-not">
          En az 4, en fazla 10 malzeme seçebilirsiniz. Her ekstra malzeme 5₺.
        </span>
        <span className="malzeme-tablo">
          <div className="malzemeler-container">
            {malzemeler.map((malzeme) => (
              <FormGroup check key={malzeme}>
                <Label
                  check
                  for={`malzeme-${malzeme}`}
                  className="malzeme-label"
                >
                  <Input
                    type="checkbox"
                    id={`malzeme-${malzeme}`}
                    value={malzeme}
                    onChange={handleMalzemeSecimi}
                  />{" "}
                  {malzeme}
                </Label>
              </FormGroup>
            ))}
          </div>
        </span>
      </FormGroup>
    </div>
  );
}

export default Malzemeler;
