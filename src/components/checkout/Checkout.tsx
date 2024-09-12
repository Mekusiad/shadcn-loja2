import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

import { Progress } from "@/components/ui/progress";
import StepUser from "./StepUser";
import { useState } from "react";
import StepAddress from "./StepAddress";
import StepFinish from "./StepFinish";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

function Checkout({ open, onOpenChange }: Props) {
  const [step, setStep] = useState<"user" | "address" | "finish">("user");
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {step === "user" && "Dados pessoais"}
            {step === "address" && "Dados de endereço"}
            {step === "finish" && "Enviar para WhatsApp"}
          </DialogTitle>
        </DialogHeader>
        <Progress
          value={step === "user" ? 33 : step === "address" ? 70 : 100}
        />

        {step === "user" && <StepUser setStep={setStep} />}
        {step === "address" && <StepAddress setStep={setStep} />}
        {step === "finish" && <StepFinish />}
      </DialogContent>
    </Dialog>
  );
}

export default Checkout;
