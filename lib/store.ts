export interface Store {
  id: string;
  name: string;
}

export async function getDefaultStore(): Promise<Store | null> {
  try {
    const response = await fetch(
      `https://ecommerce-admin-sa.vercel.app/api/stores`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch stores");
    }

    const stores = await response.json();

    return stores.length > 0 ? stores[0] : null;
  } catch (error) {
    console.error("Error fetching default store:", error);
    return null;
  }
}

export const FALLBACK_STORE_ID = "a13f3aad-8cad-420c-baa3-80dec130d8bd";

export async function getApiUrl(): Promise<string> {
  const store = await getDefaultStore();
  const storeId = store?.id || FALLBACK_STORE_ID;

  return `https://ecommerce-admin-sa.vercel.app/api/${storeId}`;
}

export function getApiUrlSync(): string {
  return `https://ecommerce-admin-sa.vercel.app/api/${FALLBACK_STORE_ID}`;
}
