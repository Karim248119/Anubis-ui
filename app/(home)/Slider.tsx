"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import {
  FaAnkh,
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaYoutube,
} from "react-icons/fa6";
import Image from "next/image";
import { GiVikingHelmet } from "react-icons/gi";
import { RiOmega } from "react-icons/ri";

//animations
const variants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    position: "absolute",
  }),
  center: {
    x: 0,
    position: "absolute",
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    position: "absolute",
  }),
};

const Items = [
  {
    contry: "Egypt",
    icon: <FaAnkh />,
    locations: [
      {
        name: "Bastet",
        rule: "Goddess of protection",
        image:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/53653317-d541-48a0-8252-bc533c980e00/dchdhw0-6ccd6c91-200d-4fab-975c-b6706f3d4e7c.png/v1/fill/w_447,h_700/bastet___egyptian_gods_by_yliade_dchdhw0-350t-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwvZGNoZGh3MC02Y2NkNmM5MS0yMDBkLTRmYWItOTc1Yy1iNjcwNmYzZDRlN2MucG5nIiwiaGVpZ2h0IjoiPD05NDAiLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwveWxpYWRlLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.cZ_hvZId6Lpo6n4Yl10T62UxdazM4_aDCicotyCd9Xc",
      },
      {
        name: "Isis",
        rule: "Goddess of Love",
        image:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/53653317-d541-48a0-8252-bc533c980e00/dcigtjm-d7ea21f0-eb4b-4cca-a317-f11823636b3a.png/v1/fit/w_400,h_739/isis___egyptian_gods_by_yliade_dcigtjm-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwvZGNpZ3RqbS1kN2VhMjFmMC1lYjRiLTRjY2EtYTMxNy1mMTE4MjM2MzZiM2EucG5nIiwiaGVpZ2h0IjoiPD03MzkiLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwveWxpYWRlLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.og6miu9_0EKyFct67Ag51ge5IAjZ65aXxSAlzZJobRA",
      },
      {
        name: "Meretseger",
        rule: "Goddess of guarding ",
        image:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/53653317-d541-48a0-8252-bc533c980e00/dd4f00d-ce5a4a2d-fe14-4cde-906e-8dfc9109bade.png/v1/fit/w_600,h_923/meretseger___egyptian_gods_by_yliade_dd4f00d-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwvZGQ0ZjAwZC1jZTVhNGEyZC1mZTE0LTRjZGUtOTA2ZS04ZGZjOTEwOWJhZGUucG5nIiwiaGVpZ2h0IjoiPD05MjMiLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwveWxpYWRlLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.QKIeR90EonMhvpvqD_DuCn4AaoKOYf9UFVFPVFm5_wc",
      },
    ],
  },
  {
    contry: "Greece",
    icon: <RiOmega />,

    locations: [
      {
        name: "Asteria",
        rule: "Goddess of Stars",
        image:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/53653317-d541-48a0-8252-bc533c980e00/ddqfiol-a9c5a9cf-3052-4e07-a478-162d46cbe58a.png/v1/fit/w_600,h_841/asteria___greek_mythology_by_yliade_ddqfiol-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwvZGRxZmlvbC1hOWM1YTljZi0zMDUyLTRlMDctYTQ3OC0xNjJkNDZjYmU1OGEucG5nIiwiaGVpZ2h0IjoiPD04NDEiLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwveWxpYWRlLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.CWdJ5pxxQdH1NnK3vfwRqHaJjnYZf1fK598M8p2aGMU",
      },
      {
        name: "Demeter",
        rule: "Goddess of Agriculture",
        image:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/53653317-d541-48a0-8252-bc533c980e00/ddsykgn-712f66bf-8dd3-4903-bd1d-eecce350f66b.png/v1/fit/w_600,h_816/demeter___greek_mythology_by_yliade_ddsykgn-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwvZGRzeWtnbi03MTJmNjZiZi04ZGQzLTQ5MDMtYmQxZC1lZWNjZTM1MGY2NmIucG5nIiwiaGVpZ2h0IjoiPD04MTYiLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwveWxpYWRlLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.XqRYWSTMlVuuq2B39JD0ACGXQsCK-17O_y-neQt55iM",
      },
      {
        name: "Eris",
        rule: "Goddess of Destruction",
        image:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/53653317-d541-48a0-8252-bc533c980e00/ddpxyo8-2e21c416-083d-4567-9944-46e542cb4a90.png/v1/fit/w_400,h_580/eris___greek_mythology_by_yliade_ddpxyo8-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwvZGRweHlvOC0yZTIxYzQxNi0wODNkLTQ1NjctOTk0NC00NmU1NDJjYjRhOTAucG5nIiwiaGVpZ2h0IjoiPD01ODAiLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwveWxpYWRlLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.p0p7Q0-Hd6PFgRNbfpoNH-joZFAZRkpg11vx8rv3tC8",
      },
    ],
  },
  {
    contry: "Norse",
    icon: <GiVikingHelmet />,
    locations: [
      {
        name: "Freyja",
        rule: "Goddess of War",
        image:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/53653317-d541-48a0-8252-bc533c980e00/ddpo13k-0fed07dd-4c5f-4b33-b978-93989c9c4168.png/v1/fit/w_600,h_915/ares___greek_mythology_by_yliade_ddpo13k-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwvZGRwbzEzay0wZmVkMDdkZC00YzVmLTRiMzMtYjk3OC05Mzk4OWM5YzQxNjgucG5nIiwiaGVpZ2h0IjoiPD05MTUiLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwveWxpYWRlLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.BYdCK3XWqjTRsqcGR6qRFsRuT9Dk-3U0LhbEBV1jRvE",
      },
      {
        name: "Hel",
        rule: "Goddess of Death",
        image:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/53653317-d541-48a0-8252-bc533c980e00/ddcka4d-02302b0f-a35a-4978-9efb-60a7e05ba4d2.png/v1/fit/w_400,h_562/hel___norse_gods_and_goddesses_by_yliade_ddcka4d-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwvZGRja2E0ZC0wMjMwMmIwZi1hMzVhLTQ5NzgtOWVmYi02MGE3ZTA1YmE0ZDIucG5nIiwiaGVpZ2h0IjoiPD01NjIiLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwveWxpYWRlLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.uEm_t1psm5bussBoa-vjUjUh39ztLdXTtMCt9VPSq0Q",
      },
      {
        name: "Sol",
        rule: "Goddess of Sun",
        image:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/53653317-d541-48a0-8252-bc533c980e00/ddhpbj4-fd97bf7a-7865-4d3a-984d-fa44c80ffa95.png/v1/fit/w_400,h_628/sol___norse_gods_and_goddesses_by_yliade_ddhpbj4-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwvZGRocGJqNC1mZDk3YmY3YS03ODY1LTRkM2EtOTg0ZC1mYTQ0YzgwZmZhOTUucG5nIiwiaGVpZ2h0IjoiPD02MjgiLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwveWxpYWRlLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.9C5RGvN-790p-VmiwrQWU_uqvDpI8RU01j5Nxvulc4E",
      },
    ],
  },
];

const Slider = () => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const index = ((page % Items.length) + Items.length) % Items.length;
  return (
    <div className="w-full h-[90vh] flex justify-center items-center">
      <div className="relative w-full h-full overflow-hidden flex md:flex-row flex-col items-center justify-center ">
        {/* content Section */}
        <div className="w-[80vw] h-[80vh] overflow-hidden relative ">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 1.5 }}
              className="w-full h-full absolute flex  justify-center px-10 "
            >
              <div className="w-1/3 h-full flex flex-col justify-center">
                <h1 className="text-4xl uppercase text-wrap font-sans font-extrabold">
                  {Items[index]?.contry}
                </h1>
                <p className=" opacity-60 font-light text-sm mt-5 mb-12">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  delectus beatae ab sint explicabo nemo quae voluptatibus vero
                  vitae nulla, quia nostrum est repellat numquam, animi
                  temporibus accusamus eveniet eum?
                </p>
                <button className="py-2 px-10 text-sm bg-gold shadow-xl shadow-gold/30 text-black rounded-full w-fit">
                  Explore
                </button>
              </div>
              <div className="w-2/3 h-full gap-5 flex justify-end items-center">
                {Items[index]?.locations?.map((location, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: i * 0.5,
                      delay: 0.8,
                      ease: "easeOut",
                    }}
                    className="w-[25%] h-[50%] flex flex-col justify-center items-center text-white relative shadow shadow-black"
                  >
                    <Image
                      width={500}
                      height={1000}
                      src={location?.image}
                      alt={location?.name}
                      className="w-auto h-full brightness-75"
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-5">
                      <h1 className="text-xl uppercase text-wrap font-sans font-bold">
                        {location?.name}
                      </h1>
                      <p className=" font-light text-xs flex items-center gap-1">
                        <div className="text-[10px] text-gold ">
                          {Items[index]?.icon}
                        </div>
                        {location?.rule}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Buttons */}
        <div className="w-[80vw] py-5 px-10 absolute bottom-0 flex justify-between items-center">
          <div className="flex gap-5 text-sm">
            <FaFacebook />
            <FaYoutube />
            <FaInstagram />
          </div>
          <div className="text-sm">
            0{index + 1} <span className="text-gold">/</span> 0{Items.length}
          </div>
          <div className="flex gap-2 ">
            <button
              onClick={() => paginate(-1)}
              className="w-7 aspect-square border border-primary hover:bg-black hover:text-white rounded-full flex justify-center items-center duration-300"
            >
              <GoChevronLeft />
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-7 aspect-square border border-primary hover:bg-black hover:text-white rounded-full flex justify-center items-center duration-300"
            >
              <GoChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
