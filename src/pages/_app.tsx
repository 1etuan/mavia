import { CircularProgress } from '@mui/material';
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import FlexBox from '@/components/atoms/FlexBox';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading)
    return (
      <>
        <Seo title='FOooo' templateTitle='Bitcastlewar' />
        <FlexBox
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          flex={1}
          minHeight='100vh'
        >
          <CircularProgress color='secondary' />
        </FlexBox>
      </>
    );

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
