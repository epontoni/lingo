import { userSubscription } from "@/db/schema";
import { cn } from "@/lib/utils";
import { InfinityIcon } from "lucide-react";
import Image from "next/image";

type Props = {
  value: number;
  variant: "points" | "hearts";
  userSubscription?:
    | (typeof userSubscription.$inferSelect & {
        isActive: boolean;
      })
    | null;
};
export default function ResultCard({
  value,
  variant,
  userSubscription,
}: Props) {
  const imageSrc = variant === "points" ? "/points.svg" : "/heart.svg";
  return (
    <div
      className={cn(
        "rounded-2xl border-2 w-full",
        variant === "points" && "bg-orange-400 border-orange-400",
        variant === "hearts" && "bg-rose-500 border-rose-500"
      )}
    >
      <div
        className={cn(
          "p-1.5 text-white rounded-t-xl font-bold text-center uppercase",
          variant === "points" && "bg-orange-400",
          variant === "hearts" && "bg-rose-500"
        )}
      >
        {variant === "hearts" ? "Hearts left" : "Total XP"}
      </div>
      <div
        className={cn(
          "rounded-2xl bg-white items-center flex justify-center p-6 font-bold text-lg",
          variant === "points" && "text-orange-400",
          variant === "hearts" && "text-rose-500"
        )}
      >
        <Image
          alt="Icon"
          src={imageSrc}
          height={30}
          width={30}
          className="mr-1.5"
        />
        {!!userSubscription == false ? (
          value
        ) : (
          <InfinityIcon className="h-6 w-6 stroke-[3] shrink-0" />
        )}
      </div>
    </div>
  );
}
