import Image from "next/image";
import lg from "@/assets/logo-landscape.png";

import { Menu } from "lucide-react";
import Nav from "./Nav";

function Header() {
  return (
    <header className="flex justify-between items-center px-4 md:px-6 lg:px-9 py-8 max-w-[1200px] mx-auto">
      <div id="logo">
        <Image src={lg} alt="Fly.io Logo" width={111} height={36} />
      </div>

      <Nav />

      <div className="flex gap-2 items-center">
        <div className="xl:hidden">
          <Menu className="size-6" />
        </div>

        <div className="hidden lg:flex gap-1 p-1 nav-glass-bg rounded-full text-sm">
          <button className="btn-white !py-2 !px-3 rounded-r-lg rounded-l-3xl">
            Sign In
          </button>
          <button className="btn-purple !py-2 !px-3 rounded-l-lg rounded-r-3xl">
            Get Strated
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
