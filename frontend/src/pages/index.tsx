// import Image from "next/image";
// import localFont from "next/font/local";
import Layout from "@/components/Layout";
import Hero from "@/components/Home/Hero";
import FlashDeals from "@/components/Home/FlashDeals";
import CategoryCollection from "@/components/Home/CategoryCollection";
import TopStores from "@/components/Home/TopStores";
import RecommendedProducts from "@/components/Home/RecommendedProducts";
import MoreStores from "@/components/Home/MoreStores";
import TopRatedPoducts from "@/components/Home/TopRatedPoducts";
import TodayDeals from "@/components/Home/TodayDeals";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FlashDeals/>
      <CategoryCollection/>
      <TopStores/>
      <RecommendedProducts/>
      <MoreStores/>
      <TopRatedPoducts/>
      <TodayDeals/>
    </Layout>
  );
}
