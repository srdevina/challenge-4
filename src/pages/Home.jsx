import { Carousel, Button } from "react-bootstrap";
import Barbie from "../assets/barbie.jpg/";
import TheNun from "../assets/thenun.jpg";
import Elemental from "../assets/elemental.jpg";

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={Barbie} alt="barbie" />
        <Carousel.Caption>
          <h1>Barbie</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            nulla, a repellat perspiciatis facere molestias eius veniam, ab
            temporibus impedit aliquam veritatis corrupti. Laboriosam distinctio
            omnis tempora ad fugit nihil.
          </p>
          <Button
            href="https://www.youtube.com/watch?v=pBk4NYhWNMM"
            variant="danger"
          >
            Watch Trailer
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={TheNun} alt="The Nun II" />
        <Carousel.Caption>
          <h1>The Nun II</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            laudantium quae nesciunt enim eum dolorem sit! Molestiae quo
            aspernatur, itaque ipsam, dolore consequatur inventore commodi
            voluptatibus quibusdam dignissimos et aperiam!
          </p>
          <Button
            href="https://www.youtube.com/watch?v=QF-oyCwaArU"
            variant="danger"
          >
            Watch Trailer
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Elemental} alt="elemental" />
        <Carousel.Caption>
          <h1>Elemental</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus ab dicta est, consequuntur quia id ipsam! Quia iusto
            repellat repellendus molestias atque ipsum nisi similique cum,
            provident, consequuntur, recusandae architecto.
          </p>
          <Button
            href="https://www.youtube.com/watch?v=hXzcyx9V0xw"
            variant="danger"
          >
            Watch Trailer
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
