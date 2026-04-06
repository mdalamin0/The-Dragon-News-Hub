import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './routes/Router.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'
import Loading from './components/Loader/Loading.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Suspense fallback={<Loading/>}>
     <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
   </Suspense>
  </StrictMode>,
)
