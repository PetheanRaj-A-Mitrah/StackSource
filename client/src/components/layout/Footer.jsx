"use client";
import Link from "next/link";
import { StrapiImage } from "../StrapiImage";
import { Subscribe } from "../blocks/Subscribe";

export function Footer({ data }) {
  if (!data) return null;
  const { logo, Menu, Policies, copy, socialLinks } = data;
  return (
    <footer className="bg-theme-bg py-8 sm:py-10 lg:py-16 text-base lg:text-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
          <nav className="mb-8 flex flex-col gap-8 sm:flex-row sm:gap-5 lg:mb-0 lg:w-3/5 xl:w-2/3">
            <div className="flex-shrink-0 mb-6 sm:mb-0">
              {logo && logo.logo_img && (
                <Link href="/" className="inline-block">
                  <StrapiImage
                    src={logo.logo_img.url}
                    alt={logo.logo_img.alternativeText || "StackSource Logo"}
                    width={150}
                    height={80}
                  />
                </Link>
              )}
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
              {Menu && Menu.map((menuGroup) => (
                <div key={menuGroup.id} className="text-sm lg:text-base">
                  {menuGroup.href ? (
                    <Link
                      href={menuGroup.href}
                      target={menuGroup.isExternal ? "_blank" : "_self"}
                      className="font-bold text-theme-text hover:text-theme-primary mb-2 block"
                    >
                      {menuGroup.Name}
                    </Link>
                  ) : (
                    <h5 className="font-bold text-theme-text mb-2">{menuGroup.Name}</h5>
                  )}

                  {menuGroup.MenuItems && Array.isArray(menuGroup.MenuItems) && menuGroup.MenuItems.length > 0 && (
                    <ul className="space-y-1">
                      {menuGroup.MenuItems.map((item) => {
                        if (typeof item === 'object' && item !== null && item.id) {
                          return (
                            <li key={item.id}>
                              <Link
                                href={item.href}
                                target={item.isExternal ? "_blank" : "_self"}
                                className="text-theme-link hover:text-theme-primary transition-colors duration-200"
                              >
                                {item.Name}
                              </Link>
                            </li>
                          );
                        }
                        return null;
                      })}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </nav>
          <div className="lg:w-2/5 xl:w-1/3 mt-8 lg:mt-0 lg:pl-12">
            <div className="mb-8">
              <h4 className="text-lg lg:text-xl font-semibold text-theme-text mb-4">Get in touch.</h4>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 mb-4">
                <Link href="/start/basic-details" className="btn bg-gray-300 text-theme-text px-4 py-2 rounded-md hover:bg-gray-200 transition-colors duration-200 text-center sm:text-left text-base lg:text-lg w-full sm:w-auto">
                  Contact Us
                </Link>
                <Link href="/start/basic-details" className="btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center sm:justify-start text-base lg:text-lg w-full sm:w-auto">
                  Schedule a Call <span className="ml-2">→</span>
                </Link>
              </div>
              <p className="text-theme-link text-base lg:text-lg">+1 (267) 581-3323</p>
            </div>
            <div className="mb-8">
              <p className="text-theme-text mb-3 text-base lg:text-lg">
                Get insights from the experts on building and scaling technology teams.
              </p>
              <Subscribe
                headline="Subscribe to our newsletter"
                content="Stay updated with the latest news and insights from StackSource."
                placeholder="Enter your email"
                buttonText="Subscribe"
              />
            </div>
            <div className="mb-8">
              <h4 className="text-lg lg:text-xl font-semibold text-theme-text mb-4">Follow us</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks && Array.isArray(socialLinks) && socialLinks.map((socialItem) => {
                  if (typeof socialItem === 'object' && socialItem !== null && socialItem.id) {
                    return (
                      <Link key={socialItem.id} href={socialItem.href} target={socialItem.isExternal ? "_blank" : "_self"}>
                        {socialItem.social_icon && socialItem.social_icon.url && (
                          <StrapiImage
                            src={socialItem.social_icon.url}
                            alt={socialItem.social_icon.alternativeText || `Social icon for ${socialItem.href}`}
                            width={24}
                            height={24}
                            className="hover:opacity-75 transition-opacity duration-200"
                          />
                        )}
                      </Link>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-theme-border pt-8 mt-8 text-center text-sm lg:text-base text-theme-link">
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-2">
            {Policies && Array.isArray(Policies) && Policies.map((policy) => (
              <li key={policy.id} className="inline-block">
                <Link href={policy.href} className="hover:underline hover:text-theme-primary">{policy.Name}</Link>
              </li>
            ))}
          </ul>
          <p className="copy text-base lg:text-lg text-theme-text">
            &copy; {new Date().getFullYear()} {copy}
          </p>
        </div>
      </div>
    </footer>
  );
}