import { CartContext } from "@/context/CartContext";
import { CheckoutContext } from "@/context/CheckoutContext";
import { useContext } from "react";

export const useGenerateMessage = () => {
  const { cartItems } = useContext(CartContext);
  const { name, address } = useContext(CheckoutContext);

  const orderProducts = [];

  for (const item of cartItems) {
    orderProducts.push(`${item.quantity} x ${item.product.name}`);

    return `
    
    ***Dados do cliente: ***
    ------------------------------------------
    Nome: ${name}
    Endereço ⬇️
     N: ${address.number}
     Rua: ${address.street}
     Complemento: ${address.complement} 
     Bairro: ${address.district}
     Cep: ${address.cep}
     Telefone para contato: ${address.number}
    ------------------------------------------

    *** Pedido ***
    ${orderProducts.join("\n")}
    ----------

    `;
  }
};
