import React from "react";
import Tehtava from "./Tehtava.js";
export default function TehtavaLista({ tehtavalista, vaihe }) {
  return tehtavalista.map((yksittainenTehtava) => {
    return (
      <Tehtava
        key={yksittainenTehtava.id}
        vaihe={vaihe}
        yksittainentehtava={yksittainenTehtava}
      />
    );
  });
}
