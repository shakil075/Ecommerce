import { Component } from "react";
import styled from "styled-components";
import { DataContext } from "../lib/Context";
import { mobile, mobile4 } from "../lib/responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({
    padding: "0px",
    flexDirection: "column",
  })}
  ${mobile4({
    display: "none",
  })}
`;

class Categories extends Component {
  static contextType = DataContext;
  render() {
    const { categories } = this.context;
    return (
      <div>
        <Container>
          {categories.map((item) => (
            <CategoryItem item={item} key={item.id} />
          ))}
        </Container>
      </div>
    );
  }
}

export default Categories;
