import React from "react";
import AddCategory from "@/components/MyFinanceComponents/AddCategory";
import Items from "@/components/MyFinanceComponents/Items";
import getCategories from "@/lib/getCategories";

interface ApiResponse {
  items: {
    id: string;
    name: string;
    price: number;
    method: string;
    categoryId: string;
  }[];
  id: string;
  name: string;
  TotalAmount: number;
  userId: string;
}

const Page = async () => {
  // Fetch categories data
  const categoriesData: ApiResponse[] = await getCategories();

  if (Array.isArray(categoriesData)) {
    if (categoriesData.length === 0) {
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
      <Items categories={categoriesData} />
    </div>
  );
};

export default Page;
