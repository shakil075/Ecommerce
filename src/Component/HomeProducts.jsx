import { Component } from "react";
import styled from "styled-components";
import { DataContext } from "../lib/Context";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-weight: 900;
  font-size: 3rem;
`;
const ProductDiv = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

class HomeProducts extends Component {
  static contextType = DataContext;

  render() {
    const { products, addCart, addWishList, color } = this.context;
    const newProducts = products.slice(-12);

    return (
      <Container>
        <Heading>Latest Products</Heading>
        <ProductDiv>
          {newProducts.map((item) => (
            <Product
              color={color}
              addCart={addCart}
              addWishList={addWishList}
              item={item}
              key={item.id}
              action={item.action}
            />
          ))}
        </ProductDiv>
      </Container>
    );
  }
}

export default HomeProducts;
