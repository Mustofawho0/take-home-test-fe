'use client';
import * as React from 'react';
import { Formik, Field, Form } from 'formik';
import { useUpdateProfile } from '@/features/auth/hooks/useUpdateProfile';
import { useGetProfile } from '@/features/auth/hooks/useGetProfile';
export default function ModalUpdateProfile() {
  const { dataProfile } = useGetProfile();
  const { updateProfile } = useUpdateProfile();
  const [upload, setUpload]: any = React.useState([]);

  const onSetFile = (e: any) => {
    try {
      const acceptedFormat = ['jpg', 'jpeg', 'webp', 'png', 'gif'];
      const files = [...e.target.files];
      files.forEach((file: any) => {
        if (
          !acceptedFormat.includes(
            file.name.split('.')[file.name.split('.').length - 1]
          )
        ) {
          throw { message: `${file.name} Format Not Acceptable` };
        }
        if (file.size > 100000000) {
          throw { message: `${file.name} is too Large!` };
        }
      });
      if (files.length > 1) throw { message: `Selected File More Than 1` };
      setUpload(files);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button
        className='btn bg-blue-800 text-white hover:bg-blue-800 border-1 border-blue-800 hover:border-blue-800'
        onClick={() => {
          const modal = document.getElementById(
            'my_modal_1'
          ) as HTMLDialogElement;
          modal.showModal();
        }}
      >
        Update Profile
      </button>
      {dataProfile ? (
        <Formik
          initialValues={{
            name: dataProfile?.name,
          }}
          onSubmit={(values, { resetForm }) => {
            const fd = new FormData();
            fd.append('name', values.name);
            upload.forEach((file: any) => {
              fd.append('profile_image', file);
            });
            updateProfile(fd);
            resetForm();
          }}
        >
          <dialog id='my_modal_1' className='modal'>
            <div className='modal-box'>
              <h3 className='font-bold text-lg text-center'>UPDATE PROFILE</h3>
              <Form>
                <div className='flex flex-col pb-2'>
                  <label className='font-semibold text-gray-600' htmlFor='name'>
                    Name
                  </label>
                  <Field
                    type='text'
                    name='name'
                    className='px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                </div>
                <fieldset className='w-full pb-4'>
                  <label className='form-control '>
                    <div className='label'>
                      <span className='label-text'>Upload Profile Image</span>
                    </div>
                    <input
                      type='file'
                      accept='image/*'
                      onChange={(event) => onSetFile(event)}
                      multiple
                      placeholder='Upload Product Image'
                      className='px-8 py-10 border-2 border-dashed rounded-md border-gray-300 text-gray-600 bg-gray-100'
                    />
                  </label>
                </fieldset>
                <div className='flex flex-col justify-center'>
                  <button
                    type='submit'
                    className='border-2 border-blue-600 text-blue-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-600 hover:text-white'
                  >
                    Save Changes
                  </button>
                  <div className='text-xs text-red-500 flex justify-center pt-5'>
                    *Click esc to close
                  </div>
                </div>
              </Form>
            </div>
          </dialog>
        </Formik>
      ) : (
        <div>Loadingg....</div>
      )}
    </div>
  );
}
