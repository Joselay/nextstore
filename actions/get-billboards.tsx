import { getApiUrlSync } from "@/lib/store";
import { Billboard } from "@/types";

const URL = `${getApiUrlSync()}/billboards`;

const getBillboards = async (): Promise<Billboard[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getBillboards;
