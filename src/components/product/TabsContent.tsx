import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/database/data";
import { Product } from "@/types/product";
import ProductItem from "./ProductItem";

type Tab = {
  title: string;
  value: string;
  products: Product[];
};
function TablsContent() {
  const tabs: Tab[] = [
    {
      title: "Sanduíches",
      value: "sanduiche",
      products: products.filter((item) => item.category === "sanduiche"),
    },
    {
      title: "Kikões",
      value: "kikao",
      products: products.filter((item) => item.category === "kikao"),
    },
    {
      title: "Sushi",
      value: "sushi",
      products: products.filter((item) => item.category === "sushi"),
    },
    {
      title: "Combos/Sushi",
      value: "combo",
      products: products.filter((item) => item.category === "combo"),
    },
    {
      title: "Bebidas",
      value: "bebida",
      products: products.filter((item) => item.category === "bebida"),
    },
  ];
  return (
    <Tabs defaultValue={`${tabs[0].value}`} className="flex flex-col p-5 ">
      <TabsList className="flex-1">
        {tabs.map((item) => (
          <TabsTrigger key={item.value} value={item.value} className="flex-1">
            {item.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((item) => (
        <TabsContent key={item.value} value={item.value} className="flex-1">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 xl:grid-cols-5">
            {item.products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}

export default TablsContent;
