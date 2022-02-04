import React, { Component } from "react";
import Categories from "../Component/Categories";
import Footer from "../Component/Footer";
import Newsletter from "../Component/Newsletter";
import styled from "styled-components";
import HomeProducts from "../Component/HomeProducts";
import Announcement from "../Component/Announcement";
import Navbar from "../Component/Navbar";
import Sliders from "../Component/Slider";
import { DataContext } from "../lib/Context";
import Products from "../Component/Products";

const Container = styled.div``;

export default class Home extends Component {
  static contextType = DataContext;

  render() {
    const { data } = this.context;

    if (data == "") {
      return (
        <Container>
          <Announcement />
          <Navbar />
          <Categories />
          <HomeProducts />
          <Sliders />
          <Newsletter />:
          <Footer />
        </Container>
      );
    } else {
      return (
        <Container>
          <Announcement />
          <Navbar />
          <Products data={data} />
          <Footer />
        </Container>
      );
    }
  }
}
