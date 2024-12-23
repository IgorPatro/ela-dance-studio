export const homeUrl = "";
export const aboutUrl = "about";
export const welcomeUrl = "welcome";
export const pricingUrl = "pricing";
export const contactUrl = "contact";
export const faqUrl = "faq";
export const stepsUrl = "steps";

export const getNavigation = (isHome: boolean) => [
  {
    name: "Home",
    link: isHome ? "#" + homeUrl : "/",
  },
  {
    name: "O mnie",
    link: isHome ? "#" + aboutUrl : "/",
  },
  {
    name: "Pierwsze kroki",
    link: isHome ? "#" + stepsUrl : "/",
  },
  {
    name: "Wprowadzenie",
    link: isHome ? "#" + welcomeUrl : "/",
  },
  {
    name: "Cennik",
    link: isHome ? "#" + pricingUrl : "/",
  },
  //   {
  //     name: "Opinie",
  //     link: isHome ?  "#" +"#testimonials": "/",
  //   },
  {
    name: "FAQ",
    link: isHome ? "#" + faqUrl : "/",
  },
  {
    name: "Kontakt",
    link: isHome ? "#" + contactUrl : "/",
  },
];
