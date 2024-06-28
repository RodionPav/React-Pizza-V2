/* eslint-disable no-undef */
import React from "react";

import { useSelector } from "react-redux";

import Sort from "../components/Sort/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Categories from "../components/Categories/Categories";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Header from "../components/Header/Header";
import axios from "axios";

export const SearchContext = React.createContext();

function Home() {
  const { activeSort, activeCategory } = useSelector(
    (state) => state.filterSlice
  );

  const [searchValue, setSearchValue] = React.useState("");

  // const [activeSort, setActiveSort] = React.useState({
  //   name: "популярности",
  //   sortProperty: "rating",
  // });

  const [items, setItems] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://6644c89fb8925626f88fedbe.mockapi.io/items?${
          activeCategory > 0 ? `category=${activeCategory}` : ""
        }&sortBy=${activeSort.sortProperty.replace("-", "")}&order=${
          activeSort.sortProperty.includes("-") ? "asc" : "desc"
        }`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeSort, activeCategory, searchValue]);

  const pizzas = items
    .filter((pizzas) =>
      pizzas.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    ) // фильтрация items(пицц) по searchValue в Search , c переводом в LowerCase
    .map((obj) => <PizzaBlock {...obj} key={obj.id} />);
  // map отфильтрованных items(пицц)

  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {isLoading == false ? pizzas : skeletons}
            </div>
          </div>
        </div>
      </SearchContext.Provider>
    </>
  );
}

export default Home;
