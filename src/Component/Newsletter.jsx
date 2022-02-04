import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile, mobile4 } from "../lib/responsive";

const Container = styled.div`
  height: 35vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Dongle", sans-serif;
  ${mobile4({ display: "none" })}
`;
const Title = styled.h1`
  font-size: 7rem;
  margin-bottom: 2rem;
`;
const Desc = styled.div`
  font-size: 2.4rem;
  font-weight: 300;
  margin-bottom: 2rem;
  ${mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 4rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 0.1rem solid lightgray;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 2rem;
`;
const Button = styled.button`
  flex: 2;
  border: none;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>NewsFeed</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
