import React from "react";

import { SearchContext } from "../../pages/Home";
import styles from "./Search.module.scss";
import clearIcon from "../../assets/img/clear.svg";

function Search() {
  console.log(SearchContext);
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  return (
    <div className={styles.root}>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder="Поиск пиццы ..."
      />
      {searchValue && (
        <img
          onClick={() => setSearchValue("")}
          className={styles.clearIcon}
          src={clearIcon}
          alt="clearIcon"
        />
      )}
    </div>
  );
}

export default Search;
