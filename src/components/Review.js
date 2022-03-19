import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./styles/owl-carousel.css";
import { review } from "../data/review";
import styled from 'styled-components'
const StyledAuthorSpace =styled.div`
  margin-top: 10px;
`


const Review = () => {
  const options = {
    loop: true,
    margin: 2,
    autoplay: true,
    autoplayHoverPause: true,
    dots: false,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
    },
  };

  return (
    <OwlCarousel {...options} className="owl-theme">
      {review.map((item) => {
        return (
          <div className="item" key={item.id} >
            <div className="item-content">{item.review}</div>
            <StyledAuthorSpace className="item-content" >- {item.author} -</StyledAuthorSpace>
          </div>
        );
      })}

    </OwlCarousel>
  );
};

export default Review;
