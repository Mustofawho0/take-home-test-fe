import { useGetDetailCouponQuery } from '../api/useGetDetailCouponQuery';

export const useGetDetailCoupon = (code: string) => {
  const { data, isLoading } = useGetDetailCouponQuery(code);

  return {
    detailCoupon: data,
    isLoading,
  };
};
