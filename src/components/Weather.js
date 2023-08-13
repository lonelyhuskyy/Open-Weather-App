import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Top } from "./Top";
import { Bottom } from "./Bottom";

export const Weather = () => {
  const [data, setData] = useState({});

  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=0492d5ce724fe76263015423aa98942f`;

  var icon = data && data.weather && data.weather[0] && data.weather[0].icon;
  var imageUrl = icon
    ? "https://openweathermap.org/img/wn/" + icon + "@2x.png"
    : "";

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
        console.log(response.data.coord.lat);
        console.log(response.data.coord.lon);
      });
      setLocation("");
    }
  };
  return (
    <section id="weather">
      <Container>
        <Row>
          <Col>
            <input
              type="text"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="Enter Location"
              onKeyDown={searchLocation}
            />
          </Col>
        </Row>
        <Top data={data} imageUrl={imageUrl} />
        <Bottom data={data} />
      </Container>
    </section>
  );
};
