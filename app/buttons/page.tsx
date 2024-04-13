import { Button } from "@/components/ui/button";

export default function ButtonsPage() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center py-8 gap-1">
      <Button variant="default">Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="primaryOutline">Primary Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="secondaryOutline">Secondary Outline</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="dangerOutline">Danger Outline</Button>
      <Button variant="super">Super</Button>
      <Button variant="superOutline">Super Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="sidebar">Sidebar</Button>
      <Button variant="sidebarOutline">Sidebar Outline</Button>
    </div>
  );
}
