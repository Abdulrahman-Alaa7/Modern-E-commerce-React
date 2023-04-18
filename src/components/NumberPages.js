import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
const NumberPages = () => {
  return (
    <>
      <div className="info-pages d-flex justify-content-between align-items-center  ">
        <p className="mb-0 text-muted">
          Showing <span>12</span> of <span>20</span>.
        </p>
        <div className="numbers-pages d-flex justify-content-center algin-items-center gap-10">
          <Link>
            <span className="active text-dark">1</span>
          </Link>
          <Link>
            <span className="text-dark">2</span>
          </Link>
          <Link>
            <span>
              <FiChevronRight className="right text-dark" />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NumberPages;
