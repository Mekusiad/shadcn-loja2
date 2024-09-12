import Footer from "./components/Footer";
import Header from "./components/Header";
import TabsContent from "./components/product/TabsContent";

import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <div className="w-full max-w-screen-xl mx-auto ">
      <Header />
      <TabsContent />
      <Footer />

      <Toaster />
    </div>
  );
}

export default App;
