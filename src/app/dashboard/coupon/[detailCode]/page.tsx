'use client';
import { useGetDetailCoupon } from '@/features/coupon/hooks/useGetDetailCoupon';
import DetailCouponPage from '@/components/detail-coupon';
export default function DetailCodePage(params: any) {
  const { detailCoupon } = useGetDetailCoupon(params.params.detailCode);
  return (
    <div className='min-h-screen'>
      <div className='flex flex-col'>
        <h1 className='font-bold text-2xl text-gray-800 pb-4 px-4'>
          Detail Coupon
        </h1>
        <div className='border border-b-gray-400 w-[85vw] flex items-center justify-center m-auto'></div>
        <DetailCouponPage
          code={detailCoupon?.data.code}
          name={detailCoupon?.data.name}
          start_date={detailCoupon?.data.start_date}
          end_date={detailCoupon?.data.end_date}
        />
      </div>
    </div>
  );
}
