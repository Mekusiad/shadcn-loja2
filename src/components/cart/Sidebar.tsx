import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Separator } from "@/components/ui/separator";

import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

import { useContext, useState } from "react";
import { CartContext } from "@/context/CartContext";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import Checkout from "../checkout/Checkout";

function Sidebar() {
  const { cartItems } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  let quantity = 0;

  const handleCheckout = () => {
    setOpen(true);
  };

  cartItems.map((item) => (quantity += item.quantity * item.product.price));

  return (
    <Sheet>
      <SheetTrigger>
        <Button className="relative">
          <ShoppingCart className="mr-3" />
          Carrinho
          {cartItems.length > 0 && (
            <div className="rounded-full bg-red-500 h-3 w-3 absolute -top-1 -right-1"></div>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="max-h-svh overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-2xl">Carrinho</SheetTitle>
        </SheetHeader>
        <Separator className="my-5" />
        {cartItems.length > 0 ? (
          <div className="flex flex-col gap-5">
            {cartItems.map(
              (item) =>
                item.quantity > 0 && (
                  <CartItem key={item.product.id} item={item} />
                )
            )}
          </div>
        ) : (
          <EmptyCart />
        )}
        <Separator className="my-5" />
        <div className="flex justify-between text-muted-foreground">
          <p>Subtotal:</p>
          <p>R${quantity.toFixed(2)}</p>
        </div>
        <Separator className="my-5" />
        <div className="text-center">
          <Button onClick={handleCheckout} disabled={cartItems.length === 0}>
            Finalizar Compra
          </Button>
          <Checkout open={open} onOpenChange={setOpen} />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Sidebar;
