import styled from "styled-components";
import React, { useState } from "react";

const PageUl = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PageLi = styled.li.attrs((props) => ({ className: props.className }))`
  font-size: 1.8rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: 600;

  &.active {
    background: lightblue;
    color: white;
    border: 0.1rem solid white;
  }
`;

const Pagination = ({ postsPerPage, totalPosts, paginate, cp }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <PageUl>
        <PageLi
          style={{
            background: "lightblue",
            color: "white",
            borderRight: "0.1rem solid white",
          }}
          onClick={(e) => paginate(e, cp == 1 ? (cp = 1) : cp - 1)}
        >
          Prev
        </PageLi>
        {pageNumbers.map((number) => (
          <PageLi
            key={number}
            onClick={(e) => paginate(e, number)}
            className={number == cp ? "active" : ""}
          >
            {number}
          </PageLi>
        ))}
        <PageLi
          style={{
            background: "lightblue",
            color: "white",
            borderLeft: "0.1rem solid white",
          }}
          onClick={(e) =>
            paginate(
              e,
              cp == pageNumbers.length ? (cp = pageNumbers.length) : cp + 1
            )
          }
        >
          Next
        </PageLi>
      </PageUl>
    </div>
  );
};

export default Pagination;
