'use client';
import { useGetDetailOrder } from '@/features/order/hooks/useGetDetailOrder';
import DetailOrder from '@/components/detail-order';
export default function DetailOrderPage(params: any) {
  const { detailOrder } = useGetDetailOrder(params.params.detailOrder);

  return (
    <div className='min-h-screen'>
      <div className='flex flex-col'>
        <h1 className='font-bold text-2xl text-gray-800 pb-4 px-4'>
          Detail Order
        </h1>
        <div className='border border-b-gray-400 w-[85vw] flex items-center justify-center m-auto'></div>
        <DetailOrder detail={detailOrder?.data} />
      </div>
    </div>
  );
}
