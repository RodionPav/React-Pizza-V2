import { Link } from "react-router-dom";
// import styles from "./EmptyCart.module.scss";

function EmptyCart() {
  return (
    <div className="content">
      <div className="container container--cart">
        <div className="cart cart--empty">
          <h2>Корзина пустая 😕</h2>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу.
            <br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img src="/img/empty-cart.png" alt="Empty cart" />
          <Link to={"/"}>
            <div className="button button--black">
              <span>Вернуться назад</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
