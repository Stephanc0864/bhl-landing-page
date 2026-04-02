import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Residential from "@/pages/residential";

function App() {
  return (
    <TooltipProvider>
      <Residential />
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
