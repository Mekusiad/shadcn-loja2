import Footer from "./components/Footer";
import Header from "./components/Header";
import TabsContent from "./components/product/TabsContent";
import { ToogleTheme } from "./components/ToogleTheme";

import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <Header />
      <TabsContent />
      <Footer />
      <div className="fixed bottom-1 right-1">
        <ToogleTheme />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
