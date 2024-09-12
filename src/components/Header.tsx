import Sidebar from "./cart/Sidebar";
import { ToogleTheme } from "./ToogleTheme";

function Header() {
  return (
    <header className="flex justify-between items-center p-5 gap-5 relative">
      <ToogleTheme />
      <h1 className="text-xl border border-stone-950 rounded-sm py-3 px-2 mr-auto">
        ~ Delivery do Daisuke ~
      </h1>

      <div className="flex flex-col"></div>
      <Sidebar />
    </header>
  );
}

export default Header;
