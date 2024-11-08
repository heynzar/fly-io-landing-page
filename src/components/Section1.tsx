import Image from "next/image";
import web from "../assets/web.svg";
import connection from "../assets/connection.svg";
import thunder from "../assets/thunder.svg";
import spot from "../assets/spot.svg";
import Card from "./Card";

import flyglobe from "../assets/fly-globe.png";
import coolBird from "../assets/cool-bird.png";
import Enterprise from "./Enterprise";

const card1 = {
  title: "Public Cloud Infrastructure. Modern Platform Endorphins.",
  desc: "The most flexible and powerful compute platform on any public cloud. Fly Machines are hardware-virtualized containers, running on our own hardware, that launch instantly and run exactly as long as you want them to — for a single HTTP request, or for weeks of uptime.",
  img: flyglobe,
  alt: "Public Cloud Infrastructure illustration",
  w: 348,
  h: 350,
  reverse: false,
  btn: "",
};

const card2 = {
  title: "Support By Developers For Developers",
  desc: "Paid support packages include a team of actual engineers (not chatbots) who themselves ship code on our platform. Emergency support and guaranteed response times available.",
  img: coolBird,
  alt: "Cool Bird illustration",
  w: 436,
  h: 323,
  reverse: false,
  btn: "Learn More",
};

function Section1() {
  return (
    <section className="bg2 py-32 flex flex-col justify-center items-center gap-32 px-4 md:px-6">
      <Card
        reverse={card1.reverse}
        title={card1.title}
        desc={card1.desc}
        img={card1.img}
        alt={card1.alt}
        w={card1.w}
        h={card1.h}
        btn={card1.btn}
      />
      <div className="flex flex-wrap -mt-12 justify-center items-center gap-16 max-w-[1136px]">
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

      <div className="cool-bird-bg p-10">
        <Card
          reverse={card2.reverse}
          title={card2.title}
          desc={card2.desc}
          img={card2.img}
          alt={card2.alt}
          w={card2.w}
          h={card2.h}
          btn={card2.btn}
        />
      </div>
      <Enterprise />
    </section>
  );
}

export default Section1;
