import Link from "next/link";
import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import Image from "next/image";
import "./logo2.jpg";

const Navbar = async () => {
  const categories = await getCategories();

  //console.log(categories);

  return (
    <div className="border-b">
      <Container>
        <div className="relative flex items-center h-16 px-3 sm:px-4 lg:px-6">
          <Link href="/" className="flex ml-4 lg:ml-0 gap-x-2">
            {/* <p className="text-xl font-bold">Chikan Stop</p> */}
            <Image
              src="/logo2.jpg"
              alt="Logo"
              className="rounded-full"
              width={45}
              height={45}
              priority
            />
          </Link>

          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};
export default Navbar;
