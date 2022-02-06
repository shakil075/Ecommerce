import styled from "styled-components";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../lib/Context";
import { mobile, mobile5 } from "../lib/responsive";

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(173, 216, 230, 0.404);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.5s ease;
  cursor: pointer;
  ${mobile({
    opacity: "1",
    backgroundColor: "rgba(173, 216, 230, 0.404)",
    height: "20%",
    top: "50%",
  })}
`;

const Container = styled.div`
  flex: 1;
  margin: 0.8rem;
  min-width: 28rem;
  height: 35rem;
  display: flex;
  align-item: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  overflow: hidden;
  ${mobile5({ maxHeight: "25rem", minWidth: "20rem" })}

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  ${mobile5({ width: "15rem", height: "15rem" })}
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
  ${mobile5({ maxHeight: "50%" })}
`;

const Icon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Cat = styled.div`
  font-size: 1.8rem;
  text-transform: uppercase;
  color: #252525;
  letter-spacing: 0.1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
`;

const Price = styled.div`
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  font-weight: 500;
  color: #252525;
`;
const PacDiv = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 10;
  background: white;
  text-align: center;
  padding: 0.5rem 0;
`;

class Product extends Component {
  static contextType = DataContext;
  render() {
    const { item, addCart, addWishList, action } = this.props;
    let clickable =
      action == true ? null : { pointerEvents: "none", color: "#ccc" };

    return (
      <Container>
        <Circle />
        <Image src={item.img} />

        <PacDiv>
          <Cat>{item.categories}</Cat>
          <Price>Price : {item.price} TK.</Price>
        </PacDiv>

        <Info>
          <Icon style={clickable} onClick={() => addCart(item.id)}>
            <ShoppingCartOutlined />
          </Icon>

          <NavLink
            to={`/products/${item.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Icon>
              <SearchOutlined />
            </Icon>
          </NavLink>
          <Icon onClick={() => addWishList(item.id)}>
            <FavoriteBorderOutlined style={{ color: item.color }} />
          </Icon>
        </Info>
      </Container>
    );
  }
}

export default Product;
