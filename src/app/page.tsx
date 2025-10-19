import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { FeaturedBadge } from "@/components/FeaturedBadge/FeaturedBadge";
import ProductListing from "@/components/ProductListing";
import FilterSidebar from "@/components/FilterSidebar/FilterSidebar";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Hero/>
       <FeaturedBadge />
      <div className="main-content">
        <FilterSidebar/>
        <ProductListing/>
      </div>
      <Footer/>
    </div>
  );
}
