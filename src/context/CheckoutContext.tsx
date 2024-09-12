import { createContext, useState } from "react";

type CheckoutProviderProps = {
  children: React.ReactNode;
};

type IAdress = {
  district: string;
  street: string;
  number: string;
  complement?: string | undefined;
  phone: string;
  cep: string;
};

type TypeCheckout = {
  name: string;
  setName: (name: string) => void;
  address: {
    district: string;
    street: string;
    number: string;
    complement?: string | undefined;
    phone: string;
    cep: string;
  };
  setAddress: (address: IAdress) => void;
};

const initialAddress = {
  district: "",
  street: "",
  number: "",
  complement: "",
  phone: "",
  cep: "",
};

const initialValue = {
  name: "",
  setName: () => {},
  address: {
    district: "",
    street: "",
    number: "",
    complement: "",
    phone: "",
    cep: "",
  },
  setAddress: () => {},
};

export const CheckoutContext = createContext<TypeCheckout>(initialValue);

const CheckoutContextProvider = ({ children }: CheckoutProviderProps) => {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<IAdress>(initialAddress);

  console.log(address);

  return (
    <CheckoutContext.Provider
      value={{
        name,
        setName,
        address,
        setAddress,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutContextProvider;
