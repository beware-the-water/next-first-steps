import React from "react";
import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "@/components";

const navBar = [
  { text: "About", path: "/about" },
  { text: "Contact", path: "/contact" },
  { text: "Pricing", path: "/pricing" },
];

export const NavBar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/">
        <HomeIcon />
      </Link>
      <div className="flex flex-1"></div>
      {navBar.map((o) => {
        return <ActiveLink key={o.path} path={o.path} text={o.text} />;
      })}
    </nav>
  );
};
