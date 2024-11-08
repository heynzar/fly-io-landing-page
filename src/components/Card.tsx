import { ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

function Card({
  title,
  desc,
  img,
  alt,
  w,
  h,
  reverse,
  btn,
}: {
  title: string;
  desc: string;
  img: StaticImageData;
  alt: string;
  w: number;
  h: number;
  reverse: boolean;
  btn: string;
}) {
  return (
    <div
      className={twMerge(
        "px-4 flex justify-center items-center lg:gap-16 xl:gap-20 rounded-x",
        reverse
          ? "flex-col-reverse lg:flex-row-reverse"
          : "flex-col lg:flex-row"
      )}
    >
      <div
        className={twMerge(
          "lg:max-w-lg space-y-4 card xl:max-w-xl",
          reverse ? "mt-20" : ""
        )}
      >
        <h2 className="h2">{title}</h2>
        <p className="text-lg text-primary/75">{desc}</p>

        {btn && (
          <button className="btn-purple rounded-full">
            <p className="font-medium">{btn}</p>
            <ChevronRight className="size-4 text-white/75" />
          </button>
        )}
      </div>
      <div>
        <Image
          width={w}
          height={h}
          alt={alt}
          src={img}
          className="w-full max-w-sm  mt-5 -mb-12 mx-auto relative lg:-mt-4"
        />
      </div>
    </div>
  );
}

export default Card;
