import { Button } from "../ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Cart } from "@/types/cart";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

type Props = {
  item: Cart;
};

function CartItem({ item }: Props) {
  const { addToCart, removeToCart } = useContext(CartContext);
  return (
    <div className="flex items-center justify-between gap-3">
      <img src={item.product.image} alt="" className="w-20 object-cover mr-2" />
      <div className="mr-auto">
        <p>{item.product.name}</p>
        <p className="text-xs text-muted-foreground">
          R${item.product.price.toFixed(2)}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Button
          className="size-6"
          size={"icon"}
          variant={"outline"}
          onClick={() => removeToCart(item.product)}
        >
          <MinusIcon className="size-3" />
        </Button>
        <p>{item.quantity}</p>
        <Button
          className="size-6"
          size={"icon"}
          variant={"outline"}
          onClick={() => addToCart(item.product)}
        >
          <PlusIcon className="size-3" />
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
