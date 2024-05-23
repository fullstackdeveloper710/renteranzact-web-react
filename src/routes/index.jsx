import React, { Suspense } from "react";
import Dashboard from "../dashboard";
import { Outlet, useRoutes } from "react-router-dom";
import HomePage from "../pages";
import Blogs from "../pages/Blogs";
import BlogDetail from "../pages/Blogs/detail";
import AboutUs from "../pages/AboutUs";
import Careers from "../pages/Careers";
import Testimonials from "../pages/Testimonials";
import PrivacyPolicy from "../pages/privacy-policy";
import DataProtection from "../pages/data-protection";
import ContactUs from "../pages/contactUs";
import ReferAndEarn from "../pages/referAndEarn";
import FAQ from "../pages/FAQ";
import PropertyManagement from "../pages/property-management";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import EmailVerification from "../pages/auth/EmailVerification";
import ForgotPassword from "../pages/auth/Forgot-password";
import CreateNewPassword from "../pages/auth/Create-new-password";
import RenterLandingPage from "../pages/renter";

import MyInspections from "../pages/renter/my-inspections";
import RentApplications from "../pages/renter/rent-application";

import PropertiesInDemand from "../pages/renter/properties-in-demand";
import RentedProperties from "../pages/renter/rentedProperties";
import RentedPropertyDetail from "../pages/renter/rentedProperties/detail";


const AppRoutes = () => {
  const routes = useRoutes([
    {
      element: (
        <Dashboard>
          <Suspense fallback={<>Loading</>}>
            <Outlet />
          </Suspense>
        </Dashboard>
      ),
      children: [
        {
          element: <HomePage />,
          path: "/",
        },
        {
          element: <Blogs />,
          path: "/blogs",
        },
        {
          element: <BlogDetail />,
          path: "/blog-detail",
        },
        {
          element: <AboutUs />,
          path: "/aboutUs",
        },
        {
          element: <Careers />,
          path: "/careers",
        },
        {
          element: <Testimonials />,
          path: "/testimonials",
        },
        {
          element: <PrivacyPolicy />,
          path: "/privacy-policy",
        },
        {
          element: <DataProtection />,
          path: "/data-protection",
        },
        {
          element: <ContactUs />,
          path: "/contactUs",
        },
        {
          element: <ReferAndEarn />,
          path: "/refer-and-earn",
        },
        {
          element: <FAQ />,
          path: "/faq",
        },
        {
          element: <PropertyManagement />,
          path: "/property-management",
        },
        {
          element: <Login />,
          path: "/login",
        },
        {
          element: <SignUp />,
          path: "/signup",
        },
        {
          element: <EmailVerification />,
          path: "/email-verification",
        },
        {
          element: <ForgotPassword />,
          path: "/forgot-password",
        },
        {
          element: <CreateNewPassword />,
          path: "/create-password",
        },
        {
          element: <RenterLandingPage />,
          path: "/renter",
        },
        {

          element: <MyInspections />,
          path: "/my-inspections",
        },
        {
          element: <RentApplications />,
          path: "/rent-applications",

          element: <PropertiesInDemand />,
          path: "/properties-in-demand",
        },
        {
          element: <RentedProperties />,
          path: "/rented-properties",
        },
        {
          element: <RentedPropertyDetail />,
          path: "/rented-property-detail",

        },
      ],
    },
  ]);

  return routes;
};

export default AppRoutes;
