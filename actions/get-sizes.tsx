import { getApiUrlSync } from "@/lib/store";
import { Size } from "@/types";

const URL = `${getApiUrlSync()}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getSizes;
