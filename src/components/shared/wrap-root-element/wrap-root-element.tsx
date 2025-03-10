import * as React from "react";
import { GatsbyBrowser, Script } from "gatsby";
import { ImagesContextProvider } from "context/images-context";
import { CookiesProvider } from "react-cookie";

export const WrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => (
  <CookiesProvider>
    <ImagesContextProvider>
      {/* Calendly */}
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        type="text/javascript"
        async
      />
      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DTWRND3Z92"
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DTWRND3Z92');
          `,
        }}
      />
      {/* Hotjar */}
      <Script
        dangerouslySetInnerHTML={{
          __html: `
          (function (c, s, q, u, a, r, e) {
          c.hj=c.hj||function(){(c.hj.q=c.hj.q||[]).push(arguments)};
          c._hjSettings = { hjid: a };
          r = s.getElementsByTagName('head')[0];
          e = s.createElement('script');
          e.async = true;
          e.src = q + c._hjSettings.hjid + u;
          r.appendChild(e);
          })(window, document, 'https://static.hj.contentsquare.net/c/csq-', '.js', 5252930);
          `,
        }}
      />
      {/* Cookiebot */}
      {/* <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="0da49446-6427-44bc-b1f7-75aaa754c517"
        data-blockingmode="auto"
        type="text/javascript"
      /> */}
      {/* Meta Pixel Code */}
      <Script
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
          fbq('init', '880765140678246');
          fbq('track', 'PageView');
          `,
        }}
      />
      {/* End Meta Pixel Code */}
      {element}
    </ImagesContextProvider>
  </CookiesProvider>
);
