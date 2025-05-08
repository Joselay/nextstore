import { getApiUrlSync } from "@/lib/store";
import { Product } from "@/types";

const URL = `${getApiUrlSync()}/products`;

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getProduct;
