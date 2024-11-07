import { Check, ChevronRight } from "lucide-react";

function Enterprise() {
  return (
    <section className="px-4 flex justify-center items-center lg:gap-16 xl:gap-20 rounded-x flex-col lg:flex-row-reverse">
      <div className="lg:max-w-lg space-y-4 card xl:max-w-xl">
        <h2 className="h2">Enterprise Ready</h2>
        <p className="text-lg text-primary/75">
          Apps running on Fly Machines are KVM hardware-isolated, built on a
          memory-safe stack and running directly on our own metal.
        </p>
        <div className="flex flex-wrap gap-3">
          <button className="btn-purple rounded-full">
            <p className="font-medium">Enterprise Features</p>
            <ChevronRight className="size-4 text-white/75" />
          </button>
          <button className="btn-white rounded-full gap-2">
            <p className="font-medium">Fly.io Security</p>
            <ChevronRight className="size-4 text-black/75" />
          </button>
        </div>
      </div>
      <ul className="relative flex flex-col gap-3 mt-12 w-full">
        <div className="red-l hidden absolute border-l-2 h-[345px] left-8 -top-8 border-[#db277733]"></div>
        <div className="border-b-2 border-[#0284c733]" />
        <li className="flex items-center gap-2 pl-4 li-pad ">
          <Check className="min-w-6 min-h-6 text-[#10b981]" />
          <p className="text-lg font-medium tracking-tight">Single Sign-On</p>
        </li>
        <div className="border-b-2 border-[#0284c733]" />
        <li className="flex items-center gap-2 pl-4 li-pad">
          <Check className="min-w-6 min-h-6 text-[#10b981]" />
          <p className="text-lg font-medium tracking-tight">
            Guaranteed Support Response Times
          </p>
        </li>
        <div className="border-b-2 border-[#0284c733]" />
        <li className="flex items-center gap-2 pl-4 li-pad">
          <Check className="min-w-6 min-h-6 text-[#10b981]" />
          <p className="text-lg font-medium tracking-tight">
            SOC2 Type 2 Attested
          </p>
        </li>
        <div className="border-b-2 border-[#0284c733]" />
        <li className="flex items-center gap-2 pl-4 li-pad">
          <Check className="min-w-6 min-h-6 text-[#10b981]" />
          <p className="text-lg font-medium tracking-tight">
            Memory-safe Rust and Go stack
          </p>
        </li>
        <div className="border-b-2 border-[#0284c733]" />
        <li className="flex items-center gap-2 pl-4 li-pad">
          <Check className="min-w-6 min-h-6 text-[#10b981]" />
          <p className="text-lg font-medium tracking-tight">
            CI/CD Integration
          </p>
        </li>
        <div className="border-b-2 border-[#0284c733]" />
      </ul>
    </section>
  );
}

export default Enterprise;
