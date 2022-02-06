import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../Announcement";
import Footer from "../Footer";
import Newsletter from "../Newsletter";
import { mobile } from "../../lib/responsive";
import { DataContext } from "../../lib/Context";
import { Component } from "react";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 5rem;
  display: flex;
  ${mobile({ padding: "1rem", flexDirection: "column", marginTop: "1.5rem" })}
`;
const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 50rem;
  object-fit: cover;
  ${mobile({ maxHeight: "30rem", width: "30rem" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 5rem;
  ${mobile({ padding: "1rem" })}
`;
const Title = styled.h1`
  font-size: 3rem;
  font-weight: 400;
`;
const Desc = styled.p`
  margin: 2rem 0;
  font-size: 1.3rem;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 3.5rem;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 3rem 0;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 2rem;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 0.5rem;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 1rem;
  padding: 0.5rem;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  ${mobile({ width: "100%" })}
`;
const Button = styled.button`
  padding: 1.5rem;
  border: 0.2rem solid lightblue;
  background-color: white;
  cursor: pointer;
  border-radius: 0.2rem;
  font-weight: 500;
`;

class ProductShop extends Component {
  static contextType = DataContext;
  state = {
    product: [],
  };

  getProduct = () => {
    if (this.props.id) {
      const res = this.context.products;
      const data = res.filter((item) => {
        return item.id == this.props.id;
      });

      this.setState({ product: data });
    }
  };

  componentDidMount() {
    this.getProduct();
  }

  render() {
    const { product } = this.state;
    const { addCart } = this.context;
    let check = product.map((item) => item.action);

    let clickable =
      (check[0] == true) == true
        ? {
            textDecoration: "none",
            color: "black",
            fontWeight: "bold",
            textTransform: "uppercase",
            cursor: "pointer",
          }
        : {
            textDecoration: "none",
            color: "#eee",
            fontWeight: "bold",
            textTransform: "uppercase",
            pointerEvents: "none",
            color: "#ccc",
          };

    return (
      <Container>
        <Announcement />

        <NavLink
          style={{
            fontSize: "2rem",
            padding: "2rem 1rem",
            color: "lightsalmon",
            textDecoration: "none",
            textTransform: "capitalize",
            fontWeight: "500",
            letterSpacing: "0.1rem",
            marginLeft: "1rem",
          }}
          to="/products"
        >
          back
        </NavLink>

        {product.map((item, index) => (
          <Wrapper key={index}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.categories}</Title>
              <Desc>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
                consequatur odio minus repellendus eos, quidem exercitationem
                placeat id odit esse?
              </Desc>
              <Price>{item.price * item.count} TK</Price>

              <FilterContainer>
                <Filter>
                  <FilterTitle>Color</FilterTitle>
                  <FilterColor color="black" />
                  <FilterColor color="darkblue" />
                  <FilterColor color="gray" />
                </Filter>
                <Filter>
                  <FilterTitle>Size</FilterTitle>
                  <FilterSize>
                    <FilterSizeOption>XS</FilterSizeOption>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                  </FilterSize>
                </Filter>
              </FilterContainer>
              <AddContainer>
                <Button>
                  <NavLink
                    to="/cart"
                    style={clickable}
                    onClick={() => addCart(item.id)}
                  >
                    Add To Cart
                  </NavLink>
                </Button>
              </AddContainer>
            </InfoContainer>
          </Wrapper>
        ))}

        <Newsletter />
        <Footer />
      </Container>
    );
  }
}

export default ProductShop;
