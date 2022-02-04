import iphone1 from "../images/iphone1.png";
import iphone2 from "../images/iphone2.png";
import iphone3 from "../images/iphone3.png";
import iphone4 from "../images/iphone4.png";

import laptop1 from "../images/laptop1.png";
import laptop2 from "../images/laptop2.png";
import laptop3 from "../images/laptop3.png";
import laptop4 from "../images/laptop4.png";

import mac1 from "../images/mac1.png";
import mac2 from "../images/mac2.png";
import mac3 from "../images/mac3.png";
import mac4 from "../images/mac4.png";

import android1 from "../images/android1.png";
import android2 from "../images/android2.png";
import android3 from "../images/android3.png";
import android4 from "../images/android4.png";

import { Component, createContext } from "react";

export const DataContext = createContext();

export default class DataProvider extends Component {
  state = {
    products: [
      {
        id: 1,
        categories: "Macbook Pro",
        cat: "mac",
        count: 1,
        price: 500,
        color: "black",
        img: mac1,
        action: true,
      },
      {
        id: 2,
        categories: "Samsung s10",
        cat: "android",
        count: 1,
        price: 2500,
        color: "black",
        img: android3,
        action: true,
      },
      {
        id: 3,
        categories: "Macbook Air",
        cat: "mac",
        count: 1,
        price: 1500,
        color: "black",
        img: mac2,
        action: true,
      },
      {
        id: 4,
        categories: "Samsung Gallaxy Note 9",
        cat: "android",
        count: 1,
        price: 1500,
        color: "black",
        img: android4,
        action: true,
      },
      {
        id: 5,
        categories: "Core i7 10th Gen",
        cat: "laptop",
        count: 1,
        price: 1500,
        color: "black",
        img: laptop4,
        action: true,
      },
      {
        id: 6,
        categories: "Macbook Desktop",
        cat: "mac",
        count: 1,
        price: 1100,
        color: "black",
        img: mac3,
        action: true,
      },
      {
        id: 7,
        categories: "Iphone 12 pro",
        cat: "iphone",
        count: 1,
        price: 1800,
        color: "black",
        img: iphone2,
        action: true,
      },
      {
        id: 8,
        categories: "core i5 11th gen",
        cat: "laptop",
        count: 1,
        price: 2700,
        color: "black",
        img: laptop2,
        action: true,
      },
      {
        id: 9,
        categories: "core i5 10th gen",
        cat: "laptop",
        count: 1,
        price: 3100,
        color: "black",
        img: laptop3,
        action: true,
      },
      {
        id: 10,
        categories: "Samsung Galaxy s10",
        cat: "android",
        count: 1,
        price: 3500,
        color: "black",
        img: android1,
        action: true,
      },
      {
        id: 11,
        categories: "Macbook",
        cat: "mac",
        count: 1,
        price: 3100,
        color: "black",
        img: mac4,
        action: true,
      },
      {
        id: 12,
        categories: "Iphone 12",
        cat: "iphone",
        count: 1,
        price: 3100,
        color: "black",
        img: iphone3,
        action: true,
      },
      {
        id: 13,
        categories: "iphone 10",
        cat: "iphone",
        count: 1,
        price: 3100,
        color: "black",
        img: iphone4,
        action: true,
      },
      {
        id: 14,
        categories: "core i3 10th gen",
        cat: "laptop",
        count: 1,
        price: 3100,
        color: "black",
        img: laptop1,
        action: true,
      },
    ],
    sliderItems: [
      {
        id: 1,
        img: mac2,
        title: "SUMMER SALE",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg: "f5fafd",
      },
      {
        id: 2,
        img: android4,
        title: "AUTUMN COLLECTION",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg: "fcf1ed",
      },
      {
        id: 3,
        img: iphone3,
        title: "LOUNGEWEAR LOVE",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg: "fbf0f4",
      },
    ],
    categories: [
      {
        id: 1,
        img: mac2,
        title: "MACBOOK",
      },
      {
        id: 2,
        img: android2,
        title: "ANDROID",
      },
      {
        id: 3,
        img: iphone1,
        title: "IPHONE",
      },
    ],
    cart: [],
    wishlist: [],
    total: 0,
    data: "",
    body: "",
  };

  addData = (name) => {
    this.setState({ data: name });
  };

  addCart = (id) => {
    const { products, cart } = this.state;
    const check = cart.every((item) => {
      return item.id !== id;
    });

    if (check) {
      const data = products.filter((product) => {
        if (product.id == id) {
          product.action = false;
        }
        return product.id == id;
      });
      this.setState({ cart: [...cart, ...data] });
    } else {
      products.filter((product) => {
        if (product.id != id) {
          product.action = true;
        }
      });
    }
  };

  addWishList = (id) => {
    const { products, wishlist } = this.state;
    const check = wishlist.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        if (product.id == id) {
          product.color = "red";
        }
        return product.id == id;
      });
      this.setState({
        wishlist: [...wishlist, ...data],
      });
    } else {
      const { wishlist } = this.state;
      wishlist.forEach((item, index) => {
        if (item.id === id) {
          item.color = "black";
          wishlist.splice(index, 1);
        }
      });
      this.setState({ wishlist: wishlist });
    }
  };

  reduction = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  increase = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item.id === id) {
        item.count += 1;
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  removeProduct = (id) => {
    const { cart } = this.state;
    cart.forEach((item, index) => {
      if (item.id === id) {
        cart.splice(index, 1);
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };
  getTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    this.setState({ total: res });
  };

  componentDidUpdate() {
    localStorage.setItem("Cart", JSON.stringify(this.state.cart));
    localStorage.setItem("Total", JSON.stringify(this.state.total));
    localStorage.setItem("WishLists", JSON.stringify(this.state.wishlist));
    localStorage.setItem("Products", JSON.stringify(this.state.products));
  }

  componentDidMount() {
    const dataCart = JSON.parse(localStorage.getItem("Cart"));
    if (dataCart !== null) {
      this.setState({ cart: dataCart });
    }

    console.log(dataCart);
    const dataTotal = JSON.parse(localStorage.getItem("Total"));
    if (dataTotal !== null) {
      this.setState({ total: dataTotal });
    }
    const dataWish = JSON.parse(localStorage.getItem("WishLists"));
    if (dataWish !== null) {
      this.setState({ wishlist: dataWish });
    }
    console.log(dataWish);

    const dataProducts = JSON.parse(localStorage.getItem("Products"));
    if (dataProducts !== null) {
      this.setState({ products: dataProducts });
    }
    console.log(dataProducts);
  }

  render() {
    const {
      products,
      sliderItems,
      categories,
      cart,
      total,
      wishlist,
      data,
      body,
    } = this.state;
    const {
      addCart,
      reduction,
      increase,
      removeProduct,
      getTotal,
      addWishList,
      addData,
    } = this;
    return (
      <DataContext.Provider
        value={{
          products,
          sliderItems,
          categories,
          cart,
          total,
          addCart,
          reduction,
          increase,
          removeProduct,
          getTotal,
          wishlist,
          addWishList,
          addData,
          data,
          body,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
