import React, { useState,useEffect } from "react";

import "./pagination.css";

function Pagination(props) {
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages]= useState(0)
console.log(totalPages);
  const fetchProducts = async () => {
    const data = props.total
    console.log(`tatal:${data}`);

    if (data ) {
      setTotalPages(Math.ceil(props.total/3))
      props.setTotal(Math.ceil(props.total/3))
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [page])

  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= totalPages && selectedPage !== page) {
      setPage(selectedPage)
      props.setPage(selectedPage)
    }
  }

  return (
    <div>
      {totalPages > 0 && <div className="pagination">
        <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>

        {[...Array(totalPages)].map((_, i) => {
          return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
        })}

        <span onClick={() => selectPageHandler(page + 1)} className={page < totalPages ? "" : "pagination__disable"}>▶</span>
      </div>
      }
    </div>
  );
}

export default Pagination;