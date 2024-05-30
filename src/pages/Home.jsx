import React from "react";

import Sort from "../components/Sort/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Categories from "../components/Categories/Categories";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Header from "../components/Header/Header";

export const SearchContext = React.createContext();

function Home() {
  
  const [searchValue, setSearchValue] = React.useState("");

  const [activeCategory, setActiveCategory] = React.useState(0);

  const [activeSort, setActiveSort] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });

  const [items, setItems] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  // React.useEffect(() => {
  //   setIsLoading(true);
  //   const url = new URL(
  //     `https://6644c89fb8925626f88fedbe.mockapi.io/items?${
  //       activeCategory > 0 ? `category =${activeCategory}` : ""
  //     }&sortBy=${activeSort.sortProperty}&order=desc`
  //   );
  //   // url.searchParams.append("category", [activeCategory]);
  //   // url.searchParams.append("price", "0");
  //   // url.searchParams.append("order", "asc");
  //   // console.log(url.href);

  //   fetch(url, {
  //     method: "GET",
  //     headers: { "content-type": "application/json" },
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //       // handle error
  //     })
  //     .then((arr) => {
  //       setPizzas(arr);
  //       setIsLoading(false);
  //       // list of tasks sorted by title in descending order
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   window.scrollTo(0, 0);
  // }, [activeCategory, activeSort]);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://6644c89fb8925626f88fedbe.mockapi.io/items?${
        activeCategory > 0 ? `category=${activeCategory}` : ""
      }&sortBy=${activeSort.sortProperty.replace("-", "")}&order=${
        activeSort.sortProperty.includes("-") ? "asc" : "desc"
      }`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeSort, activeCategory, searchValue]);

  const pizzas = items
    .filter((pizzas) =>
      pizzas.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    ) // фильтрация items(пицц) по searchValue в Search , c переводом в LowerCase
    .map((obj) => <PizzaBlock {...obj} key={obj.id} />);

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
              <Categories
                activeCategory={activeCategory}
                setActiveCategory={(i) => setActiveCategory(i)}
              />
              <Sort
                activeSort={activeSort}
                setActiveSort={(obj) => setActiveSort(obj)}
              />
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
