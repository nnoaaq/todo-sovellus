import React from "react";

export default function tehtava({ yksittainentehtava, vaihe }) {
  function kasitteleVaihe() {
    vaihe(yksittainentehtava.id);
  }
  return (
    <div className="tehtavaElementit">
      <label className="tehtavaElementti">
        <input
          onChange={kasitteleVaihe}
          type="checkbox"
          checked={yksittainentehtava.valmis}
        ></input>
        {yksittainentehtava.nimi}
      </label>
    </div>
  );
}
