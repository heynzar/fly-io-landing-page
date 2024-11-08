import { ChevronRight } from "lucide-react";
import Image from "next/image";

import phoenix from "@/assets/phoenix.svg";
import remix from "@/assets/remix.svg";
import nextjs from "@/assets/nextjs.svg";
import rails from "@/assets/rails.svg";
import django from "@/assets/django.svg";
import docker from "@/assets/docker.svg";
import go from "@/assets/go.svg";
import rust from "@/assets/rust.svg";
import laravel from "@/assets/laravel.svg";

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

          <button className="btn-glass-primary rounded-full">
            <p className="font-medium">Learn More</p>
            <ChevronRight className="size-4 text-white/75" />
          </button>
        </div>
        <div className="mt-10 flex flex-wrap justify-center items-center gap-5 card">
          <button className="btn-glass ff rounded-2xl !px-4 !py-8 ">
            <Image
              src={phoenix}
              alt="phoenix Logo"
              className="brightness-0 invert h-7 w-min mx-auto"
            />
          </button>
          <button className="btn-glass ff rounded-2xl !px-4 !py-8 ">
            <Image
              src={remix}
              alt="remix Logo"
              className="brightness-0 invert h-7 w-min mx-auto"
            />
          </button>
          <button className="btn-glass ff rounded-2xl !px-4 !py-8 ">
            <Image
              src={rails}
              alt="rails Logo"
              className="brightness-0 invert h-7 w-min mx-auto"
            />
          </button>
          <button className="btn-glass ff rounded-2xl !px-4 !py-8 ">
            <Image
              src={docker}
              alt="docker Logo"
              className="brightness-0 invert h-7 w-min mx-auto"
            />
          </button>
          <button className="btn-glass ff rounded-2xl !px-4 !py-8 ">
            <Image
              src={go}
              alt="go Logo"
              className="brightness-0 invert h-7 w-min mx-auto"
            />
          </button>
          <button className="btn-glass ff rounded-2xl !px-4 !py-8 ">
            <Image
              src={rust}
              alt="rust Logo"
              className="brightness-0 invert h-7 w-min mx-auto"
            />
          </button>
          <button className="btn-glass ff rounded-2xl !px-4 !py-8 ">
            <Image
              src={django}
              alt="django Logo"
              className="brightness-0 invert h-7 w-min mx-auto"
            />
          </button>
          <button className="btn-glass ff rounded-2xl !px-4 !py-8 ">
            <Image
              src={laravel}
              alt="laravel Logo"
              className="brightness-0 invert h-7 w-min mx-auto"
            />
          </button>
          <button className="btn-glass ff rounded-2xl !px-4 !py-8 ">
            <Image
              src={nextjs}
              alt="nextjs Logo"
              className="brightness-0 invert h-7 w-min mx-auto"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Tech;
