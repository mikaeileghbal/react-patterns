import React, { useState } from "react";
import styles from "./style.module.scss";

export default function Pager({ pageCount }) {
  const [page, setPage] = useState(1);
  const pages = new Array(pageCount).fill(0);

  for (let index = 0; index < pages.length; index++) {
    pages[index] = index + 1;
  }

  function handlePrevious() {
    if (page > 1) setPage((page) => page - 1);
  }

  function handleNext() {
    if (page < pageCount) setPage((page) => page + 1);
  }

  function handleClick(number) {
    console.log(number);
    setPage(number);
  }

  return (
    <div className={styles.pagerContainer}>
      <PageStatus page={page} pageCount={pageCount} />
      <Pages
        page={page}
        pages={pages}
        pageCount={pageCount}
        onClick={handleClick}
      />
      <div>
        <button disabled={page === 1} onClick={handlePrevious}>
          Previous
        </button>
        <button disabled={page === pageCount} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

function PageStatus({ page, pageCount }) {
  return (
    <div>
      {page}/{pageCount}
    </div>
  );
}

function createPages(page, pageCout) {
  let pages = [];
  if (page <= 4) {
    console.log("<=4", pages);
    for (let i = 1; i <= 4; i++) {
      pages.push(i);
    }
    pages.push("dot");
    pages.push(pageCout);
    return pages;
  }

  if (page > pageCout - 4) {
    console.log(">count-4", pages);
    pages.push(1);
    pages.push("dot");
    for (let i = pageCout - 4; i <= pageCout; i++) {
      pages.push(i);
    }
    return pages;
  }

  pages.push(1);
  pages.push("dot");
  pages.push(page - 1);
  pages.push(page);
  pages.push(page + 1);
  pages.push("dot");
  pages.push(pageCout);
  console.log("middle", pages);
  return pages;
}

function Pages({ pages, page, pageCount, onClick }) {
  return (
    <div>
      {createPages(page, pageCount).map((item, index) => (
        <Page
          key={index}
          page={item}
          current={page === item}
          onClick={onClick}
        />
      ))}
    </div>
  );
}

function Page({ page, current, onClick }) {
  function getCurrentStyle(current) {
    return current ? styles.page + " " + styles.currentPage : styles.page;
  }
  return (
    <>
      {page.toString() === "dot" ? (
        <span>...</span>
      ) : (
        <span
          className={getCurrentStyle(current)}
          onClick={(e) => onClick(page)}
        >
          {page}
        </span>
      )}
    </>
  );
}
