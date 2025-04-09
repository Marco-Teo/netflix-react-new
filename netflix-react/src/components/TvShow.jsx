import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MovieList from "./MovieList";

const TvShow = () => {
  const [gallery1, setGallery1] = useState([]);
  const [gallery2, setGallery2] = useState([]);
  const [gallery3, setGallery3] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const OMDB_URL = "https://www.omdbapi.com/?apikey=24ad60e9";

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    Promise.all([
      fetch(`${OMDB_URL}&s=${encodeURIComponent("Rick and Morty")}`)
        .then((res) => {
          if (!res.ok)
            throw new Error(
              "Errore fetch let's go in and out 20 minute adventure"
            );
          return res.json();
        })
        .then((data) => {
          if (data.Response === "True") {
            setGallery1(data.Search);
          } else {
            setError(true);
          }
        }),

      fetch(`${OMDB_URL}&s=${encodeURIComponent("Dragon Ball")}`)
        .then((res) => {
          if (!res.ok) throw new Error("Errore fetch GOAT");
          return res.json();
        })
        .then((data) => {
          if (data.Response === "True") {
            setGallery2(data.Search);
          } else {
            setError(true);
          }
        }),

      fetch(`${OMDB_URL}&s=${encodeURIComponent("Demon Slayer")}`)
        .then((res) => {
          if (!res.ok)
            throw new Error("Errore fetch Where are you Nezuko-chan");
          return res.json();
        })
        .then((data) => {
          if (data.Response === "True") {
            setGallery3(data.Search);
          } else {
            setError(true);
          }
        }),
    ])
      .then(() => setLoading(false))
      .catch((err) => {
        setError(true);
        console.error("An error has occurred:", err);
      });
  };

  return (
    <Container>
      <Row>
        <Col>
          {error ? (
            <p>Errore nel caricamento dei dati.</p>
          ) : (
            <>
              <MovieList
                title="Harry Potter"
                loading={loading}
                movies={gallery1.slice(0, 6)}
              />
              <MovieList
                title="Lord of the Rings"
                loading={loading}
                movies={gallery2.slice(0, 6)}
              />
              <MovieList
                title="Star Wars"
                loading={loading}
                movies={gallery3.slice(0, 6)}
              />
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default TvShow;
