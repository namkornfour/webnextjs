import useSWR from "swr";

export function useProductBySKU(sku) {
  async function fetcher(url) {
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Error can not get data from Produc API");
    }

    return res.json();
  }

  const { data, loading, mutate, error } = useSWR(
    `/api/products/${sku}`,
    fetcher
  );

  return {
    data,
    loading: !data && !error,
    mutate,
    error,
  };
}

export function useAllProducts() {
  async function fetcher(url) {
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Error can not fetch data from API");
    }

    return res.json();
  }

  const { data, loading, mutate, error } = useSWR("/api/products", fetcher);

  return {
    data,
    loading: !data && !error,
    mutate,
    error,
  };
}
