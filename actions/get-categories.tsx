import { getApiUrlSync } from "@/lib/store";
import { Category } from "@/types";

const URL = `${getApiUrlSync()}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getCategories;
