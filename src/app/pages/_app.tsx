// src/pages/_app.tsx
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { analytics } from '../config/firebaseConfig';
import { logEvent } from 'firebase/analytics';


import '../../../public/css/style.css'
import '../../../public/css/bootstrap.min.css'
import '../../../public/css/tiny-slider.css'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const logPageView = (url: string) => {
      if (analytics) {
        logEvent(analytics, 'page_view', { page_path: url });
      }
    };

    router.events.on('routeChangeComplete', logPageView);
    logPageView(window.location.pathname);

    return () => {
      router.events.off('routeChangeComplete', logPageView);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
