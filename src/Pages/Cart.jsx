import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../Component/Footer";
import { mobile, mobile4, mobile5 } from "../lib/responsive";
import { NavLink } from "react-router-dom";
import { Component } from "react";
import { DataContext } from "../lib/Context";
import Announcement from "../Component/Announcement";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 2rem;
  margin-bottom: 8rem;
  ${mobile({ padding: "1rem" })}
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
  padding: 2rem;
`;
const TopBottom = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
  cursor: pointer;

  ${mobile5({ padding: "0.5rem", fontSize: "1.3rem" })}
`;

const TopTexts = styled.div`
  font-size: 1.8rem;
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 1rem;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile4({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const ImageDiv = styled.div`
  width: 12rem;
  height: 12rem;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile4({ padding: "0.5rem", width: "10rem", height: "10rem" })}
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
const Details = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span`
  font-size: 1.5rem;
`;
const ProductId = styled.span`
  font-size: 1.2rem;
`;
const ProductColor = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span`
  font-size: 1.3rem;
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile4({ flexDirection: "row-reverse" })}
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
`;
const ProductAmount = styled.div`
  font-size: 2rem;
  margin: 0.5rem;
  ${mobile({ margin: "0.5rem 1.5rem" })}
  ${mobile4({ margin: "0 1.5rem" })}
`;
const ProductPrice = styled.div`
  font-size: 2.5rem;
  font-weight: 200;
  ${mobile({ marginBottom: "2rem", fontSize: "2rem" })}
  ${mobile4({ marginBottom: "0" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 0.1rem;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 2rem;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 500;
  font-size: 3rem;
  text-align: center;
  letter-spacing: 0.1rem;
`;
const SummaryItem = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "2.4rem"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: white;
  border: 0.2rem solid green;
  border-radius: 0.2rem;
  color: green;
  font-weight: 600;
  cursor: pointer;
`;

const DeleteButton = styled.span`
  border: none;
  color: #b83f2a;
  font-weight: 600;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  font-size: 1rem;
  cursor: pointer;
`;

class Cart extends Component {
  static contextType = DataContext;
  componentDidMount() {
    this.context.getTotal();
  }

  render() {
    const { cart, increase, reduction, removeProduct, total, wishlist } =
      this.context;
    return (
      <Container>
        <Announcement />
        <Wrapper>
          <Title>Shopping Cart</Title>
          <Top>
            <TopBottom>
              <NavLink
                to="/products"
                style={{ textDecoration: "none", color: "black" }}
              >
                <i class="fas fa-caret-square-left"></i>
              </NavLink>
            </TopBottom>
            <TopTexts>
              <TopText>
                <NavLink
                  to="/cart"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Your Cartlist ({cart.length})
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
              <NavLink
                to="/login"
                style={{ textDecoration: "none", color: "green" }}
              >
                <i class="fas fa-check-square"></i>
              </NavLink>
            </TopBottom>
          </Top>
          <Bottom>
            <Info>
              {cart.length == 0 ? <p>No items</p> : null}
              {cart.map((item, index) => (
                <div key={index}>
                  <Product key={index}>
                    <ProductDetail>
                      <ImageDiv>
                        <Image src={item.img} />
                      </ImageDiv>
                      <Details>
                        <ProductName>
                          <b>Product:</b> {item.categories}
                        </ProductName>
                        <ProductId>
                          <b>ID:</b> {item.id}
                        </ProductId>
                        <ProductColor color="black" />
                        <ProductSize>
                          <b>Size:</b> 37.5
                        </ProductSize>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <DeleteButton onClick={() => removeProduct(item.id)}>
                        delete
                      </DeleteButton>
                      <ProductAmountContainer>
                        <Remove
                          style={{ cursor: "pointer", fontSize: "2rem" }}
                          onClick={() => reduction(item.id)}
                        />
                        <ProductAmount>{item.count}</ProductAmount>
                        <Add
                          style={{ cursor: "pointer", fontSize: "2rem" }}
                          onClick={() => increase(item.id)}
                        />
                      </ProductAmountContainer>
                      <ProductPrice>{item.price * item.count} TK.</ProductPrice>
                    </PriceDetail>
                  </Product>
                  <Hr />
                </div>
              ))}
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>{total} TK.</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>50 TK.</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>- 50 TK.</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>{total} TK.</SummaryItemPrice>
              </SummaryItem>
              <Button>
                <NavLink
                  to="/login"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "green",
                    textTransform: "uppercase",
                  }}
                >
                  <i
                    style={{ marginRight: "0.5rem", fontSize: "2rem" }}
                    class="fas fa-check-square"
                  ></i>
                  Checkout
                </NavLink>
              </Button>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer />
      </Container>
    );
  }
}

export default Cart;
