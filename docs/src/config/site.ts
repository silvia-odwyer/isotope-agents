import type { SidebarNavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "isotope-agents",
  description:
    "Landing page for Isotope Agents",
  url: "https://silvia-odwyer.github.io/isotope-agents",
  // ogImage: "",
  links: {
    twitter: "https://twitter.com/silvia_923",
    github: "https://github.com/silvia-odwyer/isotope-agents",
  },
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Get Started",
    items: [
      { title: "Templates", href: "/isotope-agents/templates" },
      { title: "GitHub", href: "https://github.com/silvia-odwyer/isotope-agents" },
    ],
  },
  {
    title: "About",
    items: [
      { title: "Blog", href: "/isotope-agents/blog" },
      { title: "Contact", href: "https://getisotope.com/contact" },
      // { title: "Changelog", href: "#" },
    ],
  },
  {
    title: "Docs",
    items: [
      { title: "Introduction", href: "#" },
      { title: "Installation", href: "#" },
      { title: "Components", href: "#" },
      { title: "Code Blocks", href: "#" },
    ],
  },
];