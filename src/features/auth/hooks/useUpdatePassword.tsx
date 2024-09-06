import { useUpdatePasswordMutation } from '../api/useUpdatePasswordMutation';
import Swal from 'sweetalert2';
import { removeCookie } from '@/utils/cookie-helper';
import { useRouter } from 'next/navigation';

export const useUpdatePassword = () => {
  const router = useRouter();
  const { mutateAsync: updatePassword } = useUpdatePasswordMutation({
    onSuccess: (res: any) => {
      Swal.fire({
        title: res.data.response_message,
        icon: 'success',
        text: 'Please login again',
      });
      removeCookie();
      router.push('/');
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
    updatePassword,
  };
};
