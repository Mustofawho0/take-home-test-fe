import { useGetMonthlyQuery } from '../api/useGetMonthlyQuery';

export const useGetSummaryMonthly = (startMonth: string, endMonth: string) => {
  const { data, isLoading } = useGetMonthlyQuery(startMonth, endMonth);

  return {
    dataMonthly: data?.data.items,
    isLoading,
  };
};
