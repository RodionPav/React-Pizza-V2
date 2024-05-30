import { Link } from "react-router-dom";

import NotFoundBlock from "../components/NotFoundBlock/NotFoundBlock";

const NotFound = () => {
  return (
    <>
      <Link to="/">
        <NotFoundBlock />
      </Link>
    </>
  );
};

export default NotFound;
