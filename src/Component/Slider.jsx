import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import styled from "styled-components";
import { DataContext } from "../lib/Context";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { mobile, mobile4, tablet, tablet2 } from "../lib/responsive";

const Container = styled.div`
  padding: 5rem;
  ${mobile4({ padding: "3rem" })}
`;

const Slide = styled.div`
  display: flex;
  justify-content: center !important;
  align-items: center;
  transition: all 1.5s ease;
  background-color: #${(props) => props.bg};
  transform: translateX(
    calc ((${(props) => props.slideIndex * -100}vw / 3) - 2rem)
  );
`;
const ImgContainer = styled.div`
  width: 100%;
  height: 28rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  ${tablet({ height: "60%" })}
  ${tablet2({ height: "50%" })}
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 65px;
  ${tablet({ fontSize: "5rem" })}
  ${tablet2({ fontSize: "4rem" })}
`;
const Desc = styled.p`
  font-size: 2.5rem;
  font-weight: 400;
  letter-spacing: 0.1rem;
  font-family: "Dongle", sans-serif;
  ${tablet({ fontSize: "2rem" })}
  ${tablet2({ fontSize: "1.8rem" })}
`;
const Button = styled.a`
  padding: 0 0.5rem;
  font-size: 2.5rem;
  background-color: transparent;
  cursor: pointer;
  text-transform: uppercase;
  font-family: "Dongle", sans-serif;
  ${tablet({ fontSize: "2.5rem" })}
`;

const Heading = styled.h1`
  font-weight: 900;
  font-size: 3rem;
  padding: 4rem 0;
  text-align: center;
  ${mobile4({ fontSize: "2rem", padding: "2rem 0" })}

  i {
    color: lightblue;
    font-size: 2.2rem;
    ${mobile4({ fontSize: "1.5rem" })}
  }

  i:first-child {
    margin-right: 1rem;
    ${mobile4({ marginRight: "0.5rem" })}
  }

  i:last-child {
    margin-left: 1rem;
    ${mobile4({ marginLeft: "0.5rem" })}
  }
`;

class Sliders extends Component {
  static contextType = DataContext;

  render() {
    const settings = {
      arrows: true,
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1366,
          settings: {
            slidesToShow: 4,
            dots: false,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const { products } = this.context;
    return (
      <Container>
        <Heading>
          <i class="fas fa-angle-double-left"></i>
          Featured Product
          <i class="fas fa-angle-double-right"></i>
        </Heading>
        <Slider {...settings}>
          {products.map((item) => (
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <InfoContainer>
                <Title></Title>
                <Desc>Price : {item.price} TK.</Desc>
                <Button>
                  <NavLink
                    style={{ textDecoration: "none", color: "#febd69" }}
                    to={`/products/${item.id}`}
                  >
                    Shop Now
                  </NavLink>
                </Button>
              </InfoContainer>
            </Slide>
          ))}
        </Slider>
      </Container>
    );
  }
}

export default Sliders;
