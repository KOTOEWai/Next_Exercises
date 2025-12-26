// app/components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];
  const handleLogout = () => {
    signOut();
    window.location.href = "/";
  };
  const handleLogin = () => {
    window.location.href = "/login";
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-blue-600">
            MyApp
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Auth Section */}
          <div className="flex items-center space-x-4">
            {status === "loading" && (
              <span className="text-sm text-gray-500">Loading...</span>
            )}

            {status === "authenticated" && session.user ? (
              <>
                <div className="flex items-center gap-2">
                  <img
                    src={session.user.image ?? "/avatar.png"}
                    alt="avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm font-medium">
                    {session.user.name}
                  </span>
                </div>

                <button
                  onClick={handleLogout}
                  className="text-sm text-red-600 hover:underline"
                >
                  Logout
                </button>
              </>
            ) : (
              status === "unauthenticated" && (
                <button
                  onClick={ 
                   handleLogin
                  }
                  className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
                >
                  Sign In
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
