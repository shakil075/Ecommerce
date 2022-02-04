import { Component } from "react";
import styled from "styled-components";
import Product from "./Product";
import { DataContext } from "../lib/Context";

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

class Products extends Component {
  static contextType = DataContext;
  render() {
    const { products, addCart, addWishList } = this.context;
    const { data, posts } = this.props;
    let searchProduct;

    if (data == "" || data == "all") {
      searchProduct = posts;
    } else {
      searchProduct = products.filter((curData) => {
        if (
          curData.cat.slice(0, data.length).toLowerCase() === data.toLowerCase()
        ) {
          return curData.cat;
        } else if (
          curData.categories.slice(0, data.length).toLowerCase() ===
          data.toLowerCase()
        ) {
          return curData.categories;
        }
      });
    }

    console.log(searchProduct);

    if (searchProduct == "") {
      return (
        <Container
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: "4rem 0",
          }}
        >
          <h1>No items Found</h1>
        </Container>
      );
    }

    return (
      <Container>
        {searchProduct.map((item) => (
          <Product
            addCart={addCart}
            addWishList={addWishList}
            item={item}
            key={item.id}
            action={item.action}
          />
        ))}
      </Container>
    );
  }
}

export default Products;
