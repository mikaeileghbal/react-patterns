import React, { useState } from "react";
import "./style.css";

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

  return (
    <div className="pager-container">
      <PageStatus page={page} pageCount={pageCount} />
      <Pages page={page} pages={pages} />
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

function Pages({ pages, page }) {
  return (
    <div>
      {pages.map((item) => (
        <Page key={item} page={item} current={page === item} />
      ))}
    </div>
  );
}

function Page({ page, current }) {
  function getCurrentStyle(current) {
    return current ? "page current-page" : "page";
  }
  return <span className={getCurrentStyle(current)}>{page}</span>;
}
