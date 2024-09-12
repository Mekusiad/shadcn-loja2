import { Button } from "../ui/button";
import { useGenerateMessage } from "@/lib/generateMessage";

function StepFinish() {
  const message = useGenerateMessage();

  const linkZap = `https://wa.me//${
    import.meta.env.VITE_ZAP
  }?text=${encodeURIComponent(message)}`;

  return (
    <div className="text-center">
      <h3 className="border rounded-md px-3 py-2 my-5">
        Agora que coletamos todos os dados necessário, uma mensagem será enviada
        para nosso WhatsApp para confirmação.
      </h3>
      <Button className="w-full">
        <a target="_blank" href={linkZap}>
          Enviar para WhatsApp
        </a>
      </Button>
    </div>
  );
}

export default StepFinish;
