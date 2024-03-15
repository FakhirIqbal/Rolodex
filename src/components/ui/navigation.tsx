import React from "react";
import Link from "next/link";
const Navigation = ({
  homeLink,
  title2,
  title3,
  title2Link,
  title3Link,
  classNamet2,
}: any) => {
  return (
    <nav className="flex my-6" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 flex-wrap md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link
            href={homeLink ?? "/"}
            className="inline-flex items-center text-sm   hover:text-primary font-semibold text-gray-500 font-noto"
          >
            <svg
              className="w-3 h-3 me-2.5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            {"Home"}
          </Link>
        </li>
        {title2 && (
          <li>
            <div className={`flex items-center  ${classNamet2}`}>
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link
                href={title2Link || "#"}
                className="ms-1 text-sm    md:ms-2  text-primary font-semibold font-noto"
              >
                {title2}
              </Link>
            </div>
          </li>
        )}
        {title3 && (
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link
                href={title3Link || "#"}
                className="ms-1 text-sm  hover:text-primary md:ms-2 font-semibold text-gray-500 font-noto"
              >
                {title3}
              </Link>
            </div>
          </li>
        )}
      </ol>
    </nav>
  );
};

export default Navigation;
