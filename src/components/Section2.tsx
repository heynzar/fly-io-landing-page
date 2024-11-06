import Tech from "@/components/Tech";
import Card from "@/components/Card";

import web from "../assets/web.svg";
import connection from "../assets/connection.svg";
import thunder from "../assets/thunder.svg";

import betterTogether from "../assets/better-together.png";
import jsLove from "../assets/js-love.png";
import Image from "next/image";

const card2 = {
  title: "Serverful JavaScript Without the Hassle of Serverless",
  desc: "Imagine if a server could boot as fast as a serverless function? That's Fly Machines—serverless compute is a trade-off you no longer need to make. Graduate to a full-stack cloud to regain control over your stack & hosting bill.",
  img: jsLove,
  alt: "JavaScript illustration",
  w: 448,
  h: 277,
  reverse: true,
  btn: "",
};

const card3 = {
  title: "Developer-Focused Public Cloud",
  desc: "Help us build the next public cloud. No, seriously. Is your product something devs can take advantage of to ship better apps? Work with us.",
  img: betterTogether,
  alt: "Better Together illustration",
  w: 512,
  h: 430,
  reverse: false,
  btn: "Build A Cloud For Developers",
};

function Section2() {
  return (
    <section className="py-32 bg-red-100">
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

      <div className="mt-6 mb-32 flex flex-wrap justify-center items-center gap-16 max-w-screen-xl">
        <div className="flex flex-col gap-8 max-w-lg lg:max-w-72 ">
          <div className="icon icon-green">
            <Image src={web} alt="web4site icon" className="size-6 " />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="mackinacPro text-[19px] tracking-tight">
              Boots in 250ms or Less
            </h3>
            <p className="opacity-75 ">
              Functions and apps boot and respond to web requests in 250ms or
              less with Fly Machines. You decide to keep them running or
              automatically put them to sleep.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 max-w-lg lg:max-w-72">
          <div className="icon icon-blue">
            <Image src={connection} alt="web4site icon" className="size-6" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="mackinacPro text-[19px] tracking-tight">
              Built for JavaScript Developers
            </h3>
            <p className="opacity-75">
              JavaScript, TypeScript, Bun, Deno—whatever your flavor, Fly Launch
              automatically detects your runtime and generates a VM with
              everything you need to run your app.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 max-w-lg lg:max-w-72">
          <div className="icon icon-orange">
            <Image src={thunder} alt="web4site icon" className="size-6" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="mackinacPro text-[19px] tracking-tight">
              Real GPUs & CPUs on the Edge
            </h3>
            <p className="opacity-75">
              Run workloads that require GPUs or lots of CPUs, memory, and
              storage in over 30 regions around the world—all interconnected by
              a private, encrypted WireGuard network that works out of the box.
            </p>
          </div>
        </div>
      </div>

      <Tech />
      <section className="mt-32">
        <Card
          reverse={card3.reverse}
          title={card3.title}
          desc={card3.desc}
          img={card3.img}
          alt={card3.alt}
          w={card3.w}
          h={card3.h}
          btn={card3.btn}
        />
      </section>
    </section>
  );
}

export default Section2;
