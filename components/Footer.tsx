import Image from "next/image";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";
import { SiThreads } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white pb-[calc(4.25rem+env(safe-area-inset-bottom))] lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3">
              <Image
                src="/emart-logo.svg"
                alt="E-Marts"
                width={208}
                height={60}
                className="h-9 w-auto"
              />
            </div>
            <p className="mb-4 text-sm leading-relaxed text-gray-600">
              We get deliveries delivered to you in no time from a wide variety of vendors.
            </p>
            <div className="flex gap-2">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-transparent hover:text-white text-gray-900 transition hover:bg-gray-800"
                aria-label="Facebook"
              >
                <FaFacebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-transparent hover:text-white text-gray-900 transition hover:bg-gray-800"
                aria-label="Instagram"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-transparent hover:text-white text-gray-900 transition hover:bg-gray-800"
                aria-label="TikTok"
              >
                <FaTiktok className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-transparent hover:text-white text-gray-900 transition hover:bg-gray-800"
                aria-label="Threads"
              >
                <SiThreads className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold text-gray-900">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold text-gray-900">Privacy Policy</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  General
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Vendors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Customers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold text-gray-900">Terms Of Use</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  General Terms Of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Merchant Terms Of Use
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-gray-500">© Copyright 2026 | E-Marts Team</p>
            <div className="flex items-center gap-3">
              <Image
                src="/visa.png"
                alt="Visa"
                width={56}
                height={36}
                className="h-8 w-auto object-contain"
              />
              <Image
                src="/mastercard.png"
                alt="Mastercard"
                width={56}
                height={36}
                className="h-8 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
