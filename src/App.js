import "./App.scss";
import { useQuery } from "@apollo/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Get_Images } from "./queries";
import Card from "./components/Cards";

function App() {
  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className={"SampleNextArrow"}
        style={{ ...style, display: "flex" }}
        onClick={onClick}
      >
        <img src="/arrow.svg" alt="" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className={"SamplePrevArrow"}
        style={{ ...style, display: "flex" }}
        onClick={onClick}
      >
        <img src="/arrow.svg" alt="" />
      </div>
    );
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // Get Images Query
  const {
    data: listOfImages,
    error: errorListImages,
    loading: loadingImages,
  } = useQuery(Get_Images);
  if (loadingImages) return <p>Loading...</p>;
  if (errorListImages) return <p>Error !! </p>;
  return (
    <div className="App">
      <div className="container">
        <div className="carousel-container">
          <Slider {...settings}>
            {listOfImages?.image.map((item) => (
              <Card data={item} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default App;
