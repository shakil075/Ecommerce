import styled from "styled-components";
import { mobile } from "../lib/responsive";
import { NavLink } from "react-router-dom";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
  ${mobile({ height: "30vh" })};
`;
const Container = styled.div`
  flex: 1;
  margin: 0.3rem;
  height: 45vh;
  position: relative;
  background-color: rgba(110, 105, 105, 0.197);
  overflow: hidden;
  &:hover img {
    transform: scale(1.5);
  }
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 2rem;
  font-family: "Dongle", sans-serif;
  font-size: 6rem;
  letter-spacing: 0.1rem;
`;
const Button = styled.button`
  border: none;
  padding: 0.2rem 1rem;
  background-color: #febd69;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  font-family: "Dongle", sans-serif;
  font-size: 2rem;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>
          <NavLink
            to={`/products`}
            style={{ textDecoration: "none", color: "white" }}
          >
            SHOP NOW
          </NavLink>
        </Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
