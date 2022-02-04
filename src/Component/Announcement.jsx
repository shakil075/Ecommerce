import styled from "styled-components";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Pinterest,
  Person,
  Email,
} from "@material-ui/icons";

import { mobile } from "../lib/responsive";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  height: 4.5rem;
  background-color: #f5f5f5;
  color: #252525;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.4rem;
  font-weight: 500;
`;

const MailDiv = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0.2rem 0.4rem;
  ${mobile({ display: "none" })}

  &:before {
    content: "";
    position: absolute;
    background-color: lightgray;
    width: 0.1rem;
    height: 100%;
    top: 0;
    right: 0;
  }
`;
const Mail = styled.div`
  margin-left: 0.5rem;
`;

const Announce = styled.div`
  flex: 6;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${mobile({ display: "none" })}
`;
const AnnounceText = styled.div`
  margin-left: 0.5rem;
`;
const AnnounceLinks = styled.div``;

const Language = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    background-color: lightgray;
    width: 0.1rem;
    height: 100%;
    top: 0;
    left: 0;
  }
`;
const SelectBox = styled.select`
  border: none;
  outline: none;
  padding: 0.2rem 0.4rem;
  border-radius: 0.1rem;
  background-color: transparent;
  cursor: pointer;
  ${mobile({ fontSize: "1.4rem" })}
`;
const Options = styled.option`
  border: none;
  outline: none;
`;

const Login = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0.4rem;

  position: relative;

  &:before {
    content: "";
    position: absolute;
    background-color: lightgray;
    width: 0.1rem;
    height: 100%;
    top: 0;
    left: 0;
  }
`;
const Action = styled.div`
  margin-left: 0.5rem;
  font-weight: bold;
  cursor: pointer;
`;

const linksFontSize = { fontSize: "2rem", margin: "0.5rem", cursor: "pointer" };

const Announcement = () => {
  return (
    <Container>
      <MailDiv>
        <Email /> <Mail>evo@gmail.com</Mail>
      </MailDiv>
      <Announce>
        <AnnounceText>Free Shipping for all Order of 1000 TK.</AnnounceText>
        <AnnounceLinks>
          <Facebook style={linksFontSize} />
          <Twitter style={linksFontSize} />
          <LinkedIn style={linksFontSize} />
          <Pinterest style={linksFontSize} />
        </AnnounceLinks>
      </Announce>
      <Language>
        <SelectBox>
          <Options selected>English</Options>
          <Options>Bangla</Options>
        </SelectBox>
      </Language>
      <Login>
        <Person />
        <Action>
          <NavLink
            to="/login"
            style={{ textDecoration: "none", color: "black" }}
          >
            Login
          </NavLink>
        </Action>
      </Login>
    </Container>
  );
};

export default Announcement;
