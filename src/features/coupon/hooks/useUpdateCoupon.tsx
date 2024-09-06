import { useUpdateCouponMutation } from '../api/useUpdateCouponMutation';
import { useGetCoupon } from './useGetCoupon';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export const useUpdateCoupon = () => {
  const router = useRouter();
  const { refetch } = useGetCoupon();
  const { mutateAsync: updateCoupon } = useUpdateCouponMutation({
    onSuccess: (res: any) => {
      Swal.fire({
        title: res.data.response_message,
        icon: 'success',
      });
      router.push('/dashboard/coupon');
      refetch();
    },
    onError: (err: any) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    },
  });
  return {
    updateCoupon,
  };
};
