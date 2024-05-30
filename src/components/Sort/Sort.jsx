import React from "react";
import "./Sort.scss";

function Sort({ activeSort, setActiveSort }) {
  const sorts = [
    { name: "популярности (desc)", sortProperty: "rating" },
    { name: "популярности(asc)", sortProperty: "-rating" },
    { name: "цене(desc)", sortProperty: "price" },
    { name: "цене (asc)", sortProperty: "-price" },
    { name: "алфавиту(desc)", sortProperty: "title" },
    { name: "алфавиту(asc)", sortProperty: "-title" },
  ];

  const [open, setOpen] = React.useState(false);

  let onClickSort = (obj) => {
    setActiveSort(obj);
    setOpen(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        {open == false ? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 14.5L12 9.5L17 14.5"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" fill="white" />
            <path
              d="M17 9.5L12 14.5L7 9.5"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}

        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{activeSort.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sorts.map((obj, id) => (
              <li
                key={id}
                onClick={() => onClickSort(obj)}
                className={
                  obj.sortProperty == activeSort.sortProperty ? "active" : ""
                }
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
