// /manager/page
// "use server";
import AddCategory from "@/components/MyFinanceComponents/AddCategory";
import Items from "@/components/MyFinanceComponents/Items";
import getCategories from "@/lib/getCategories";

const Page = async () => {
  const categories = await getCategories();

  return (
    <>
      {Array.isArray(categories) && categories.length === 0 ? (
        <div>
          No categories found
          <div>
            <AddCategory />
          </div>
        </div>
      ) : (
        <div className="container mx-auto mt-6">
          <Items categories={categories} />
        </div>
      )}
    </>
  );
};

export default Page;
