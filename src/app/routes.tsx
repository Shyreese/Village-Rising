import { createBrowserRouter } from "react-router";
import { HomePage } from "./components/HomePage";
import { ProgramsPage } from "./components/programs/ProgramsPage";
import { AboutPageView } from "./components/about/AboutPageView";
import { BoardPageView } from "./components/board/BoardPageView";
import { ContactPageView } from "./components/contact/ContactPageView";
import { ApplyPageView } from "./components/apply/ApplyPageView";
import { DonatePageView } from "./components/donate/DonatePageView";
import { GetInvolvedPageView } from "./components/GetInvolvedPageView";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/programs",
    Component: ProgramsPage,
  },
  {
    path: "/about",
    Component: AboutPageView,
  },
  {
    path: "/board",
    Component: BoardPageView,
  },
  {
    path: "/contact",
    Component: ContactPageView,
  },
  {
    path: "/apply",
    Component: ApplyPageView,
  },
  {
    path: "/donate",
    Component: DonatePageView,
  },
  {
    path: "/involved",
    Component: GetInvolvedPageView,
  },
]);
