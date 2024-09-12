import { createContext, useState } from "react";
import { Cart } from "@/types/cart";
import { Product } from "@/types/product";
import { toast } from "@/hooks/use-toast";

type CartProviderProps = {
  children: React.ReactNode;
};

type TypeCartContext = {
  cartItems: Array<Cart>;
  setCartItems: (newCart: Cart[]) => void;
  addToCart: (product: Product) => void;
  removeToCart: (product: Product) => void;
};

const initialValue = {
  cartItems: [],
  setCartItems: () => {},
  addToCart: () => {},
  removeToCart: () => {},
};

export const CartContext = createContext<TypeCartContext>(initialValue);

const CartContextProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<Cart[]>(initialValue.cartItems);

  const addToCart = (product: Product) => {
    const indexProduct = cartItems?.findIndex(
      (cart) => cart.product.id === product.id
    );
    console.log(indexProduct);
    if (indexProduct < 0) {
      const newCart = {
        product,
        quantity: 1,
      };
      setCartItems([...cartItems, newCart]);

      toast({
        title: `${newCart.product.name} adicionado com sucesso!`,
        description: `Quantidade de items no momento: ${newCart.quantity}`,
      });
    } else {
      const indexProduct = cartItems?.findIndex(
        (cart) => cart.product.id === product.id
      );
      console.log(indexProduct);
      cartItems[indexProduct].quantity += 1;
      setCartItems([...cartItems]);
      toast({
        title: `Foi adicionado mais um ${cartItems[indexProduct].product.name} no carrinho.`,
        description: `Quantidade de items no momento: ${cartItems[indexProduct].quantity}`,
      });
    }
  };

  const removeToCart = (product: Product) => {
    const indexProduct = cartItems?.findIndex(
      (cart) => cart.product.id === product.id
    );
    cartItems[indexProduct].quantity -= 1;

    if (cartItems[indexProduct].quantity === 0) {
      const newCart = cartItems.filter((cart) => cart.quantity > 0);
      setCartItems(newCart);
      toast({
        title: `Foi removido todos os ${cartItems[indexProduct].product.name} do carrinho.`,
        description: `Quantidade de items no momento: ${cartItems[indexProduct].quantity}`,
      });
    } else {
      setCartItems([...cartItems]);
      toast({
        title: `Foi removido um ${cartItems[indexProduct].product.name} do carrinho.`,
        description: `Quantidade de items no momento: ${cartItems[indexProduct].quantity}`,
      });
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
