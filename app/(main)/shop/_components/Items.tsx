"use client";

import { refillHeart } from "@/actions/user-progress";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTransition } from "react";
import { toast } from "sonner";

// TODO. Move along with the other constants into a common file
const POINTS_TO_REFILL = 10;

type Props = {
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export default function Items({
  hearts,
  points,
  hasActiveSubscription,
}: Props) {
  const [pending, starTransition] = useTransition();
  const onRefillHearts = () => {
    if (pending || hearts === 5 || points < POINTS_TO_REFILL) {
      return;
    }

    starTransition(() => {
      // Refill hearts
      refillHeart().catch(() => toast.error("Something went wrong"));
    });
  };

  return (
    <ul className="w-full">
      <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
        <Image src="/heart.svg" alt="Heart" width={60} height={60} />
        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl font-bold">
            Refill hearts
          </p>
        </div>
        <Button
          onClick={onRefillHearts}
          disabled={pending || hearts === 5 || points < POINTS_TO_REFILL}
        >
          {hearts === 5 ? (
            "full"
          ) : (
            <div className="flex items-center">
              <Image src="/points.svg" alt="Points" width={20} height={20} />
              <p className="text-neutral-700 text-base lg:text-xl font-bold">
                {POINTS_TO_REFILL}
              </p>
            </div>
          )}
        </Button>
      </div>
    </ul>
  );
}
