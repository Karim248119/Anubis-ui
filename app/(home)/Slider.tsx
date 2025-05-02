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
import Button from "@/components/Button";

//animations
const variants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    position: "absolute",
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "absolute",
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    position: "absolute",
  }),
};

const Items = [
  {
    contry: "The Ennead of Heliopolis",
    des: `From the sacred city rose the nine, divine ancestors of gods and men.
Their tales wove the fabric of life, death, and royal bloodlines.
Creation flowed from Atum, birthing the order that shaped the cosmos.

`,
    gods: [
      {
        name: "Ra",
        rule: "Goddess of protection",
        image:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/53653317-d541-48a0-8252-bc533c980e00/dcgws2i-dd857017-e86a-4ac2-a378-0e9b9b4cd7e6.png/v1/fit/w_400,h_671/ra___egyptian_gods_by_yliade_dcgws2i-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwvZGNnd3MyaS1kZDg1NzAxNy1lODZhLTRhYzItYTM3OC0wZTliOWI0Y2Q3ZTYucG5nIiwiaGVpZ2h0IjoiPD02NzEiLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwveWxpYWRlLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.uMPjurEMiZbTlTneGxN66vCOgOfRsRpPbDdd7Pg7AtY",
      },
      {
        name: "Osiris",
        rule: "Goddess of guarding ",
        image:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/53653317-d541-48a0-8252-bc533c980e00/dcw5bvw-e5f44c7c-d9a0-4954-9f97-892cd61e280b.png/v1/fit/w_400,h_742/osiris___egyptian_gods_by_yliade_dcw5bvw-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwvZGN3NWJ2dy1lNWY0NGM3Yy1kOWEwLTQ5NTQtOWY5Ny04OTJjZDYxZTI4MGIucG5nIiwiaGVpZ2h0IjoiPD03NDIiLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwveWxpYWRlLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.SZmZs0ihk1NGJbFAAbDHIHEiCKMtNbNfVKsy3V7ucTQ",
      },
      {
        name: "Isis",
        rule: "Goddess of Love",
        image:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/53653317-d541-48a0-8252-bc533c980e00/dcigtjm-d7ea21f0-eb4b-4cca-a317-f11823636b3a.png/v1/fit/w_400,h_739/isis___egyptian_gods_by_yliade_dcigtjm-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwvZGNpZ3RqbS1kN2VhMjFmMC1lYjRiLTRjY2EtYTMxNy1mMTE4MjM2MzZiM2EucG5nIiwiaGVpZ2h0IjoiPD03MzkiLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwveWxpYWRlLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.og6miu9_0EKyFct67Ag51ge5IAjZ65aXxSAlzZJobRA",
      },
    ],
  },
  {
    contry: "The Triad of Thebes",
    des: `Amun the hidden, Mut the mother, and Khonsu the moon-born son.
They reigned as a celestial family, mirroring the earthly throne.
Their temple walls echoed power, protection, and divine right to rule.`,
    gods: [
      {
        name: "Ammun",
        rule: "Goddess of Agriculture",
        image:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/53653317-d541-48a0-8252-bc533c980e00/dd9e401-a44714e5-720f-45d8-986b-af81909ce414.png/v1/fit/w_400,h_643/amun___egyptian_gods_by_yliade_dd9e401-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwvZGQ5ZTQwMS1hNDQ3MTRlNS03MjBmLTQ1ZDgtOTg2Yi1hZjgxOTA5Y2U0MTQucG5nIiwiaGVpZ2h0IjoiPD02NDMiLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwveWxpYWRlLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.skI5jfOQfIr0rnfHAmHHAuPNAAGPv673XhUd0Opfrv8",
      },
      {
        name: "Mut",
        rule: "Goddess of Stars",
        image:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/53653317-d541-48a0-8252-bc533c980e00/dd34kne-83b3d010-6acb-4409-ba6f-529403c92c5b.png/v1/fit/w_400,h_859/mut___egyptian_gods_by_yliade_dd34kne-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwvZGQzNGtuZS04M2IzZDAxMC02YWNiLTQ0MDktYmE2Zi01Mjk0MDNjOTJjNWIucG5nIiwiaGVpZ2h0IjoiPD04NTkiLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwveWxpYWRlLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.xuUxM1b5CoeQWXgPt2zMi954-RDJkDRGC1mVWcq-Ln0",
      },
      {
        name: "Khonsu",
        rule: "Goddess of Destruction",
        image:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/53653317-d541-48a0-8252-bc533c980e00/dd4w5eq-b70e6622-931a-4101-90d2-30e8d48905c5.png/v1/fit/w_600,h_1027/khonsu___egyptian_gods_by_yliade_dd4w5eq-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwvZGQ0dzVlcS1iNzBlNjYyMi05MzFhLTQxMDEtOTBkMi0zMGU4ZDQ4OTA1YzUucG5nIiwiaGVpZ2h0IjoiPD0xMDI3Iiwid2lkdGgiOiI8PTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC81MzY1MzMxNy1kNTQxLTQ4YTAtODI1Mi1iYzUzM2M5ODBlMDBcL3lsaWFkZS00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.0XW_drNlfA5ByQG_HE8bqq-FmQ5pGCx9NIgjqOp62xY",
      },
    ],
  },
  {
    contry: "The Triad of Memphis",
    des: `In thought, Ptah shaped the world with the power of his word.
By his side, Sekhmet burned with fury, and Nefertem bloomed with grace.
Together, they formed a holy balance of creation, destruction, and renewal.`,
    gods: [
      {
        name: "Ptah",
        rule: "Goddess of War",
        image:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/53653317-d541-48a0-8252-bc533c980e00/dd2tpaj-4f683cdd-0e6f-459f-af36-2b73810564ac.png/v1/fit/w_400,h_666/geb___egyptian_gods_by_yliade_dd2tpaj-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwvZGQydHBhai00ZjY4M2NkZC0wZTZmLTQ1OWYtYWYzNi0yYjczODEwNTY0YWMucG5nIiwiaGVpZ2h0IjoiPD02NjYiLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwveWxpYWRlLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.xZSq51E-smOmsXdnPcMTGS0ujATAJBQpeR38V-ooR1M",
      },
      {
        name: "Sekhmet",
        rule: "Goddess of Death",
        image:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/53653317-d541-48a0-8252-bc533c980e00/dchrcog-5881d53b-043d-4455-ba2d-2f145cb438b0.png/v1/fit/w_400,h_765/sekhmet___egyptian_gods_by_yliade_dchrcog-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwvZGNocmNvZy01ODgxZDUzYi0wNDNkLTQ0NTUtYmEyZC0yZjE0NWNiNDM4YjAucG5nIiwiaGVpZ2h0IjoiPD03NjUiLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwveWxpYWRlLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.AXrNnixjCb1j36cm6a8CvdidJnXXefpTVY08N5TNKRU",
      },
      {
        name: "Nefertem",
        rule: "Goddess of Sun",
        image:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/53653317-d541-48a0-8252-bc533c980e00/dd87djm-706625c5-f909-46b7-bff3-2e7a9dca9640.png/v1/fit/w_600,h_975/nefertem___egyptian_gods_by_yliade_dd87djm-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwvZGQ4N2RqbS03MDY2MjVjNS1mOTA5LTQ2YjctYmZmMy0yZTdhOWRjYTk2NDAucG5nIiwiaGVpZ2h0IjoiPD05NzUiLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzUzNjUzMzE3LWQ1NDEtNDhhMC04MjUyLWJjNTMzYzk4MGUwMFwveWxpYWRlLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.2csyc10CvFWhggdIr9mdoyLjRgn3GU9QaPixLuvxDpE",
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
    <div className="w-full h-[90vh] md:flex justify-center items-center hidden ">
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
              transition={{ duration: 1 }}
              className="w-full h-full absolute flex  justify-center px-10 "
            >
              <div className="w-1/3 h-full flex flex-col justify-center">
                <h1 className="text-4xl uppercase text-wrap font-sans font-extrabold">
                  {Items[index]?.contry}
                </h1>
                <p className=" opacity-60 font-light text-sm mt-5 mb-12">
                  {Items[index]?.des}
                </p>
                <Button
                  href="/components/sliders/jewelry"
                  variant="link"
                  className=" w-fit"
                >
                  Explore More Sliders
                </Button>
              </div>
              <div className="w-2/3 h-full gap-5 flex justify-end items-center">
                {Items[index]?.gods?.map((location, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.1 + 1,
                      ease: "easeOut",
                      type: "spring",
                    }}
                    className="w-[25%] h-[50%] flex flex-col justify-center items-center text-white relative"
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
                        <FaAnkh className="text-[10px] text-gold " />
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
              className="w-7 aspect-square border border-gold hover:bg-gold hover:text-black rounded-full flex justify-center items-center duration-300"
            >
              <GoChevronLeft />
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-7 aspect-square border border-gold hover:bg-gold hover:text-black rounded-full flex justify-center items-center duration-300"
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
