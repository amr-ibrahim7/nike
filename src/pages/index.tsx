import { GetServerSideProps } from "next";
import MarqueeSwiper from "~/components/MarqueeSwiper";
import SEO from "~/components/SEO";
import Hero from "~/components/ui/Hero";
import { getProducts } from "./api/products";
import ProductCarousel from "~/components/ProductCarousel";
import { ProductType } from "~/Types";

export default function Home({ data }: { data: ProductType[] }) {
  return (
    <>
      <SEO
        title="Home"
        desc="Nike store for shoes developed with nextjs, typescript, tailwind"
      />
      <Hero />
      <MarqueeSwiper />
      <ProductCarousel data={data} />
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getProducts();
  return {
    props: {
      data,
      revalidate: 0,
    },
  };
};
