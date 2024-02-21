// Myfinances.tsx
import AddCategory from "@/components/MyFinanceComponents/AddCategory";
import Items from "@/components/MyFinanceComponents/Items";
import getCategories from "@/lib/getCategories";

interface Categories {
  id: string;
  name: string;
  TotalAmount: number;
  userId: string;
}

const Myfinances = async () => {
  const categories = (await getCategories()) as Categories[];
  console.log(categories);
  if (Array.isArray(categories)) {
    if (categories.length === 0) {
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
  return <Items categories={categories} />;
};

export default Myfinances;
