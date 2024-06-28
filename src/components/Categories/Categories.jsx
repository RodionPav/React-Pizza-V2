import "./Categories.scss";

import { useSelector, useDispatch } from "react-redux";
import { setActiveCategory } from "../../redux/slices/filterSlice";

function Categories() {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const activeCategory = useSelector(
    (state) => state.filterSlice.activeCategory
  );
  const dispatch = useDispatch();
  const setCategoryId = (id) => {
    dispatch(setActiveCategory(id));
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            key={index}
            onClick={() => setCategoryId(index)}
            className={activeCategory == index ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
