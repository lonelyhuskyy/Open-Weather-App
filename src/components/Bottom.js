import { Row , Col } from "react-bootstrap";

export const Bottom = (props) => {
  return (
    <Row>
      <div className="bottom">
        <Col>
          <div className="feels">
            {props.data.main ? (
              <p className="bold">{props.data.main.feels_like.toFixed()}°F</p>
            ) : null}
            <p>Feels Like</p>
          </div>
        </Col>
        <Col>
          <div className="humidity">
            {props.data.main ? <p className="bold">{props.data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
        </Col>
        <Col>
          <div className="wind">
            {props.data.wind ? <p className="bold">{props.data.wind.speed} MPH</p> : null}
            {/* {props.data.main ? <p>{props.data.wind.deg} deg</p>  : null} */}
            <p>Wind Speed</p>
          </div>
        </Col>
      </div>
    </Row>
  );
};
