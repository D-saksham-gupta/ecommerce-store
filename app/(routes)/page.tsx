//import getBillboard from "@/actions/get-billboard";
import getCategories from "@/actions/get-categories";
import getProducts from "@/actions/get-products";
//import Billboard from "@/components/billboard";
import CategoriesSection from "@/components/CategoriesSection";
import HeroSection from "@/components/HeroSection";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";
import ProductList from "@/components/product-list";
//import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  //const billboard = await getBillboard("940aeabd-b6a5-45af-86f2-a4e4e8d079ba");
  const products = await getProducts({});
  const fproducts = await getProducts({ isFeatured: true });
  const categories = await getCategories();
  return (
    // <Container>
    //   <div className="space-y-10 pb-10 ">
    //     {/* <Billboard data={billboard} /> */}
    //     <div className="flex flex-col gap-y-8 px-4 lg:px-8 sm:px-6">
    //       <ProductList title="Spotlight Items" items={products} />
    //     </div>
    //   </div>
    // </Container>

    <div className="min-h-screen bg-gray-50 flex">
      <MainNav data={categories} />
      <div className="flex-1 flex flex-col">
        <NavbarActions />
        <main className="flex-1 p-8">
          <HeroSection />
          <CategoriesSection data={categories} />
          <ProductList popular={fproducts} items={products} />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
