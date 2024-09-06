import { useUpdateProfileMutation } from '../api/useUpdateProfileMutation';
import { useGetProfile } from './useGetProfile';
import Swal from 'sweetalert2';

export const useUpdateProfile = () => {
  const { refetch } = useGetProfile();
  const { mutateAsync: updateProfile } = useUpdateProfileMutation({
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
    updateProfile,
  };
};
