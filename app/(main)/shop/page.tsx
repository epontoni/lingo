import FeedWrapper from "@/components/FeedWrapper";
import StickyWrapper from "@/components/StickyWrapper";
import UserProgress from "@/components/UserProgress";
import { getUserProgress } from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";
import Items from "./_components/Items";

export default async function ShopPage() {
  const userProgressData = await getUserProgress();

  const [] = await Promise.all([userProgressData]);

  if (!userProgressData || !userProgressData.activeCourse) {
    return redirect("/courses");
  }
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgressData.activeCourse}
          hearts={userProgressData.hearts}
          points={userProgressData.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image src="/shop.svg" alt="Shop" width={90} height={90} />
          <h1 className="text-center text-neutral-800 my-6 text-2xl font-bold">
            Shop
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-6">
            Spend your points on cool stuff.
          </p>
          <Items
            hearts={userProgressData.hearts}
            points={userProgressData.points}
            hasActiveSubscription={false} // Add subscription check
          />
        </div>
      </FeedWrapper>
    </div>
  );
}
