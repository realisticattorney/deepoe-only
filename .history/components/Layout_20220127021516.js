import Nav from './Nav';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-deepoe-cream  ">
      <Head>
        <meta
          name="google-site-verification"
          content="0F31tahZUvZJcqhtJJ59K15BctCPq6-MDVyEiWu53ok"
        />
        <meta property="og:image" content="/images/ogg.png" />
      </Head>
      <Script
        async
        type="text/javascript"
        src="//staticw2.yotpo.com/SpF8vLr2RDGVGtgQstgtn3wGbb1k5PpFKS4GRrhD/widget.js"
      ></Script>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '334061461828502');
            fbq('track', 'PageView');
          `,
        }}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
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
          `,
        }}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(e,t){var n=e.amplitude||{_q:[],_iq:{}};var r=t.createElement("script")
            ;r.type="text/javascript"
            ;r.integrity="sha384-tzcaaCH5+KXD4sGaDozev6oElQhsVfbJvdi3//c2YvbY02LrNlbpGdt3Wq4rWonS"
            ;r.crossOrigin="anonymous";r.async=true
            ;r.src="https://cdn.amplitude.com/libs/amplitude-8.5.0-min.gz.js"
            ;r.onload=function(){if(!e.amplitude.runQueuedFunctions){
            console.log("[Amplitude] Error: could not load SDK")}}
            ;var i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)
            ;function s(e,t){e.prototype[t]=function(){
            this._q.push([t].concat(Array.prototype.slice.call(arguments,0)));return this}}
            var o=function(){this._q=[];return this}
            ;var a=["add","append","clearAll","prepend","set","setOnce","unset","preInsert","postInsert","remove"]
            ;for(var c=0;c<a.length;c++){s(o,a[c])}n.Identify=o;var u=function(){this._q=[]
            ;return this}
            ;var l=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"]
            ;for(var p=0;p<l.length;p++){s(u,l[p])}n.Revenue=u
            ;var d=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut","setVersionName","setDomain","setDeviceId","enableTracking","setGlobalUserProperties","identify","clearUserProperties","setGroup","logRevenueV2","regenerateDeviceId","groupIdentify","onInit","logEventWithTimestamp","logEventWithGroups","setSessionId","resetSessionId"]
            ;function v(e){function t(t){e[t]=function(){
            e._q.push([t].concat(Array.prototype.slice.call(arguments,0)))}}
            for(var n=0;n<d.length;n++){t(d[n])}}v(n);n.getInstance=function(e){
            e=(!e||e.length===0?"$default_instance":e).toLowerCase()
            ;if(!Object.prototype.hasOwnProperty.call(n._iq,e)){n._iq[e]={_q:[]};v(n._iq[e])
            }return n._iq[e]};e.amplitude=n})(window,document);
          
            amplitude.getInstance().init("460e44712bae1f4f05b86c68ca2f0f46");
          `,
        }}
      />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-37WPFMF2V3"
      ></Script>
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
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-37WPFMF2V3');
          `,
        }}
      />
      <Nav />
      <main className="h-full flex-grow overflow-scroll lg:max-w-screen-lg  lg:overflow-y-auto lg:mx-auto xxl:max-w-screen-xxl">
        {children}
      </main>
      <footer className=" text-white  text-sm font-extralight font-mono  p-5 bg-deepoe-chocolate">
        <div className="grid col-span-3 grid-cols-3 grid-rows-2 h-60 lg:max-w-4xl md:mx-auto md:max-w-2xl md:grid-cols-6 md:grid-rows-1 md:h-40">
          <div className="inline-flex col-span-1 row-span-1 ">
            <ul className="flex-col space-y-1.7 ">
              <li>
                <a
                  href="https://www.instagram.com/shopdeepoe/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.pinterest.com/shopdeepoe"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pinterest
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/shopdeepoe"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com/@shopdeepoe"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tik Tok
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/shopdeepoe"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-col justify-between">
            <ul className="flex-col  space-y-1.5 ">
              <li>
                <Link href="/contact">
                  <a>Contact Us</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/sustainability">
                  <a>Sustainability</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a>FAQ</a>
                </Link>
              </li>

              <li>
                <Link href="/shipping">
                  <a>Shipping</a>
                </Link>
              </li>

              <li>
                <Link href="/product-care">
                  <a>Product Care</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-col justify-between">
            <ul className="flex-col space-y-1.5  ">
              <li>
                <Link href="/terms">
                  <a>Terms</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a>Privacy</a>
                </Link>
              </li>
              <li>
                <Link href="/accessibility">
                  <a>Accessibility</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-col text-xs self-end -mb-2">
            <div className="flex-col space-y-0">
              <div className="-pl-2 -mb-1 pr-3 md:pr-0">
                <Image
                  src="/logo.svg"
                  height={48}
                  width={48}
                  className="svg-stroke"
                />
              </div>
              <p className="">© 2022 deepoe</p>
            </div>
          </div>

          <div className="self-end -ml-3.5 md:-ml-4">
            <ul className="text-xs flex-col">
              <li className="text-deepoe-cream font-thin text-opacity-70 -mb-1.5">
                designed & developed by
              </li>
              <li className="-mb-1.5">
                <a
                  href="https://www.germanaquila.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  German Aquila{' '}
                </a>
                <span className="text-deepoe-cream font-thin text-opacity-70 -mb-1.5">
                  &
                </span>
              </li>
              <li className="-mb-1.5">
                {' '}
                <a
                  href="https://alandavidpadilla.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Alan Padilla
                </a>
              </li>
            </ul>
          </div>
          <div className="self-end">
            <ul className="text-xs flex-col">
              <li className="text-deepoe-cream font-thin text-opacity-70 -mb-1.5">
                a brand of
              </li>
              <li className="-mb-1.5">Mereride Brands, LLC</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
