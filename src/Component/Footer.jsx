import styled from "styled-components";
import { mobile, tablet, tablet2 } from "../lib/responsive";
import {
  Facebook,
  Instagram,
  MailOutlined,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";

const Container = styled.div`
  display: flex;
  margin-top: 2rem;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const Logo = styled.h1`
  ${tablet({ fontSize: "25px" })}
`;
const Desc = styled.p`
  margin: 2rem 0;
  line-height: 2.5rem;
  letter-spacing: 0.1rem;
  font-size: 1.5rem;
  ${tablet({ fontSize: "1.2rem" })}
  ${tablet2({ fontSize: "1rem" })}
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem;
  ${tablet({ width: "3rem", height: "3rem", margin: "1rem" })}
`;

const Center = styled.div`
  flex: 1;
  padding: 2rem;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 3rem;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  ${tablet({ fontSize: "1.2rem" })}
  ${tablet2({ fontSize: "1rem" })}
`;

const Right = styled.div`
  flex: 1;
  padding: 2rem;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  ${tablet({ fontSize: "1.2rem" })}
  ${tablet2({ fontSize: "1rem" })}
`;

const Payment = styled.img`
  width: 70%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>EVO.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available,but the
          majority have suffered alteration in some form,by injected humor,or
          randomised words whice don't look ever slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fasion</ListItem>
          <ListItem>Woman Fasion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Kadamtoli,Adamjee,Narayanganj
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +8801307373484
        </ContactItem>
        <ContactItem>
          <MailOutlined style={{ marginRight: "10px" }} />
          shakilahsan45@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
