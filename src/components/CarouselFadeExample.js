import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <div className="backgroundBhai">
          Which course do you want to master?
          <div className="select">
            <input type="radio" />
            <h3>Web Technologies</h3>
          </div>
          <div className="select">
            <input type="radio" />
            <h3>Data Structures</h3>
          </div>
          <div className="select">
            <input type="radio" />
            <h3>BlockChain</h3>
          </div>
          <div className="select">
            <input type="radio" />
            <h3>Databases</h3>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="backgroundBhai">
          Idhigo ra special
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="backgroundBhai">
          Idhigo ra special
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;