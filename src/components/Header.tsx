import Image from "next/image";
import lg from "@/assets/logo-landscape.png";

import { Menu } from "lucide-react";

function Header() {
  return (
    <header className="flex justify-between items-center px-4 md:px-6 lg:px-9 py-8 max-w-[1200px] mx-auto">
      <div id="logo">
        <Image src={lg} alt="Fly.io Logo" width={111} height={36} />
      </div>

      <ul className="hidden xl:flex gap-2 px-3 navbg  justify-center items-center py-2 text-sm ">
        <li className="px-2 cursor-pointer">Articles</li>
        <li className="px-2 cursor-pointer">Security</li>
        <li className="px-2 cursor-pointer">Infra Log</li>
        <li className="px-2 cursor-pointer">Docs</li>
        <li className="px-2 cursor-pointer">Community</li>
        <li className="px-2 cursor-pointer">Status</li>
        <li className="px-2 cursor-pointer">Pricing</li>
      </ul>

      <div className="flex gap-2 items-center">
        <div className="xl:hidden">
          <Menu className="size-6" />
        </div>

        <div className="hidden lg:flex gap-1 p-1 navbg rounded-full text-sm">
          <button className="btn-purple !py-1 !px-3 rounded-r-md rounded-l-3xl">
            Sign In
          </button>
          <button className="btn-purple !py-1 !px-3 rounded-l-md rounded-r-3xl">
            Get Strated
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
