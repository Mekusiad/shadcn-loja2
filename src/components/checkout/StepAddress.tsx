import { Dispatch, SetStateAction, useContext } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { z } from "zod";
import { CheckoutContext } from "@/context/CheckoutContext";

const formSchema = z.object({
  district: z.string().min(2, "Preencha o campo"),
  street: z.string().min(2, "Preencha o campo"),
  number: z.string().min(2, "Preencha o campo"),
  complement: z.string().optional(),
  phone: z.string().min(10).max(15),
  cep: z.string().min(8).max(10),
});

type Props = {
  setStep: Dispatch<SetStateAction<"user" | "address" | "finish">>;
};

function StepAddress({ setStep }: Props) {
  const { address, setAddress } = useContext(CheckoutContext);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { ...address },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setAddress(values);
    setStep("finish");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-5"
      >
        <FormField
          control={form.control}
          name="district"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bairro</FormLabel>
              <FormControl>
                <Input autoFocus placeholder="..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="street"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rua</FormLabel>
              <FormControl>
                <Input placeholder="..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número</FormLabel>
              <FormControl>
                <Input placeholder="..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="complement"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Complemento</FormLabel>
              <FormControl>
                <Input placeholder="..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone com DDD</FormLabel>
              <FormControl>
                <Input placeholder="(99) 99999-9999" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cep"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Informe seu CEP</FormLabel>
              <FormControl>
                <Input placeholder="69000-000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="col-span-2 flex gap-5 ">
          <Button
            type="submit"
            variant={"outline"}
            onClick={() => setStep("user")}
          >
            Voltar
          </Button>
          <Button type="submit" variant={"outline"}>
            Próximo
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default StepAddress;
