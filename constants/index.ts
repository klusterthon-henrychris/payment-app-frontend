import {
  IconClients,
  IconDashboard,
  IconInvoices,
  IconPayments,
  IconSettings,
  IconType,
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
    displayName: "Invoices",
    path: "/invoices",
    Icon: IconInvoices,
  },
  {
    displayName: "Payments",
    path: "/payments",
    Icon: IconPayments,
  },
  {
    displayName: "Settings",
    path: "/settings",
    Icon: IconSettings,
  },
];
