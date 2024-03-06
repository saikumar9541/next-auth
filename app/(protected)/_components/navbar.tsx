"use client"
"use products";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-secondary flex justify-center items-center p-4 rounded-xl w-full shadow-sm">
      <div className="flex gap-x-2">
        <Button 
          asChild
          variant={pathname === "/dashboard" ? "default" : "outline"}
        >
          <Link href="/dashboard">
            dashboard
          </Link>
        </Button>
        <Button 
          asChild
          variant={pathname === "/products" ? "default" : "outline"}
        >
          <Link href="/products">
            products
          </Link>
        </Button>
        <Button 
          asChild
          variant={pathname === "/categories" ? "default" : "outline"}
        >
          <Link href="/categories">
            categories
          </Link>
        </Button>
        <Button 
          asChild
          variant={pathname === "/bio-link" ? "default" : "outline"}
        >
          <Link href="/bio-link">
            bio-link
          </Link>
        </Button>
        <Button 
          asChild
          variant={pathname === "/settings" ? "default" : "outline"}
        >
          <Link href="/settings">
            settings
          </Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  );
};
