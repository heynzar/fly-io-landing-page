import betterTogether from "../assets/better-together.png";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

function Tech() {
  return (
    <section className="purple-bg">
      <div className="px-4 flex justify-center items-center lg:gap-16 xl:gap-20 rounded-x flex-col lg:flex-row max-w-[1136px] mx-auto">
        <div className="lg:max-w-lg space-y-4 card xl:max-w-xl">
          <h2 className="h2 text-white">Use the Tech You Love</h2>
          <p className="text-lg text-white/75">
            Build with your favorite framework. No Dockerfile? No problem: our
            CLI generates containers for most popular frameworks, including
            Rails, Phoenix, Django, Node, Laravel, and .NET.
          </p>

          <button className="btn-glass rounded-full">
            <p className="font-semibold">Learn More</p>
            <ChevronRight className="size-4 text-white/75" />
          </button>
        </div>
        <div className="mt-5 flex flex-wrap justify-center items-center gap-4 card">
          <button className="btn-glass ff rounded-2xl !px-4 !py-8 ">
            <p className="font-semibold">Laravel</p>
          </button>
          <button className="btn-glass ff rounded-2xl !px-4 !py-8 ">
            <p className="font-semibold">Laravel</p>
          </button>
          <button className="btn-glass ff rounded-2xl !px-4 !py-8 ">
            <p className="font-semibold">Laravel</p>
          </button>
          <button className="btn-glass ff rounded-2xl !px-4 !py-8 ">
            <p className="font-semibold">Laravel</p>
          </button>
          <button className="btn-glass ff rounded-2xl !px-4 !py-8 ">
            <p className="font-semibold">Laravel</p>
          </button>
          <button className="btn-glass ff rounded-2xl !px-4 !py-8 ">
            <p className="font-semibold">Laravel</p>
          </button>
          <button className="btn-glass ff rounded-2xl !px-4 !py-8 ">
            <p className="font-semibold">Laravel</p>
          </button>
          <button className="btn-glass ff rounded-2xl !px-4 !py-8 ">
            <p className="font-semibold">Laravel</p>
          </button>
          <button className="btn-glass ff rounded-2xl !px-4 !py-8 ">
            <p className="font-semibold">Laravel</p>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Tech;
