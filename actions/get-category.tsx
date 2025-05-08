import { getApiUrlSync } from "@/lib/store";
import { Category } from "@/types";

const URL = `${getApiUrlSync()}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getCategory;
