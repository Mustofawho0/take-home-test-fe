import { useCreateCouponMutation } from '../api/useCreateCouponMutation';
import { useGetCoupon } from './useGetCoupon';
import Swal from 'sweetalert2';

export const useCreateCoupon = () => {
  const { refetch } = useGetCoupon();
  const { mutateAsync: createCoupon } = useCreateCouponMutation({
    onSuccess: (res: any) => {
      Swal.fire({
        title: res.data.response_message,
        icon: 'success',
      });
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
    createCoupon,
  };
};
