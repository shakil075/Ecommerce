import React, { Component } from "react";
import Products from "../Component/Products";
import Footer from "../Component/Footer";
import { mobile, tablet, tablet2 } from "../lib/responsive";
import { DataContext } from "../lib/Context";
import Navbar from "../Component/Navbar";
import Announcement from "../Component/Announcement";
import Pagination from "../Component/Pagination";

class SearchProduct extends Component {
  static contextType = DataContext;
  state = {
    posts: this.context.products,
    loading: false,
    currentPage: 1,
    postPage: 9,
  };

  paginate = (e, pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };
  render() {
    const { data } = this.context;
    const { posts, loading, currentPage, postPage } = this.state;
    const indexOfLastPost = currentPage * postPage;
    const indexOfFirstPost = indexOfLastPost - postPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    console.log(currentPosts);

    return (
      <div>
        <Announcement />
        <Navbar />
        <Products data={data} posts={currentPosts} />
        <Pagination
          postsPerPage={postPage}
          totalPosts={posts.length}
          paginate={this.paginate}
          cp={currentPage}
        />
        <Footer />
      </div>
    );
  }
}

export default SearchProduct;
