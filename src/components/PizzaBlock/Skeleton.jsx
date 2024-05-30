import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={470}
    viewBox="0 0 280 470"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="96" cy="72" r="4" />
    <rect x="0" y="313" rx="0" ry="0" width="270" height="88" />
    <circle cx="130" cy="130" r="130" />
    <rect x="-1" y="271" rx="10" ry="10" width="280" height="27" />
    <rect x="0" y="421" rx="5" ry="5" width="89" height="27" />
    <rect x="126" y="413" rx="25" ry="25" width="150" height="45" />
  </ContentLoader>
);

export default Skeleton;
