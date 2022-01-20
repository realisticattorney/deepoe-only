import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { BuilderComponent, Builder, builder } from '@builder.io/react';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import '../components/FaqSection';
import '../components/FaqQuestion';
import { useEffect } from 'react';
import Script from 'next/script';

const BUILDER_API_KEY = '9886b56a779b4bbfa9835e6e7938f1e6';
builder.init(BUILDER_API_KEY);

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ page: string[] }>) {
  const page =
    (await builder
      .get('page', {
        userAttributes: {
          urlPath: '/' + (params?.page?.join('/') || ''),
        },
      })
      .toPromise()) || null;

  console.log('PAGE', page);
  return {
    props: {
      page,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  const pages = await builder.getAll('page', {
    options: { noTargeting: true },
  });

  return {
    paths: pages.map((page) => `${page.data?.url}`),
    fallback: true,
  };
}

export default function Page({
  page,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  const isLive = !Builder.isEditing && !Builder.isPreviewing;
  if (!page && isLive) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
          <meta name="title"></meta>
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    );
  }

  // useEffect(() => {
  //   (async () => {
  //     const { default: ReactPixel } = await import('react-facebook-pixel');
  //     ReactPixel.init(FB_PIXEL, null, {
  //       autoConfig: true,
  //       debug: true,
  //     });
  //     ReactPixel.pageView();
  //     ReactPixel.track('ViewContent');
  //   })();
  // }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="facebook-domain-verification"
          content="ot1ezg22hof7z8194qomrznl0jhwoe"
        />
        <meta
          name="google-site-verification"
          content="0F31tahZUvZJcqhtJJ59K15BctCPq6-MDVyEiWu53ok"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-37WPFMF2V3"
        ></Script>
        <Script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-37WPFMF2V3');
  `}
        </Script>
        <Script>
          {`
!function(e){if(!window.pintrk){window.pintrk = function () {
window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var
  n=window.pintrk;n.queue=[],n.version="3.0";var
  t=document.createElement("script");t.async=!0,t.src=e;var
  r=document.getElementsByTagName("script")[0];
  r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
pintrk('load', '2614361493940', {em: '<user_email_address>'});
pintrk('page');
`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{`display:none`}}
            alt=""
            src="https://ct.pinterest.com/v3/?event=init&tid=2614361493940&pd[em]=<hashed_email_address>&noscript=1"
          />
        </noscript>
      </Head>

      <BuilderComponent model="page" content={page} />
    </>
  );
}
