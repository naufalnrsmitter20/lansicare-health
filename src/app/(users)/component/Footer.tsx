"use client";

import React from "react";
import Image from "next/image";
import LogoFooter from "@/public/logo-baru.png";

export default function Footer() {
  const Resource = [
    {
      name: "Next js",
      href: "https://nextjs.org/",
    },
    {
      name: "Tailwind CSS",
      href: "https://tailwindcss.com/",
    },
    {
      name: "Typescript",
      href: "https://www.typescriptlang.org/",
    },
    {
      name: "Javascript",
      href: "https://www.javascript.com/",
    },
    {
      name: "MongoDB",
      href: "https://www.mongodb.com/",
    },
    {
      name: "Figma",
      href: "https://figma.com/",
    },
  ];

  const socialMedia = [
    {
      name: "Github",
      href: "https://github.com/Fast-and-Serious-Production",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/innosync_",
    },
  ];
  return (
    <>
      <section>
        <footer className="dark:bg-basetext-base-100 w-screen bg-base-150 lg:w-auto ">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-20">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <p className="text-xl font-semibold">Lansifera</p>
              </div>
              <div className="grid gap-8 sm:grid-cols-3 sm:gap-6 md:grid-cols-2">
                <div className="mr-10">
                  <h2 className="mb-6 text-sm font-bold uppercase text-base-100 dark:text-white">
                    Resource
                  </h2>
                  <ul className="font-medium text-gray-500 dark:text-gray-400">
                    {Resource.map((resource, i) => (
                      <li key={i} className="mb-4">
                        <a
                          href={resource.href}
                          target="_blank"
                          className="hover:underline"
                        >
                          {resource.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-bold uppercase text-base-100 dark:text-white">
                    Follow Us
                  </h2>
                  <ul className="font-medium text-gray-500 dark:text-gray-400">
                    {socialMedia.map((media, i) => (
                      <li key={i} className="mb-4">
                        <a
                          href={media.href}
                          target="_blank"
                          className="hover:underline "
                        >
                          {media.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-darkBlue dark:border-gray-700 sm:mx-auto lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
                © 2024{" "}
                <a href="#" className="hover:underline">
                  InnoSync™
                </a>
                . All Rights Reserved.
              </span>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
