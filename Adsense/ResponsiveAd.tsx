import GoogleAdUnit from "nextjs13_google_adsense";

const ResponsiveAd = () => {
  return (
    <GoogleAdUnit>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2651302773019896"
        data-ad-slot="1046434225"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </GoogleAdUnit>
  );
};

export default ResponsiveAd;
