import { useGetExportCouponQuery } from '../api/useGetExportCouponQuery';

export const useGetExportCoupon = () => {
  const { data, isLoading } = useGetExportCouponQuery();

  return {
    exportCoupon: data || null,
    isLoading,
  };
};
