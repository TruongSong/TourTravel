import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          If you want the change of .newsletter css property please set the
          section className to newsletter in the 9th line then the property
          works.... Thanks me later..
        </p>
        <div className="d-flex align-items-center gap-2 mt-3">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h5 className="mb-0 mt-3">Monkey D Kelvin</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          If you want the change of .newsletter css property please set the
          section className to newsletter in the 9th line then the property
          works.... Thanks me later..
        </p>
        <div className="d-flex align-items-center gap-2 mt-3">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h5 className="mb-0 mt-3">Lisa Julie</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          If you want the change of .newsletter css property please set the
          section className to newsletter in the 9th line then the property
          works.... Thanks me later..
        </p>
        <div className="d-flex align-items-center gap-2 mt-3">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h5 className="mb-0 mt-3">D Luffy Hero</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          If you want the change of .newsletter css property please set the
          section className to newsletter in the 9th line then the property
          works.... Thanks me later..
        </p>
        <div className="d-flex align-items-center gap-2 mt-3">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h5 className="mb-0 mt-3">Rehi Jumada</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          If you want the change of .newsletter css property please set the
          section className to newsletter in the 9th line then the property
          works.... Thanks me later..
        </p>
        <div className="d-flex align-items-center gap-2 mt-3">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h5 className="mb-0 mt-3">Yui Habana</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
