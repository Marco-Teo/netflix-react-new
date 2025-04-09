import { Col, Container, Row, Card, Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Details = () => {
  const params = useParams();
  const [error, setError] = useState(false);
  const [state, setState] = useState([]);

  const url = "http://www.omdbapi.com/?apikey=24ad60e9&i=";

  useEffect(() => {
    fetch(url + params.moviesId)
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          console.log("tutto bene", response);
          setState(response);
          console.log("eccomi", state);
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.moviesId]);

  console.log("state", state);

  return (
    <Container className="d-flex flex-column min-vh-100">
      <Row sd={12} md={6} lg={4} className="justify-content-center flex-grow-1">
        <Col>
          <Card>
            <Card.Img variant="top" src={state.Poster} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>{state.Plot}</Card.Text>
            </Card.Body>
            {state.Ratings &&
              state.Ratings.map((rating, index) => (
                <Badge key={index} className=" my-1">
                  {rating.Source}: {rating.Value}
                </Badge>
              ))}
            <Badge>{state.BoxOffice}</Badge>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
