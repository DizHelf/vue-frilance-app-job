import { createRouter, createWebHistory } from "vue-router";
import DevDetails from "@/pages/devs/DevDetails";
import DevList from "@/pages/devs/DevList";
import DevRegistration from "@/pages/devs/DevRegistration";
import ContactDev from "@/pages/requests/ContactDev";
import RequestReceived from "@/pages/requests/RequestReceived";
import NotFaund from "@/pages/NotFaund";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/devs",
    },
    {
      path: "/devs",
      component: DevList,
    },
    {
      path: "/devs/:id",
      component: DevDetails,
      children: [
        {
          path: "contacts",
          component: ContactDev,
        },
      ],
    },
    {
      path: "/register",
      component: DevRegistration,
    },
    {
      path: "/requests",
      component: RequestReceived,
    },
    {
      path: "/:notFound(.*)",
      component: NotFaund,
    },
  ],
});

export default router;
