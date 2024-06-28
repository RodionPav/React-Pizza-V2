import React from "react";

import { debounce } from "lodash";
import { SearchContext } from "../../pages/Home";
import styles from "./Search.module.scss";
import clearIcon from "../../assets/img/clear.svg";

function Search() {
  const [value, setValue] = React.useState("");
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  const onClickClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      console.log(str);
      setSearchValue(str);
    }, 500),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const inputRef = React.useRef();

  return (
    <div className={styles.root}>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
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
