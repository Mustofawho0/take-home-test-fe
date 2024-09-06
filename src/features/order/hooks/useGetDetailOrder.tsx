import { useGetDetailOrderQuery } from '../api/useGetDetailOrderQuery';

export const useGetDetailOrder = (order: string) => {
  const { data, isLoading } = useGetDetailOrderQuery(order);

  return {
    detailOrder: data,
    isLoading,
  };
};
