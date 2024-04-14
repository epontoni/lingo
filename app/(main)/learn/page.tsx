import { redirect } from "next/navigation";
import FeedWrapper from "@/components/FeedWrapper";
import StickyWrapper from "@/components/StickyWrapper";
import Header from "./_components/Header";
import UserProgress from "@/components/UserProgress";
import { getUserProgress } from "@/db/queries";

export default async function LearnPage() {
  const userProgressData = getUserProgress();

  const [userProgress] = await Promise.all([userProgressData]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
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
