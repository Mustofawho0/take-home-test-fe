import { useGetTopStoreQuery } from '../api/useGetTopStoreQuery';

export const useGetTopStore = () => {
  const { data, isLoading } = useGetTopStoreQuery();

  return {
    dataTopStore: data?.data.items,
    isLoading,
  };
};
