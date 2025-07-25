import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("940aeabd-b6a5-45af-86f2-a4e4e8d079ba");
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10 ">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 lg:px-8 sm:px-6">
          <ProductList title="Spotlight Items" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
