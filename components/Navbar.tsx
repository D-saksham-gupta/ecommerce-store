import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";

import "./logo2.jpg";

const Navbar = async () => {
  const categories = await getCategories();

  //console.log(categories);

  return (
    <div className="bg-gray-50 flex">
      <MainNav data={categories} />
      <div className="flex-1 flex flex-col">
        <NavbarActions />
      </div>
    </div>
  );
};
export default Navbar;
