import FeedWrapper from "@/components/FeedWrapper";
import StickyWrapper from "@/components/StickyWrapper";
import Header from "./_components/Header";
import UserProgress from "@/components/UserProgress";

export default function LearnPage() {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: "Spanish", imageSrc: "/es.svg" }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Spanish" />
        <div className="space-y-4">
          <div className="h-[200px] bg-slate-200 w-full">asd</div>
          <div className="h-[200px] bg-slate-400 w-full">asd</div>
          <div className="h-[200px] bg-slate-200 w-full">asd</div>
          <div className="h-[200px] bg-slate-400 w-full">asd</div>
          <div className="h-[200px] bg-slate-200 w-full">asd</div>
          <div className="h-[200px] bg-slate-400 w-full">asd</div>
          <div className="h-[200px] bg-slate-200 w-full">asd</div>
          <div className="h-[200px] bg-slate-400 w-full">asd</div>
          <div className="h-[200px] bg-slate-200 w-full">asd</div>
          <div className="h-[200px] bg-slate-400 w-full">asd</div>
        </div>
      </FeedWrapper>
    </div>
  );
}
