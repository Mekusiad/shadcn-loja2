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
  name: z.string().min(2, "Preencha o campo"),
});

type Props = {
  setStep: Dispatch<SetStateAction<"user" | "address" | "finish">>;
};

function StepUser({ setStep }: Props) {
  const { name, setName } = useContext(CheckoutContext);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setName(values.name);
    setStep("address");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Seu nome</FormLabel>
              <FormControl>
                <Input autoFocus placeholder="Qual seu nome?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant={"outline"}>
          Próximo
        </Button>
      </form>
    </Form>
  );
}

export default StepUser;
