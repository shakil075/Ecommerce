import styled from "styled-components";
import home from "../images/mac2.png";
import { mobile } from "../lib/responsive";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${home}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 35%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-style: 24px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 1px;
  padding: 10px 0;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;
const Button = styled.button`
  width: 40%;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  padding: 15px;
  margin-bottom: 10px;
`;

const Link = styled.p`
  margin: 5px 0px;
  font-size: 12px;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />

          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>Don't you remember the password?</Link>
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
              color: "green",
            }}
            to="/register"
          >
            Create a new account
          </NavLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
