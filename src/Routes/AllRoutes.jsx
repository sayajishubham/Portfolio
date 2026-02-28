import Discription from "@/components/Discription";
import ScrollToTop from "@/components/ScrollTop";
import AppLayout from "@/Pages/AppLayout";
import Home from "@/Pages/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
export default function AllRoutes() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence mode="wait">
        {/* <ScrollToTop /> */}
        <Routes>
          <Route
            path="/"
            location={location}
            key={location.pathname}
            element={<AppLayout />}
          >
            <Route index element={<Home />}></Route>
            <Route path="/des/:id" element={<Discription />}></Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}
