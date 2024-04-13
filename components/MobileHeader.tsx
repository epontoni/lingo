import MobileSidebar from "@/components/MobileSidebar";
export default function MobileHeader() {
  return (
    <nav className="lg:hidden px-6 bg-green-500 h-[50px] flex items-center border-b fixed top-0 left-0 w-full z-50">
      <MobileSidebar />
    </nav>
  );
}
