import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TehtavaLista from "./TehtavaLista";
import "./tyylit.css";
export default function Sovellus() {
  const [tehtavat, asetaTehtavat] = useState([]);
  const nimi = useRef();
  useEffect(() => {
    const varastoidutTehtavat = JSON.parse(localStorage.getItem("tehtavat"));
    if (varastoidutTehtavat) asetaTehtavat(varastoidutTehtavat);
  }, []);
  useEffect(() => {
    localStorage.setItem("tehtavat", JSON.stringify(tehtavat));
  }, [tehtavat]);
  function kasittelePoisto() {
    const uudetTehtavat = tehtavat.filter((tehtava) => !tehtava.valmis);
    asetaTehtavat(uudetTehtavat);
  }
  function kasitteleLisays(e) {
    const tehtavanNimi = nimi.current.value;
    if (tehtavanNimi === "") return;
    nimi.current.value = null;

    asetaTehtavat((prevTehtavat) => {
      return [
        ...prevTehtavat,
        {
          nimi: tehtavanNimi,
          id: uuidv4(),
          valmis: false,
        },
      ];
    });
  }
  function vaihe(id) {
    const uudetTehtavat = [...tehtavat];
    const uusiTehtava = uudetTehtavat.find(
      (uusiTehtava) => uusiTehtava.id === id
    );
    uusiTehtava.valmis = !uusiTehtava.valmis;
    asetaTehtavat(uudetTehtavat);
  }
  return (
    <>
      <div className="painikkeet">
        <input ref={nimi} type="text" placeholder="Syötä tehtävä" />
        <button className="button lisaa" onClick={kasitteleLisays}>
          Lisää tehtava
        </button>
        <button className="button poista" onClick={kasittelePoisto}>
          Poista merkatut
        </button>
      </div>
      <TehtavaLista tehtavalista={tehtavat} vaihe={vaihe} />
    </>
  );
}
