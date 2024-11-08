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
            <li className="text-sm footer-link">About</li>
            <li className="text-sm footer-link">Pricing</li>
            <li className="text-sm footer-link">Jobs</li>
          </ul>

          <ul className="min-w-28">
            <p className="uppercase font-semibold mb-3 text-xs text-white">
              Articles
            </p>
            <li className="text-sm footer-link">Blog</li>
            <li className="text-sm footer-link">Phoenix Files</li>
            <li className="text-sm footer-link">Laravel Bytes</li>
            <li className="text-sm footer-link">Ruby Dispatch</li>
            <li className="text-sm footer-link">Django Beats</li>
            <li className="text-sm footer-link">JavaScript Journal</li>
          </ul>

          <ul className="min-w-28">
            <p className="uppercase font-semibold mb-3 text-xs text-white">
              Resources
            </p>
            <li className="text-sm footer-link">Docs</li>
            <li className="text-sm footer-link">Customers</li>
            <li className="text-sm footer-link">Support</li>
            <li className="text-sm footer-link">Support Metrics</li>
            <li className="text-sm footer-link">Status</li>
          </ul>

          <ul className="min-w-28">
            <p className="uppercase font-semibold mb-3 text-xs text-white">
              Contact
            </p>
            <li className="text-sm footer-link">Github</li>
            <li className="text-sm footer-link">X (Twitter)</li>
            <li className="text-sm footer-link">Community</li>
          </ul>

          <ul className="min-w-28">
            <p className="uppercase font-semibold mb-3 text-xs text-white">
              Legal
            </p>
            <li className="text-sm footer-link">Security</li>
            <li className="text-sm footer-link">Privacy policy</li>
            <li className="text-sm footer-link">Terms of service</li>
          </ul>
        </nav>
      </div>

      <div>
        <p className="text-xs">
          Copyright © {new Date().getFullYear()}
          <a target="_blank" href="https://nzar.dev" className="underline ml-1">
            nzar.dev
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
