import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  mobile,
  mobile2,
  mobile3,
  mobile4,
  tablet,
  tablet2,
} from "../lib/responsive";
import classes from "../css/active.module.css";
import { DataContext } from "../lib/Context";
import { Badge } from "@material-ui/core";
import {
  Favorite,
  LocalMall,
  Search,
  AccountCircle,
  ArrowForwardIos,
  Close,
  Home,
  ArrowBack,
} from "@material-ui/icons";
import Select from "./SelectComponent/Select";
import "../css/navbar.css";

const Container = styled.div`
  padding: 1.5rem 1rem;
  width: 100%;
  z-index: 5;
  ${mobile({ height: "fit-content" })};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile2({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mobile2({
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    padding: "0.5rem 2rem",
  })}
`;
const Logo = styled.h1`
  font-weight: 700;
  font-size: 4rem;
  ${mobile({ fontSize: "3rem", margin: "auto" })}
`;
const Bar = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span {
    font-size: 1.2rem;
    font-weight: 500;
  }

  i {
    font-size: 1.5rem;
    margin: 0 0.5rem;
  }
`;

const Center = styled.div`
  flex: 2.5;
  height: 11rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  ${mobile({ justifyContent: "center" })}
`;
const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  position: relative;
`;
const SearchInput = styled.input`
  padding: 0.8rem;
  width: 22rem;
  border: none;
  outline: none;
  background: #f5f5f5;
  ${mobile({ borderRadius: "0.5rem 0 0 0.5rem" })}
  ${mobile2({ borderRadius: "0.5rem 0 0 0.5rem" })}

  ::placeholder {
    font-size: 1.5rem;
    text-align: center;
    letter-spacing: 0.1rem;
  }
`;

const SearchDiv = styled.div`
  position: relative;
`;

const SearchList = styled.ul`
  position: absolute;
  background: #2f3640;
  width: 100%;
  max-height: 20rem;
  top: 110%;
  border-radius: 0.3rem;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SearchLi = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  list-style: none;
  font-size: 1.5rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
`;

const IconDiv = styled.div`
  background-color: #febd69;
  padding: 0.55rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;

const Ul = styled.ul`
  width: 100%;
  list-style: none;
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mobile({ display: "none" })}
`;
const Li = styled.li`
  font-size: 1.5rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #252525;
  letter-spacing: 0.1rem;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: "Dongle", sans-serif;
  ${tablet({ flexDirection: "column" })};
  ${tablet2({ flexDirection: "column" })};
  ${mobile({ flexDirection: "column" })};
  ${mobile2({ flexDirection: "row", width: "100%", padding: "0.5rem 0" })};
`;

const MenuItemDiv = styled.div``;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${tablet({ justifyContent: "space-between", padding: "0.3rem 0.5rem" })};

  :nth-child(1) {
    display: none;
    ${mobile2({ display: "flex" })};
  }

  :last-child {
    ${mobile3({ display: "none" })};
  }

  :not(:last-child) {
    flex: 1;
    justify-content: space-around;
    background: white;
    padding: 0.8rem;
    border-radius: 0.2rem;
    ${tablet({ justifyContent: "space-between" })};

    ${MenuItemDiv} {
      margin: 0 1rem;
    }
  }
`;

const Price = styled.div`
  font-size: 2rem;
`;
const Tk = styled.div`
  font-size: 2.5rem;
  margin-left: 0.5rem;
  font-weight: bold;
`;

const SideBar = styled.div`
  height: 100%;
  width: 37rem;
  position: fixed;
  left: ${(props) => props.move * -1}%;

  ${mobile2({ width: "70%" })};
  ${mobile4({ width: "80%" })};

  top: 0;
  background: #ffffff;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
`;

const Layer = styled.div`
  content: "";
  position: fixed;
  height: 100%;
  width: 100vw;
  background: rgba(0, 0, 0, 0.8);
  left: 0;
  top: 0;
  z-index: 100;
`;

const ListDiv = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  transition: all 0.3s ease;
  transform: translateX(${(props) => props.menu * -1}%);
`;

const SelectDiv = styled.div`
  ${mobile({ display: "none" })}
`;

const SideBar2 = styled.div`
  position: absolute;
  background-color: #fff;
  width: 100%;
  height: 100%;
  top: 0;
  transition: all 0.3s ease;
  right: ${(props) => props.side * -1}%;
  overflow-y: scroll;
`;

class Navbar extends Component {
  static contextType = DataContext;
  state = {
    searchProduct: [],
    left: 100,
    menuBar: 0,
    sideBar: 100,
    menuProduct: "",
  };

  render() {
    const { cart, wishlist, total, addData, products } = this.context;
    const { searchProduct, left, menuBar, sideBar, menuProduct } = this.state;
    const options = [
      {
        search: "all",
      },
      {
        search: "iphone",
      },
      {
        search: "android",
      },
      {
        search: "mac",
      },
      {
        search: "laptop",
      },
    ];

    let sideBarArr = [
      ["Mobile Phones", `Iphone `, `Android`],
      ["PC,Laptop and MacBook", `Desktop`, `Laptop`, `MacBook `],
      [
        "Mobile Accessories",
        `Earphone`,
        `Gaming Accessories`,
        `others Accessories`,
      ],
      [
        "PC and Laptop Components",
        `Processor`,
        `Ram`,
        `HDD`,
        `SSD`,
        `GPU`,
        `Monitor`,
      ],
    ];

    const changeProducts = (e) => {
      const value = e.target.value;
      if (e.key == "Enter");
      {
        addData(value);
      }

      let search = [];

      products.filter((curData) => {
        if (
          curData.cat.slice(0, value.length).toLowerCase().trim() ===
          value.toLowerCase().trim()
        ) {
          search.push(curData.cat);
        }
        if (
          curData.categories.slice(0, value.length).toLowerCase().trim() ===
          value.toLowerCase().trim()
        ) {
          search.push(curData.categories);
        }

        if (value == "") {
          search = [];
        }
      });

      search = [...new Set(search)];

      this.setState({ searchProduct: search });
    };

    const changeData = () => {
      addData("");
    };

    const selectData = (e, data) => {
      addData(data);
      this.setState({ searchProduct: [] });
    };

    const leftRight = () => {
      document.body.classList.toggle("active");
      if (left == 100) {
        this.setState({ left: 0 });
      } else {
        this.setState({ left: 100 });
      }
    };

    const menuChange = (e, name) => {
      this.setState({ menuProduct: name.toLowerCase() });
      if (menuBar == 100 && sideBar == 0) {
        this.setState({ menuBar: 0, sideBar: 100 });
      }
      if (menuBar == 0 && sideBar == 100) {
        this.setState({ menuBar: 100, sideBar: 0 });
      }
    };

    console.log(menuProduct.trim());

    const checked = left == 100 ? { left: "-150%" } : null;

    console.log(left);
    return (
      <Container>
        <Wrapper>
          <Left>
            <Logo>
              <NavLink
                to="/"
                style={{ textDecoration: "none", color: "#252525" }}
              >
                EVO.
              </NavLink>
            </Logo>
            <Bar onClick={leftRight}>
              <i class="fas fa-bars"></i> <span>All</span>
            </Bar>
            <Layer style={checked}></Layer>

            <SideBar move={left}>
              <div>
                <Close className="close" onClick={leftRight} />
                <div className="helloHeading">
                  <AccountCircle
                    style={{ fontSize: "3rem", marginRight: "1rem" }}
                  />
                  <div>Hello, Sign in</div>
                </div>
                <div className="mainSideDiv">
                  <ListDiv menu={menuBar} className="listDiv">
                    {sideBarArr.map((item) => (
                      <ul className="mainUl">
                        {item.map((it) => (
                          <li
                            onClick={
                              it == item[0] ? null : (e) => menuChange(e, it)
                            }
                          >
                            {it}
                            {it == item[0] ? (
                              ""
                            ) : (
                              <ArrowForwardIos className="hoverEffect" />
                            )}
                          </li>
                        ))}
                      </ul>
                    ))}
                    <ul className="mainUl">
                      <li>Help &amp; Settings</li>
                      <li>Your Account</li>
                      <li>Customer Service</li>
                      <li>
                        <NavLink
                          to="/login"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          Sign In
                        </NavLink>
                      </li>
                    </ul>
                  </ListDiv>
                  <SideBar2 side={sideBar} className="sidebar2">
                    <div
                      side={sideBar}
                      menu={menuBar}
                      onClick={(e) => menuChange(e, "")}
                    >
                      <ArrowBack
                        className="hoverEffect"
                        style={{ marginRight: "0.5rem", fontSize: "2rem" }}
                      />
                      Main Menu
                    </div>
                    <ul>
                      <li>{menuProduct.toLocaleUpperCase()}</li>

                      {products
                        .filter(
                          (items) =>
                            items.cat.slice(0, 3).toLowerCase().trim() ==
                            menuProduct.slice(0, 3).toLowerCase().trim()
                        )
                        .map((item) => (
                          <li>
                            <NavLink
                              to={`/products/${item.id}`}
                              style={{
                                textDecoration: "none",
                                color: "black",
                                width: "100%",
                                height: "100%",
                                padding: "1.5rem 3rem",
                              }}
                            >
                              {item.categories}{" "}
                            </NavLink>
                          </li>
                        ))}
                    </ul>
                    ;
                  </SideBar2>
                </div>
              </div>
            </SideBar>
          </Left>
          <Center>
            <Ul>
              <Li onClick={changeData}>
                <NavLink
                  to="/"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Home
                </NavLink>
              </Li>
              <Li>
                <NavLink
                  to="/products"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Shop
                </NavLink>
              </Li>
              <Li>
                <NavLink
                  to="/pages"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Pages
                </NavLink>
              </Li>
              <Li>
                <NavLink
                  to="/blog"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Blog
                </NavLink>
              </Li>
              <Li>
                <NavLink
                  to="/contact"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Contact
                </NavLink>
              </Li>
            </Ul>
            <SearchBox>
              <SelectDiv>
                <Select Arr={options} />
              </SelectDiv>
              <SearchDiv>
                <SearchInput onChange={changeProducts} placeholder="Search" />
                <SearchList>
                  {searchProduct.map((item, index) => (
                    <SearchLi onClick={(e) => selectData(e, item)} key={index}>
                      {item}
                    </SearchLi>
                  ))}
                </SearchList>
              </SearchDiv>
              <IconDiv>
                <Search
                  style={{
                    color: "white",
                    fontSize: "2.2rem",
                  }}
                />
              </IconDiv>
            </SearchBox>
          </Center>
          <Right>
            <MenuItem>
              <MenuItemDiv>
                <NavLink
                  to="/"
                  style={{ textDecoration: "none", color: "black" }}
                  className={(pro) => (pro.isActive ? classes.active : "")}
                >
                  <Home style={{ fontSize: "2.1rem" }} />
                </NavLink>
              </MenuItemDiv>

              <MenuItemDiv>
                <NavLink
                  to="/products"
                  style={{ textDecoration: "none", color: "black" }}
                  className={(pro) => (pro.isActive ? classes.active : "")}
                >
                  <i style={{ fontSize: "2.1rem" }} class="fab fa-shopify" />
                </NavLink>
              </MenuItemDiv>
            </MenuItem>

            <MenuItem>
              <MenuItemDiv
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <NavLink
                  to="/wishlist"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <Badge badgeContent={wishlist.length} color="primary">
                    <Favorite style={{ fontSize: "2.1rem" }} />
                  </Badge>
                </NavLink>
              </MenuItemDiv>
              <MenuItemDiv
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <NavLink
                  to="/cart"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Badge badgeContent={cart.length} color="primary">
                    <LocalMall style={{ fontSize: "2.1rem" }} />
                  </Badge>
                </NavLink>
              </MenuItemDiv>
            </MenuItem>

            <MenuItem
              style={{
                flex: "2",
              }}
            >
              <Price>items:</Price>
              <Tk>{total} TK.</Tk>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    );
  }
}

export default Navbar;
