import { HeartIcon } from "lucide-react";

function Footer() {
  return (
    <div className=" flex items-center justify-center text-muted-foreground">
      Desenvolvido por Mauro Daisuke
      <p>
        <HeartIcon className="ml-3" />
      </p>
    </div>
  );
}

export default Footer;
