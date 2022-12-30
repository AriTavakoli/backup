import { useCallback, useEffect } from "react";
import { closePIP, isInPIP, openPIP } from "../util/PIP";

const defaultOptions = {
  autoPIP: true
};

const usePIP = (videoElement, options = defaultOptions) => {
  const disablePIP = useCallback(() => {
    closePIP(videoElement.current).catch(console.warn);
  }, [videoElement]);

  const enablePIP = useCallback(() => {
    openPIP(videoElement.current).catch(console.warn);
  }, [videoElement]);

  const handleVisibility = useCallback(() => {
    if (document.visibilityState === "visible") disablePIP();
    else enablePIP();
  }, [enablePIP, disablePIP]);

  const togglePIP = useCallback(() => {
    if (isInPIP()) disablePIP();
    else enablePIP();
  }, [enablePIP, disablePIP]);

  useEffect(() => {
    if (!options.autoPIP) return;
    const video = videoElement.current;

    if (video && "autoPictureInPicture" in video) video.autoPictureInPicture = true;

    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [options.autoPIP, videoElement, handleVisibility]);

  return {
    enablePIP,
    disablePIP,
    togglePIP
  };
};

export default usePIP;
