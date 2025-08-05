import { useEffect, useState } from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 6000); // تاخیر ۳ ثانیه

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed inset-0 z-0 object-cover w-full h-full pointer-events-none opacity-20"
        >
          <source src="/video3.mp4" type="video/webm" />
          <source src="/video3.mp4" type="video/mp4" />
        </video>
      )}
      <Component {...pageProps} />
    </>
  );
}
