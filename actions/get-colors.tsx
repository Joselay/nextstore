import { getApiUrlSync } from "@/lib/store";
import { Color } from "@/types";

const URL = `${getApiUrlSync()}/colors`;

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getColors;
