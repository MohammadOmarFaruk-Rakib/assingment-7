
"use client";

import Image from "next/image";
import { Profiledropdown } from "./Profiledropdown";
import { useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";

function Navbar() {
  const { data: session, isPending } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#DFE8DF] bg-white">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo and website name */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
        >
          <span className="flex items-center justify-center rounded-md bg-green-700 p-1.5">
            <Image
              src="/logo-icon.png"
              width={22}
              height={22}
              alt="বাজার দর logo"
            />
          </span>

          <span>
            <span className="block text-[15px] font-semibold text-[#26352C]">
              বাজার দর
            </span>
            <span className="block text-[10px] font-medium text-gray-400">
              মঙ্গলবার, ৬ অক্টোবর, ২০২৬
            </span>
          </span>
        </Link>

        {/* Right-side actions */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {isPending ? (
            <div className="h-9 w-24 animate-pulse rounded-lg bg-gray-100" />
          ) : session?.user ? (
            <>
              <Image
                src="/logo-icon.png"
                width={30}
                height={30}
                alt="Profile"
                className="hidden rounded-full sm:block"
              />

              <Profiledropdown />
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="inline-flex"
              >
                <Button
                  variant="ghost"
                  className="h-9 min-w-0 rounded-lg bg-transparent px-3 text-sm font-semibold text-[#26352C] hover:bg-[#F1F6F1] sm:px-4"
                >
                  সাইন ইন
                </Button>
              </Link>

              <Link
                href="/sign-up"
                className="inline-flex"
              >
                <Button
                  className="h-9 min-w-0 rounded-lg bg-[#07883F] px-3 text-sm font-semibold text-white shadow-[0_3px_0_#B8D8C3] transition hover:bg-[#067535] active:translate-y-px sm:px-4"
                >
                  সাইন আপ
                </Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
