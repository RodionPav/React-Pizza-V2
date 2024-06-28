import React from "react";

import { SearchContext } from "../../pages/Home";
import styles from "./Search.module.scss";
import clearIcon from "../../assets/img/clear.svg";

function Search() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  const onClickClear = () => {
    setSearchValue("");
    inputRef.current.focus();
  };

  const inputRef = React.useRef();

  return (
    <div className={styles.root}>
      <input
        ref={inputRef}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder="Поиск пиццы ..."
      />
      {searchValue && (
        <img
          onClick={onClickClear}
          className={styles.clearIcon}
          src={clearIcon}
          alt="clearIcon"
        />
      )}
    </div>
  );
}

export default Search;
