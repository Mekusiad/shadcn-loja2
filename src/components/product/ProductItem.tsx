import { Product } from "@/types/product";
import { Button } from "../ui/button";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

type Props = {
  product: Product;
};

function ProductItem({ product }: Props) {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <div className="rounded-md overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-44 object-cover"
        />
        <div className="mt-3 flex flex-col gap-2">
          <p>{product.name}</p>
          <p className="text-muted-foreground">R${product.price.toFixed(2)}</p>
          <Button variant="outline" onClick={() => addToCart(product)}>
            Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
