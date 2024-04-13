import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Sidebar from "@/components/Sidebar";
import { Menu } from "lucide-react";
export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent className="p-0 z-[100]" side="left">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
