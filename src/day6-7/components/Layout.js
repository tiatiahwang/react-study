import { Link } from 'react-router-dom';

const Layout = ({
  canGoBack = false,
  title,
  bgUrl = '',
  children,
}) => {
  return (
    <div className='w-full min-h-screen fixed inset-0 overflow-auto p-4 bg-[#F2D164]'>
      {bgUrl === '' ? (
        <div className='mx-auto max-w-xl space-y-4 p-4 shadow-2xl '>
          <h1 className='text-center text-4xl text-[#D44044] font-bold'>
            {title}
          </h1>
          {children}
        </div>
      ) : (
        <div
          className='mx-auto max-w-xl space-y-4 shadow-2xl h-full'
          style={{
            backgroundImage: `url(${bgUrl})`,
            backgroundSize: 'cover',
          }}
        >
          <div className='bg-black/50 h-full p-4 overflow-auto'>
            <div className='flex items-center justify-center relative'>
              <div className='absolute left-0'>
                {canGoBack ? (
                  <Link to='/' className='text-[#D44044]'>
                    <svg
                      className='h-6 w-6'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='4'
                        d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
                      ></path>
                    </svg>
                  </Link>
                ) : null}
              </div>
              <h1 className='text-4xl text-[#D44044] font-bold'>
                {title}
              </h1>
            </div>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};
export default Layout;
