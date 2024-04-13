type Props = {
  children: React.ReactNode;
};
export default function StickyWrapper({ children }: Props) {
  return (
    <div className="hidden lg:block w-[368px] sticky self-end bottom-6">
      <div className="min-h-[calc(100vh-48px)] sticky top-6 px-6">
        {children}
      </div>
    </div>
  );
}
