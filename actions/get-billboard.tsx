import { getApiUrlSync } from "@/lib/store";
import { Billboard } from "@/types";

const URL = `${getApiUrlSync()}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getBillboard;
