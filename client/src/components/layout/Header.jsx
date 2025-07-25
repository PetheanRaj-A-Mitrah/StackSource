"use client";
import Link from "next/link";
import { StrapiImage } from "../StrapiImage";
import { useState } from "react";


export function Header({ data }) {

  if (!data) return null;

  const { logo, navigation, cta } = data;
  const headerLogo = logo && logo.length > 0 ? logo[0] : null;
  const headerCta = cta && cta.length > 0 ? cta[0] : null;

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 font-bold bg-theme-bg text-theme-text z-50 px-4 py-3 sm:py-4 flex items-center justify-between shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]">
      {headerLogo && headerLogo.logo_img && (
        <Link href="/">
          <StrapiImage
            src={headerLogo.logo_img.url}
            alt={headerLogo.logo_img.alternativeText || "Mitrahsoft Logo"}
            width={120}
            height={80}
          />
        </Link>
      )}
      <div className="hidden md:flex items-center space-x-8">
        <ul className="flex space-x-6">
          {navigation.map((item) => (
            <li key={item.id} className="relative group hover:text-blue-500 transition-colors duration-200 ">
              <Link
                href={item.href}
                target={item.isExternal ? "_blank" : "_self"}
                className="flex items-center"
              >
                {item.Name}
                {item.MenuItems && item.MenuItems.length > 0 && (
                  <svg
                    className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </Link>
              {item.MenuItems && item.MenuItems.length > 0 && (
                <div className="fixed left-0 right-0 top-[64px] w-full px-0 bg-theme-bg text-theme-text rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 z-30 flex justify-evenly">
                  <div className="absolute -top-4 left-0 w-full h-4" />
                  <div className="flex w-full max-w-7xl min-h-[340px] mx-auto px-4 sm:px-12 py-6 sm:py-10 justify-center items-center gap-6 sm:gap-12 overflow-x-auto">
                    <div className="w-full sm:w-1/3 pr-0 sm:pr-12 flex flex-col border-r border-theme-border justify-center items-start">
                      <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-theme-text">{item.Name}<span className="text-theme-primary">.</span></h3>

                      <>
                        <p className="mb-5 text-theme-link text-base">Get <a href="#" className="underline text-theme-text">software development services</a>, built around your needs:</p>
                        <ul className="mb-8 text-base sm:text-lg font-semibold text-theme-text space-y-2">
                          <li>Staff Augmentation</li>
                          <li>Dedicated Teams</li>
                          <li>Software Outsourcing</li>
                        </ul>
                        <div className="border-t border-theme-border pt-5 mt-auto w-full">
                          <div className="flex items-center mb-2">
                            <img src="https://assets.Mitrahsoft.com//image/upload/c_limit,w_120/fl_sanitize/v1/www/core/rolls_royce_default_6583f2d285.svg" alt="Rolls-Royce" className="h-6 w-auto mr-2" />
                            <span className="text-xs font-semibold text-theme-link">Rolls-Royce<sup>®</sup></span>
                          </div>
                          <p className="text-xs text-theme-link">We built an app for real-time nuclear plant monitoring. <a href="#" className="underline text-theme-text">Read case study.</a></p>
                        </div>
                      </>
                    </div>
                    <div className="w-full sm:w-2/3 pl-0 sm:pl-12 flex flex-col justify-center">
                      {item.Name === "Solutions" ? (
                        <>
                          <div className="flex flex-col sm:flex-row gap-x-0 sm:gap-x-20 mb-6">
                            <div className="mb-4 sm:mb-0">
                              <h6 className="font-bold text-theme-primary mb-3 flex items-center text-nowrap text-xs tracking-widest uppercase"><span className="mr-2 text-base">●</span>Top Solutions</h6>
                              <ul className="grid grid-cols-2 gap-x-6 sm:gap-x-12 gap-y-2 text-base">
                                {item.MenuItems.filter(sub => sub.Category === "Top Solutions").map((sub) => (
                                  <li key={sub.id} className="mb-1">
                                    <Link href={sub.href} className="hover:text-theme-primary text-nowrap">
                                      {sub.Name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h6 className="font-bold text-theme-primary mb-3 flex items-center text-nowrap text-xs tracking-widest uppercase"><span className="mr-2 text-base">●</span>Enterprise Focused</h6>
                              <ul className="space-y-2 text-base">
                                {item.MenuItems.filter(sub => sub.Category === "Enterprise Focused").map((sub) => (
                                  <li key={sub.id} className="mb-1">
                                    <Link href={sub.href} className="hover:text-theme-primary">
                                      {sub.Name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                        </>
                      ) : item.Name === "About" ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                          {[...new Set(item.MenuItems.map(sub => sub.Category))].map((cat) => (
                            <div key={cat}>
                              <h6 className="font-bold text-theme-primary mb-2">{cat?.toUpperCase()}</h6>
                              <ul>
                                {item.MenuItems.filter(sub => sub.Category === cat).map((sub) => (
                                  <li key={sub.id} className="mb-1">
                                    <Link href={sub.href} className="hover:text-theme-primary">
                                      {sub.Name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-4">
                          {item.MenuItems.map((sub) => (
                            <li key={sub.id} className="mb-1">
                              <Link href={sub.href} className="hover:text-theme-primary">
                                {sub.Name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="mt-auto pt-4">
                        <Link href={item.href} className="font-semibold text-theme-text hover:text-theme-primary flex items-center text-base">
                          All {item.Name} <span className="ml-1">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
        {headerCta && (
          <Link href={headerCta.href} target={headerCta.isExternal ? "_blank" : "_self"}>
            <button className="bg-black text-white px-4 py-2 hover:border rounded-md hover:bg-white hover:text-black transition-colors duration-200 w-full">
              {headerCta.Name}
            </button>
          </Link>
        )}
      </div>
      <button
        className="md:hidden flex items-center px-2 py-1 border rounded text-theme-text border-theme-border hover:bg-theme-btn focus:outline-none"
        aria-label="Open menu"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {mobileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex flex-col">
          <div className="bg-theme-bg shadow-lg w-full max-w-full p-6 pt-4 flex flex-col gap-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              {headerLogo && headerLogo.logo_img && (
                <Link href="/" onClick={() => setMobileOpen(false)}>
                  <StrapiImage
                    src={headerLogo.logo_img.url}
                    alt={headerLogo.logo_img.alternativeText || "Mitrahsoft Logo"}
                    className="h-8 w-auto"
                    width={120}
                    height={32}
                  />
                </Link>
              )}
              <button
                className="p-2 rounded hover:bg-theme-btn"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col gap-4">
              {navigation.map((item) => (
                <li key={item.id} className="relative">
                  <Link
                    href={item.href}
                    target={item.isExternal ? "_blank" : "_self"}
                    className="flex items-center text-lg font-semibold py-2 text-theme-text hover:text-theme-primary"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.Name}
                  </Link>
                  {item.MenuItems && item.MenuItems.length > 0 && (
                    <ul className="mt-2 ml-4 flex flex-col gap-2">
                      {item.MenuItems.map((sub) => (
                        <li key={sub.id}>
                          <Link href={sub.href} className="text-base text-theme-link hover:text-theme-primary" onClick={() => setMobileOpen(false)}>
                            {sub.Name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            {headerCta && (
              <Link href={headerCta.href} target={headerCta.isExternal ? "_blank" : "_self"} onClick={() => setMobileOpen(false)}>
                <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors duration-200 w-full">
                  {headerCta.Name}
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}  