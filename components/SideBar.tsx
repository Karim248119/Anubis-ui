"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Box,
  FormInput,
  ListCollapse,
  Sliders,
  SquarePower,
  WalletCards,
  Waves,
  ChevronDown,
  ChevronUp,
  CircleDot,
  Stars,
  CupSoda,
  Globe,
  Car,
  Smartphone,
  Headphones,
  Shirt,
  MonitorSmartphone,
  Music,
  Puzzle,
  Mouse,
  Images,
  MousePointer,
} from "lucide-react";
import { GiRingBox, GiThroneKing, GiZeusSword } from "react-icons/gi";
import { RiGlassesFill } from "react-icons/ri";
import { GiTable } from "react-icons/gi";
import { MdOutlineTableBar, MdOutlineTravelExplore } from "react-icons/md";
import { FaUserTie } from "react-icons/fa6";
import { PiMouseScrollLight } from "react-icons/pi";
import { TbZodiacCapricorn } from "react-icons/tb";

// === Single Link Item ===
const NavItem = ({
  href,
  icon,
  name,
}: {
  href: string;
  icon: React.ReactNode;
  name: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`w-full text-sm p-2 flex items-center gap-2 ${
        isActive ? "bg-foreground/15 rounded" : "opacity-50"
      }`}
    >
      {icon}
      {name}
    </Link>
  );
};

// === Collapsible Item With Sub Links ===
const CollapsibleNavItem = ({
  name,
  icon,
  subTabs,
  basePath,
}: {
  name: string;
  icon: React.ReactNode;
  subTabs: { name: string; path: string; icon?: React.ReactNode }[];
  basePath: string;
}) => {
  const pathname = usePathname();
  const isParentActive = pathname.startsWith(basePath);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isParentActive) setIsOpen(true);
  }, [isParentActive]);

  return (
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full text-sm p-2 flex items-center justify-between gap-2 ${
          isParentActive ? "bg-foreground/15 rounded" : "opacity-50"
        }`}
      >
        <span className="flex items-center gap-2">
          {icon}
          {name}
        </span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-auto" : "max-h-0"
        }`}
      >
        <div className="ml-4 mt-1 flex flex-col gap-1">
          {subTabs.map((child, index) => {
            const isActive = pathname === child.path;
            return (
              <Link
                key={index}
                href={child.path}
                className={`text-sm p-2 rounded flex items-center gap-2 ${
                  isActive ? " font-semibold" : "opacity-50 hover:opacity-100"
                }`}
              >
                <span className="text-[10px]">
                  {child.icon || <CircleDot size={16} />}
                </span>
                {child.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// === Main Sidebar ===
export default function SideBar() {
  return (
    <aside
      className="w-[15vw] h-full pb-5 pt-32 pl-10 border-r fixed overflow-y-auto z-40"
      style={{
        //hide scrollbar
        scrollbarWidth: "none",
      }}
    >
      <nav className="flex flex-col w-[10vw]">
        <NavItem
          href="/components/buttons"
          icon={<SquarePower />}
          name="Buttons"
        />
        <NavItem href="/components/cards" icon={<WalletCards />} name="Cards" />
        <NavItem
          href="/components/collapse"
          icon={<ListCollapse />}
          name="Collapse"
        />

        <CollapsibleNavItem
          name="Sliders"
          icon={<Sliders />}
          basePath="/components/sliders"
          subTabs={[
            {
              name: "Zodiac",
              icon: <TbZodiacCapricorn size={16} />,
              path: "/components/sliders/zodiac",
            },
            {
              name: "Jewellry",
              icon: <GiRingBox size={16} />,
              path: "/components/sliders/jewelry",
            },
            {
              name: "Travel",
              icon: <MdOutlineTravelExplore size={16} />,
              path: "/components/sliders/travel",
            },
            {
              name: "Suits",
              icon: <FaUserTie size={16} />,
              path: "/components/sliders/suits",
            },
            {
              name: "Invincible",
              icon: <RiGlassesFill size={16} />,
              path: "/components/sliders/invincible",
            },
            {
              name: "Verical Scroll",
              icon: <PiMouseScrollLight size={16} />,
              path: "/components/sliders/vertical-scroll",
            },
            {
              name: "Gallery",
              icon: <Images size={16} />,
              path: "/components/sliders/gallery",
            },
            {
              name: "Products",
              icon: <MdOutlineTableBar size={16} />,
              path: "/components/sliders/products",
            },
          ]}
        />

        <CollapsibleNavItem
          name="3D Models"
          icon={<Box />}
          basePath="/components/3d"
          subTabs={[
            {
              name: "Stars",
              path: "/components/3d/stars",
              icon: <Stars size={16} />,
            },
            {
              name: "Globe",
              path: "/components/3d/globe",
              icon: <Globe size={16} />,
            },
            {
              name: "Car",
              path: "/components/3d/car",
              icon: <Car size={16} />,
            },
            {
              name: "Shirt",
              path: "/components/3d/shirt",
              icon: <Shirt size={16} />,
            },
            {
              name: "Phone",
              path: "/components/3d/phone",
              icon: <Smartphone size={16} />,
            },
            {
              name: "Head Phone",
              path: "/components/3d/headphone",
              icon: <Headphones size={16} />,
            },
            {
              name: "Soda Can",
              path: "/components/3d/soda-can",
              icon: <CupSoda size={16} />,
            },
            {
              name: "Desktop",
              path: "/components/3d/desktop",
              icon: <MonitorSmartphone size={16} />,
            },
          ]}
        />
        <NavItem href="/components/navbars" icon={<Waves />} name="Navbars" />
        <NavItem
          href="/components/music-player"
          icon={<Music />}
          name="Music Player"
        />
        <NavItem
          href="/components/custom-cursor"
          icon={<MousePointer />}
          name="Custom Cursor"
        />
        <CollapsibleNavItem
          name="Randoms"
          icon={<Puzzle />}
          basePath="/components/randoms"
          subTabs={[
            {
              name: "GOT",
              path: "/components/randoms/GOT",
              icon: <GiThroneKing size={16} />,
            },
          ]}
        />
      </nav>
    </aside>
  );
}
