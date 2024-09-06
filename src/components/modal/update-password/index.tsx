'use client';
import { Formik, Field, Form } from 'formik';
import { useUpdatePassword } from '@/features/auth/hooks/useUpdatePassword';
export default function ModalUpdatePassword() {
  const { updatePassword } = useUpdatePassword();
  return (
    <div>
      <div>
        <button
          className='btn bg-blue-800 text-white hover:bg-blue-800 border-1 border-blue-800 hover:border-blue-800'
          onClick={() => {
            const modal = document.getElementById(
              'my_modal_2'
            ) as HTMLDialogElement;
            modal.showModal();
          }}
        >
          Update Password
        </button>
        <dialog id='my_modal_2' className='modal'>
          <div className='modal-box'>
            <h3 className='font-bold text-lg text-center'>UPDATE PASSWORD</h3>
            <Formik
              initialValues={{
                password: '',
                new_password: '',
                confirm_password: '',
              }}
              onSubmit={(values) => {
                updatePassword({
                  current_password: values.password,
                  new_password: values.new_password,
                  new_password_confirmation: values.confirm_password,
                });
              }}
            >
              <Form>
                <div className='flex flex-col pt-2'>
                  <label
                    className='font-semibold text-gray-600'
                    htmlFor='password'
                  >
                    Currect Password
                  </label>
                  <Field
                    type='text'
                    name='password'
                    className='px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label
                    className='font-semibold text-gray-600'
                    htmlFor='new_password'
                  >
                    New Password
                  </label>
                  <Field
                    type='text'
                    name='new_password'
                    className='px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                </div>
                <div className='flex flex-col'>
                  <label
                    className='font-semibold text-gray-600'
                    htmlFor='confirm_password'
                  >
                    Confirm Password
                  </label>
                  <Field
                    type='text'
                    name='confirm_password'
                    className='px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                </div>
                <div className='flex flex-col justify-center pt-5'>
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
            </Formik>
          </div>
        </dialog>
      </div>
    </div>
  );
}
