import { CartContext } from "@/context/CartContext";

import { useContext, useState } from "react";

function QuantityItem() {
  let quantity = 0;
  const { cartItems } = useContext(CartContext);

  const [value, setValue] = useState<number>(0);

  const values = cartItems.map(
    (item) => (quantity += item.quantity * item.product.price)
  );

  if (values.length > 0) {
    setValue(quantity);
  } else {
    setValue(quantity);
  }

  return <div>{value}</div>;
}

export default QuantityItem;
