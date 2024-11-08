import { ChevronRight } from "lucide-react";
import Image from "next/image";
import hero from "@/assets/hero1.png";
import Header from "./Header";

function Hero() {
  return (
    <div className="bg">
      <Header />
      <section className="mt-10 md:mt-16 lg:mt-28">
        <div className="px-4 tracking-tight md:text-center">
          <h1 className="mackinacPro  text-3xl md:text-5xl lg:text-6xl md:max-w-[720px] md:mx-auto leading-snug ">
            A Public Cloud Built For Developers Who Ship
          </h1>
          <p className="mt-4 text-base lg:text-lg md:w-[510px] md:mx-auto lg:min-w-[672px]">
            <span className="font-semibold"> Over 3 million apps</span>
            <span className="text-[#281950]/75 ml-2">
              have launched on Fly.io, leveraging global Anycast load-balancing,
              zero-config private networking, hardware isolation, and instant
              WireGuard VPN connections, with push-button deployments scaling to
              thousands of instances.
            </span>
          </p>

          <button className="btn-purple mt-9 md:mx-auto rounded-full">
            <p className="font-medium">Deploy Your App in 5 minutes</p>
            <ChevronRight className="size-4 text-white/75" />
          </button>
        </div>
        <div className="mt-10 overflow-hidden">
          <Image
            src={hero}
            alt="Fly.io Hero Image"
            className="min-w-[1000px] mx-auto"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
