import Image from "next/image";
import flyglobe from "../assets/fly-globe.png";
import web from "../assets/web.svg";
import connection from "../assets/connection.svg";
import thunder from "../assets/thunder.svg";
import spot from "../assets/spot.svg";
import coolBird from "../assets/cool-bird.png";
import { ChevronRight } from "lucide-react";

function Features() {
  return (
    <section className="px-4 md:px-6 bg2 pt-24">
      <div className="flex flex-col justify-between gap-4 items-center mt-24 lg:flex-row lg:px-14  ">
        <div className="max-w-lg">
          <h2 className="mackinacPro text-2xl md:text-3xl">
            Public Cloud Infrastructure. Modern Platform Endorphins.
          </h2>
          <p className="opacity-75 md:text-lg">
            The most flexible and powerful compute platform on any public cloud.
            Fly Machines are hardware-virtualized containers, running on our own
            hardware, that launch instantly and run exactly as long as you want
            them to — for a single HTTP request, or for weeks of uptime.
          </p>
        </div>
        <div className="flex justify-center items-center overflow-hidden">
          <Image src={flyglobe} alt="fly.io Global" className="max-w-sm" />
        </div>
      </div>

      <div className="mt-24 flex flex-wrap justify-center items-center gap-16 max-w-screen-xl">
        <div className="flex gap-8 max-w-lg ">
          <div className="icon icon-green">
            <Image src={web} alt="web4site icon" className="size-6 " />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="mackinacPro text-[19px] tracking-tight">
              Get Right in Your Users’ Faces
            </h3>
            <p className="opacity-75 ">
              Deploy in 35 regions, from Sydney to São Paulo, for sub-100ms
              response times and native-app feel no matter where your users are.
            </p>
          </div>
        </div>
        <div className="flex gap-8 max-w-lg">
          <div className="icon icon-blue">
            <Image src={connection} alt="web4site icon" className="size-6" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="mackinacPro text-[19px] tracking-tight">
              Fork Off VMs Like They’re Processes
            </h3>
            <p className="opacity-75">
              Fly Machines start fast enough to handle HTTP requests, run only
              when you need them, and scale into tens of thousands of instances.
            </p>
          </div>
        </div>
        <div className="flex gap-8 max-w-lg">
          <div className="icon icon-orange">
            <Image src={thunder} alt="web4site icon" className="size-6" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="mackinacPro text-[19px] tracking-tight">
              Ship GPU-Boosted Models
            </h3>
            <p className="opacity-75">
              From LLMs to inferencing, hardware acceleration with the same
              developer experience as a simple CRUD app.
            </p>
          </div>
        </div>
        <div className="flex gap-8 max-w-lg">
          <div className="icon icon-yellow">
            <Image src={spot} alt="web4site icon" className="size-6" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="mackinacPro text-[19px] tracking-tight">
              Built for Distributed Systems
            </h3>
            <p className="opacity-75">
              Clustered databases like Cockroach, globally-distributed Postgres,
              and modern RPC systems like Elixir FLAME, no Terraform required.
            </p>
          </div>
        </div>
      </div>

      <div className="cool-bird flex flex-col justify-center items-center mt-24 lg:flex-row-reverse lg:px-14">
        <div className="w-[80%] mx-auto ">
          <Image
            src={coolBird}
            alt="cool bird illustraion"
            className="w-full mx-auto lg:mt-6"
          />
        </div>

        <div className="my-8 flex flex-col gap-4 lg:my-16">
          <h3 className="mackinacPro text-2xl lg:text-3xl ">
            Support By Developers For Developers
          </h3>
          <p className="text-lg opacity-75">
            Paid support packages include a team of actual engineers (not
            chatbots) who themselves ship code on our platform. Emergency
            support and guaranteed response times available.
          </p>
          <button className="btn-purple rounded-full justify-center md:max-w-min">
            <p className="text-nowrap">Learn More</p>
            <ChevronRight className="size-4 text-white/75" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Features;
