import Link from "next/link";
import { Ilogo } from "../svgs/svgs";
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="section md:py-8 lg:py-12 container">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo */}
          <div className="">
            <Link className="w-fit flex-center" href="/">
              <Ilogo className="h-14 w-fit text-primary" />
            </Link>
            <p className="ml-4">Your Solution for Pest-Free Living and Workspaces</p>
          </div>

          {/* Quick Links */}
          <div className="px-4 self-start">
            <div className="">
              <div className="font-semibold">Quick Links</div>
              <ul className="mt-2">
                <li><Link className="text-muted-foreground hover:text-blue-700 hover:underline" href="/">Home</Link></li>
                <li><Link className="text-muted-foreground hover:text-blue-700 hover:underline" href="/about">About Us</Link></li>
                <li><Link className="text-muted-foreground hover:text-blue-700 hover:underline" href="/services">Services</Link></li>
                <li><Link className="text-muted-foreground hover:text-blue-700 hover:underline" href="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Address & Contact */}
          <div className="px-4">
            <div className="font-semibold">Contact & Address</div>
            <div className="mt-2 flex flex-col gap-2">
              {/* location */}
              <div className="">
                <div className="">
                  <MapPin className="mr-1 size-4 inline" />
                  <span className="uppercase text-xs text-primary tracking-wide">Location</span>
                </div>
                <div className="-mt-1 block text-muted-foreground text-base">111A Kennington Ln, London SE11 4HQ, UK</div>
              </div>

              {/* Email */}
              <div className="">
                <div className="">
                  <Mail className="mr-1 size-4 inline" />
                  <span className="uppercase text-xs text-primary tracking-wide">Email</span>
                </div>
                <Link className="-mt-1 block text-muted-foreground text-base hover:underline hover:text-blue-700" href="mailto:info@bugbusters.com">info@bugbuster.com</Link>
              </div>
              {/* Phone */}
              <div className="">
                <div className="">
                  <Phone className="mr-1 size-4 inline" />
                  <span className="uppercase text-xs text-primary tracking-wide">Phone No.</span>
                </div>
                <Link className="-mt-1 block text-muted-foreground text-base hover:underline hover:text-blue-700" href="tel:+123412341234">+1234 1234 1234</Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="container">
        <p className="py-10 text-muted-foreground text-sm text-center border-t">
          &copy;Copyright-2024 / <Link className="hover:underline" href="/credits"> Credits</Link> / Developed by <Link className="hover:underline" href="https://webdevsalmann.vercel.app/" target="_blank"> webdevsalmann</Link> 💖
        </p>
      </div>
    </footer>
  )
}
