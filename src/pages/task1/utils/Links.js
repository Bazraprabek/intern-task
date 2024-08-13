import HeroSection from "../layout/HeroSection";
import MostPopularDestination from "../layout/MostPopularDestination";
import BookTrip from "../layout/BookTrip";
import Services from "../layout/Services";
import Gallery from "../layout/Gallery";
import Review from "../layout/Review";
import Contact from "../layout/Contact";

export const links = [
  {
    title: "Home",
    path: "",
    component: HeroSection, // Specify the component to render
    className: "", // Specify any additional class names
  },
  {
    title: "Popular",
    path: "popular",
    component: MostPopularDestination,
  },
  {
    title: "BookTrip",
    path: "booktrip",
    component: BookTrip,
  },
  {
    title: "Services",
    path: "services",
    component: Services,
  },
  {
    title: "Gallery",
    path: "gallery",
    component: Gallery,
  },
  {
    title: "Review",
    path: "review",
    component: Review,
  },
  {
    title: "Contact",
    path: "contact",
    component: Contact,
  },
];
