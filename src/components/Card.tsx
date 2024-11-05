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
}: {
  title: string;
  desc: string;
  img: StaticImageData;
  alt: string;
  w: number;
  h: number;
  reverse: boolean;
}) {
  return (
    <div
      className={twMerge(
        "px-4 flex justify-center items-center  lg:gap-16 xl:gap-20 rounded-xl ",
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
        <h2 className="mackinacPro mb-4 font-heading text-2xl md:text-3xl lg:text-4xl tracking-tight">
          {title}
        </h2>
        <p className="text-lg text-[#281950]">{desc}</p>
      </div>
      <div>
        <Image
          width={w}
          height={h}
          alt={alt}
          src={img}
          className="w-full max-w-sm -mb-12 mx-auto relative lg:-mt-4"
        />
      </div>
    </div>
  );
}

export default Card;
