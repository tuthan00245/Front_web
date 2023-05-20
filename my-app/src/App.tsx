import { ToastContainer } from 'react-toastify';
import {useEffect} from 'react'
import MasterLayout from './layouts/Masterlayout/MasterLayout';
import { Route, Routes } from 'react-router-dom';
import { publicRouter, restrictRoutes } from './routes';

function App  () {
  useEffect(() => {

  })
  return (
    <>
      <MasterLayout>
        <Routes>
          {publicRouter.map((router, i) => {
            const Page = router.component;
            return <Route key={i} path={router.path} element={<Page />} />;
          })}
          {restrictRoutes.map((router, i) => {
            const Page = router.component;
            return <Route key={i} path={router.path} element={<Page />} />;
          })}
          <Route 
            path="*" 
            // element={<NotFound />} 
          />
        </Routes>
      </MasterLayout>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
