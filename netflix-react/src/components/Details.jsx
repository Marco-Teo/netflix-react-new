import { Col, Container, Row, Card, Badge } from "react-bootstrap";
import { data, Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Details = () => {
  const params = useParams();

  const [state, setState] = useState([]);

  const url = "http://www.omdbapi.com/?apikey=24ad60e9";
  const getData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          console.log("tutto bene", response);
          setState(response);
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    // controllo che filmID esista
    // const foundFilm = arrayConIFilm.find((film) => {
    //     return film.id.toString() === params.filmID
    //   })
    getData([state]);
  }, []);
  console.log("PARAMS", params);

  return (
    <h1>
      qua vado a creare la carta dove avro i dati richiesti una immagine del
      film con una descrizione il voto ecc tutto quello che voglio far vedere
    </h1>
  );
};

export default Details;
