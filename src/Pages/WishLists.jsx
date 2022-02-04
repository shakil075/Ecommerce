import styled from "styled-components";
import { mobile } from "../lib/responsive";
import { NavLink } from "react-router-dom";
import Product from "../Component/Product";
import { DataContext } from "../lib/Context";
import { Component } from "react";
import Footer from "../Component/Footer";
import Announcement from "../Component/Announcement";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 600;
  font-size: 3rem;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopBottom = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  font-size: 1.8rem;
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

class WishList extends Component {
  static contextType = DataContext;
  render() {
    const { wishlist, addCart, addWishList, cart } = this.context;
    return (
      <Container>
        <Announcement />
        <Wrapper>
          <Title>Your Wishlist</Title>
          <Top>
            <TopBottom>
              <NavLink
                to="/products"
                style={{ textDecoration: "none", color: "black" }}
              >
                Continue Shopping
              </NavLink>
            </TopBottom>
            <TopTexts>
              <TopText>
                <NavLink
                  to="/cart"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Shopping Bag ({cart.length})
                </NavLink>
              </TopText>
              <TopText>
                <NavLink
                  to="/wishlist"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Your Wishlist ({wishlist.length})
                </NavLink>
              </TopText>
            </TopTexts>
            <TopBottom type="filled">
              {" "}
              <NavLink
                to="/cart"
                style={{ textDecoration: "none", color: "white" }}
              >
                Your Cart
              </NavLink>
            </TopBottom>
          </Top>

          {wishlist.length == 0 ? <p>No items</p> : null}
          <Bottom>
            {wishlist.map((item) => (
              <Product
                item={item}
                key={item.id}
                addCart={addCart}
                addWishList={addWishList}
              />
            ))}
          </Bottom>
        </Wrapper>
        <Footer />
      </Container>
    );
  }
}

export default WishList;
