import {
  ElectricityRechargeIcon,
  FavouriteIcon,
  Home,
  InspectionIcon,
  LeaseIcon,
  LogoutIcon,
  MaintenanceIcon,
  RentApplicationIcon,
  SupportIcon,
  SwitchToLandlordIcon,
  SwitchToPropertyManagerIcon,
  TransactionHistoryIcon,
} from "../assets/icons";
export const routesConfig = [
  {
    title: "Rented Properties",
    link: "/rented-properties",
    icon: <Home />,
    role: ["renter"],
  },
  {
    title: "My Inspections",
    link: "/my-inspections",
    role: ["renter"],
    icon: <InspectionIcon />,
  },
  {
    title: "Rent Applications",
    link: "/rent-applications",
    role: ["renter"],
    icon: <RentApplicationIcon />,
  },
  {
    title: "Transaction History",
    link: "/transaction-history",
    role: ["renter"],
    icon: <TransactionHistoryIcon />,
  },
  {
    title: "Favouries",
    link: "/favourite",
    role: ["renter"],
    icon: <FavouriteIcon />,
  },
  {
    title: "Lease Agreement",
    link: "lease-agreement",
    role: ["renter"],
    icon: <LeaseIcon />,
  },
  {
    title: "Maintenance Requests",
    link: "/maintenance-requests",
    role: ["renter"],
    icon: <MaintenanceIcon />,
  },
  {
    title: "Electricity Recharge",
    link: "/electricity-recharge",
    role: ["renter"],
    icon: <ElectricityRechargeIcon />,
  },
  {
    title: "Switch to Landlord",
    link: "/landlords",
    role: ["renter"],
    icon: <SwitchToLandlordIcon />,
  },
  {
    title: "Switch to Property Manager",
    link: "/property-managers",
    role: ["renter"],
    icon: <SwitchToPropertyManagerIcon />,
  },
  {
    title: "Support",
    link: "/support",
    role: ["renter"],
    icon: <SupportIcon />,
  },
  {
    title: "Logout",
    link: "/login",
    role: ["renter", "propertyManager", "landlord"],
    icon: <LogoutIcon />,
  },
];
