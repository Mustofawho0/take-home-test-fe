import { useGetTopBuyerMutation } from '../api/useGetTopBuyerQuery';

export const useGetTopBuyer = () => {
  const { data, isLoading } = useGetTopBuyerMutation();

  return {
    dataTopBuyer: data?.data.items,
    isLoading,
  };
};
