import { IFeaturedBoxItems } from "@/components/common/FeaturedBox";
import {
  IconClients,
  IconDashboard,
  IconInvoices,
  IconPayments,
  IconSettings,
  IconType,
  IconCatalogue,
} from "@/components/svgs";

type ISideBarItems = {
  displayName: string;
  path: string;
  Icon: React.FC<IconType>;
};

export const sideBarItems: ISideBarItems[] = [
  {
    displayName: "Dashboard",
    path: "/dashboard",
    Icon: IconDashboard,
  },
  {
    displayName: "Clients",
    path: "/clients",
    Icon: IconClients,
  },
  {
    displayName: "Catalogue",
    path: "/catalogue",
    Icon: IconCatalogue,
  },
  {
    displayName: "Invoices",
    path: "/invoices",
    Icon: IconInvoices,
  },
  // {
  //   displayName: "Payments",
  //   path: "/payments",
  //   Icon: IconPayments,
  // },
  {
    displayName: "Settings",
    path: "/settings",
    Icon: IconSettings,
  },
];

export const featuredItems: IFeaturedBoxItems[] = [
  { label: "No. of Clients", title: "100" },
  { label: "Catalogue Size", title: "158" },
  { label: "Pending Invoices", title: "17" },
  { label: " Expired Invoices", title: "8" },
];
