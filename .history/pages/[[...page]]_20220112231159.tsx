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

/** @type {{search: React.CSSProperties}} */
const styles = {
  pinterest: {
    display: 'none',
  },
};

const FB_PIXEL = '334061461828502';

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

  useEffect(() => {
    (async () => {
      const { default: ReactPixel } = await import('react-facebook-pixel');
      ReactPixel.init(FB_PIXEL, false, {
        autoConfig: true,
        debug: true,
      });
      ReactPixel.pageView();
      ReactPixel.track('ViewContent');
    })();
  }, []);

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
            style={styles.pinterest}
            alt=""
            src="https://ct.pinterest.com/v3/?event=init&tid=2614361493940&pd[em]=<hashed_email_address>&noscript=1"
          />
        </noscript>
        <Script>
          {`
window['_fs_debug'] = false;
window['_fs_host'] = 'fullstory.com';
window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
window['_fs_org'] = '1449XM';
window['_fs_namespace'] = 'FS';
(function(m,n,e,t,l,o,g,y){
    if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
    g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];
    o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;
    y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
    g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
    g.anonymize=function(){g.identify(!!0)};
    g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
    g.log = function(a,b){g("log",[a,b])};
    g.consent=function(a){g("consent",!arguments.length||a)};
    g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
    g.clearUserCookie=function(){};
    g.setVars=function(n, p){g('setVars',[n,p]);};
    g._w={};y='XMLHttpRequest';g._w[y]=m[y];y='fetch';g._w[y]=m[y];
    if(m[y])m[y]=function(){return g._w[y].apply(this,arguments)};
    g._v="1.3.0";
})(window,document,window['_fs_namespace'],'script','user');
`}
        </Script>
      </Head>

      <BuilderComponent model="page" content={page} />
    </>
  );
}
