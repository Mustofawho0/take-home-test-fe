'use client';
import { MdLocalPhone, MdLockOutline } from 'react-icons/md';
import Link from 'next/link';
import { useAuthLogin } from '@/features/auth/hooks/useAuthLogin';
import { Formik, Form, Field } from 'formik';
export default function Home() {
  const { mutationAuthLogin } = useAuthLogin();

  return (
    <Formik
      initialValues={{
        phone: '',
        password: '',
      }}
      onSubmit={(values) => {
        try {
          mutationAuthLogin({
            phone: values.phone,
            password: values.password,
          });
        } catch (error) {
          console.log(error);
        }
      }}
    >
      <Form>
        <main className='flex items-center justify-center min-h-screen flex-col w-full flex-1 px-6 sm:px-10 md:px-20 text-center'>
          <div className='bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl'>
            <div className='w-full md:w-3/5 p-5'>
              <div className='py-10'>
                <h2 className='text-2xl md:text-3xl font-bold text-blue-600 mb-2'>
                  Sign in to Account
                </h2>
                <div className='border-2 w-10 border-blue-600 inline-block mb-2'></div>
                <div className='flex flex-col items-center pt-5'>
                  <div className='bg-gray-100 w-full sm:w-64 p-2 flex items-center gap-2 py-3 rounded-lg mb-3'>
                    <MdLocalPhone className='text-gray-400' />
                    <Field
                      type='text'
                      name='phone'
                      placeholder='021000'
                      className='bg-gray-100 outline-none text-sm flex-1'
                    />
                  </div>
                  <div className='bg-gray-100 w-full sm:w-64 p-2 flex items-center gap-2 py-3 rounded-lg mb-3'>
                    <MdLockOutline className='text-gray-400' />
                    <Field
                      type='password'
                      name='password'
                      placeholder='******'
                      className='bg-gray-100 outline-none text-sm flex-1'
                    />
                  </div>
                  <div className='flex justify-end items-center w-full sm:w-64 mb-5'>
                    <Link href={'#'}>
                      <span className='text-xs hover:text-blue-500 hover:underline'>
                        Forgot Password?
                      </span>
                    </Link>
                  </div>
                  <button
                    type='submit'
                    className='border-2 border-blue-600 text-blue-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-600 hover:text-white'
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
            <div className='w-full md:w-2/5 bg-blue-600 text-white rounded-b-2xl md:rounded-tr-2xl md:rounded-br-2xl md:rounded-bl-none py-10 md:py-36 px-8 md:px-12 flex flex-col justify-center items-center'>
              <h2 className='text-2xl md:text-3xl font-bold mb-4'>Hello!</h2>
              <div className='border-2 w-10 border-white inline-block mb-2'></div>
              <p className='text-sm md:text-base'>
                Success is not the key to happiness. Happiness is the key to
                success. If you love what you are doing, you will be successful
              </p>
            </div>
          </div>
        </main>
      </Form>
    </Formik>
  );
}
