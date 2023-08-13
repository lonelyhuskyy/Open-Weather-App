import { Row, Col } from "react-bootstrap";

export const Top = (props) => {
  return (
    <>
      <Row>
        <Col>
          <div className="location">
            <p>{props.data.name}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="display">
          <Col>
            <div className="temp">
              {props.data.main ? (
                <h1>{props.data.main.temp.toFixed()}°F</h1>
              ) : null}
            </div>
          </Col>
          <Col>
            <div className="icon">
              {props.data.weather ? (
                <img src={props.imageUrl} alt=""></img>
              ) : null}
            </div>
          </Col>
          <Col>
            <div className="description">
              {props.data.weather ? (
                <p className="bold">{props.data.weather[0].main}</p>
              ) : null}
              {props.data.weather ? <p>{props.data.weather[0].description}</p> : null}
            </div>
          </Col>
        </div>
      </Row>
      <Row>
        <Col>
          <div className="min-max">
            {props.data.main ? (
              <p className="bold">Min: {props.data.main.temp_min.toFixed()}°F</p>
            ) : null}
            {props.data.main ? (
              <p className="bold">Max: {props.data.main.temp_max.toFixed()}°F</p>
            ) : null}
          </div>
        </Col>
      </Row>
    </>
  );
};
