import { useGetYearsQuery } from '../api/useGetYearsQuery';

export const useGetYears = () => {
  const { data, isLoading } = useGetYearsQuery();

  return {
    dataYears: data?.data.items,
    isLoading,
  };
};
