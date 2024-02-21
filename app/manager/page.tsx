import AddCategory from "@/components/MyFinanceComponents/AddCategory";
import Items from "@/components/MyFinanceComponents/Items";
import getCategories from "@/lib/getCategories";

const Page = async () => {
  const categories = await getCategories();

  //   if (Array.isArray(categories)) {
  //     if (categories.length === 0) {
  return (
    <div>
      No categories found
      <div>
        <AddCategory />
        <div className="container mx-auto mt-6 ">
          <Items categories={categories} />
        </div>
      </div>
    </div>
  );

  //   return (
  //     <div className="container mx-auto mt-6 ">
  //       <Items categories={categories} />
  //     </div>
  //   );
};

export default Page;
