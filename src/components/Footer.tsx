import Image from "next/image";
import logo2 from "@/assets/logo-landscape-inverted.png";

function Footer() {
  return (
    <footer className="bg-[#191034] text-[#a39ac1] px-4 py-12 flex flex-col items-center gap-20">
      <div className="flex flex-col justify-center items-start md:flex-row gap-12">
        <div>
          <Image
            alt="Fly.io Logo Dark Mode"
            src={logo2}
            height={36}
            width={110}
          />
        </div>

        <nav className="flex flex-wrap gap-10 items-baseline tracking-tight">
          <ul className="min-w-28">
            <p className="uppercase font-semibold mb-3 text-xs text-white">
              Comapany
            </p>
            <li className="text-sm">About</li>
            <li className="text-sm">Pricing</li>
            <li className="text-sm">Jobs</li>
          </ul>

          <ul className="min-w-28">
            <p className="uppercase font-semibold mb-3 text-xs text-white">
              Articles
            </p>
            <li className="text-sm">Blog</li>
            <li className="text-sm">Phoenix Files</li>
            <li className="text-sm">Laravel Bytes</li>
            <li className="text-sm">Ruby Dispatch</li>
            <li className="text-sm">Django Beats</li>
            <li className="text-sm">JavaScript Journal</li>
          </ul>

          <ul className="min-w-28">
            <p className="uppercase font-semibold mb-3 text-xs text-white">
              Resources
            </p>
            <li className="text-sm">Docs</li>
            <li className="text-sm">Customers</li>
            <li className="text-sm">Support</li>
            <li className="text-sm">Support Metrics</li>
            <li className="text-sm">Status</li>
          </ul>

          <ul className="min-w-28">
            <p className="uppercase font-semibold mb-3 text-xs text-white">
              Contact
            </p>
            <li className="text-sm">Github</li>
            <li className="text-sm">X (Twitter)</li>
            <li className="text-sm">Community</li>
          </ul>

          <ul className="min-w-28">
            <p className="uppercase font-semibold mb-3 text-xs text-white">
              Legal
            </p>
            <li className="text-sm">Security</li>
            <li className="text-sm">Privacy policy</li>
            <li className="text-sm">Terms of service</li>
          </ul>
        </nav>
      </div>

      <div>
        <p className="text-xs">
          Copyright © {new Date().getFullYear()} nzar.io
        </p>
      </div>
    </footer>
  );
}

export default Footer;
