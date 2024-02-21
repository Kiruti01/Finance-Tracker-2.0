// import Manager from "@/components/manager/manager";
import AddCategory from "@/components/MyFinanceComponents/AddCategory";
import Items from "@/components/MyFinanceComponents/Items";
import getCategories from "@/lib/getCategories";
import React from "react";

interface Categories {
  id: string;
  name: string;
  TotalAmount: number;
  userId: string;
}
const Page = async () => {
  const Categories = (await getCategories()) as Categories[];

  console.log(Categories);
  if (Array.isArray(Categories)) {
    if (Categories.length === 0) {
      return (
        <div>
          No categories found
          <div>
            <AddCategory />
          </div>
        </div>
      );
    }
  }

  return (
    <div className="container mx-auto mt-6 ">
      <Items categories={Categories} />
    </div>
  );
};

export default Page;
