import { useGetCouponQuery } from '../api/useGetCouponQuery';

export const useGetCoupon = (page: any, perPage: any) => {
  const { data, isLoading, refetch } = useGetCouponQuery(page, perPage);

  return {
    dataCoupon: data?.data,
    isLoading,
    refetch,
  };
};
