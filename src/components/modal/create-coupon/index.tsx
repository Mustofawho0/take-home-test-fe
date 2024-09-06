'use client';
import { useCreateCoupon } from '@/features/coupon/hooks/useCreateCoupon';
import { Formik, Field, Form } from 'formik';
export default function ModalCreateCoupon() {
  const { createCoupon } = useCreateCoupon();
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
        Create Coupon
      </button>
      <dialog id='my_modal_1' className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg text-center'>CREATE COUPON</h3>
          <Formik
            initialValues={{
              code: '',
              name: '',
              start_date: '',
              end_date: '',
            }}
            onSubmit={(values, { resetForm }) => {
              createCoupon({
                code: values.code,
                name: values.name,
                start_date: values.start_date,
                end_date: values.end_date,
              });
              resetForm();
            }}
          >
            <Form>
              <div className='flex flex-col pt-2'>
                <label className='font-semibold text-gray-600' htmlFor='code'>
                  Code
                </label>
                <Field
                  type='text'
                  name='code'
                  className='px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <div className='flex flex-col pt-2'>
                <label className='font-semibold text-gray-600' htmlFor='name'>
                  Name
                </label>
                <Field
                  type='text'
                  name='name'
                  className='px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <div className='flex flex-col pt-2'>
                <label
                  className='font-semibold text-gray-600'
                  htmlFor='start_date'
                >
                  Start Date
                </label>
                <Field
                  type='date'
                  name='start_date'
                  className='px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <div className='flex flex-col pt-2'>
                <label
                  className='font-semibold text-gray-600'
                  htmlFor='end_date'
                >
                  End Date
                </label>
                <Field
                  type='date'
                  name='end_date'
                  className='px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <div className='flex flex-col justify-center pt-5'>
                <button
                  type='submit'
                  className='border-2 border-blue-600 text-blue-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-600 hover:text-white'
                >
                  Create Coupon
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
  );
}
