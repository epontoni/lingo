import { redirect } from "next/navigation";
import FeedWrapper from "@/components/FeedWrapper";
import StickyWrapper from "@/components/StickyWrapper";
import Header from "./_components/Header";
import UserProgress from "@/components/UserProgress";
import { getUnits, getUserProgress } from "@/db/queries";

export default async function LearnPage() {
  const userProgressData = getUserProgress();
  const unitsData = getUnits()

  const [userProgress, units] = await Promise.all([userProgressData, unitsData]);

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
        {
          units.map(unit => (
            <div key={unit.id} className="">
              {JSON.stringify(unit)}
            </div>
          ))
        }
      </FeedWrapper>
    </div>
  );
}
