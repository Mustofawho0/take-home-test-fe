import { useLoginMutation } from '../api/useLoginMutation';
import { setCookie } from '@/utils/cookie-helper';
import { useRouter } from 'next/navigation';
import { useUserContext } from '@/supports/context/user-context';
import Swal from 'sweetalert2';

export const useAuthLogin = () => {
  const { dataUser, setUser }: any = useUserContext();
  const router = useRouter();
  const { mutateAsync: mutationAuthLogin } = useLoginMutation({
    onSuccess: (res: any) => {
      Swal.fire({
        title: 'Login Success!',
        icon: 'success',
      });
      setCookie(res.data.access_token);
      setUser({
        name: res.data.name,
        image: res.data.profile_image,
        xacstkn: res.data.access_token,
      });
      router.push('/dashboard/summary');
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
    mutationAuthLogin,
  };
};
