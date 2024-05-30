import EmptyCart from "../components/EmptyCart/EmptyCart";
import Header from "../components/Header/Header";
import CartFull from "../components/CartFull/CartFull";

function Cart() {
  const f = false;
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          {f == true ? <EmptyCart /> : <CartFull />}
        </div>
      </div>
    </div>
  );
}

export default Cart;
