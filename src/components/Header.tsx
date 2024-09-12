import Sidebar from "./cart/Sidebar";

function Header() {
  return (
    <header className="flex justify-between items-center p-5 gap-5">
      <h1 className="text-xl border border-stone-950 rounded-sm py-3 px-2">
        ~ Delivery do Daisuke ~
      </h1>

      <div className="flex flex-col"></div>
      <Sidebar />
    </header>
  );
}

export default Header;
