import React, {
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";
import usePIP from "../hooks/usePIP";
import { srcs } from "../const/video";

import styles from "./Video.module.css";
import { supportsPIP } from "../util/PIP";
import { applyStreamToVideo, getCameraStream } from "../util/media";

export default function Video() {
  const [shouldShowControls, setShouldShowControls] = useState(false);
  const [isCameraEnabled, setIsCameraEnabled] = useState(false);
  const [isPIPOn, setIsPIPOn] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoElement = useRef();
  const { togglePIP } = usePIP(videoElement);

  useEffect(() => {
    const onNextTrack = () =>
      setCurrentVideoIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : srcs.length - 1
      );

    const onPrevTrack = () =>
      setCurrentVideoIndex((prevIndex) =>
        prevIndex < srcs.length - 1 ? prevIndex + 1 : 0
      );

    if (navigator && navigator.mediaSession) {
      navigator.mediaSession.setActionHandler("previoustrack", onNextTrack);
      navigator.mediaSession.setActionHandler("nexttrack", onPrevTrack);
    }
  }, []);

  useEffect(() => {
    const video = videoElement.current;
    if (!video) return;

    const onEnterPIP = () => setIsPIPOn(true);
    const onLeavePIP = () => setIsPIPOn(false);

    video.addEventListener("enterpictureinpicture", onEnterPIP);
    video.addEventListener("leavepictureinpicture", onLeavePIP);
    return () => {
      video.removeEventListener("enterpictureinpicture", onEnterPIP);
      video.removeEventListener("leavepictureinpicture", onLeavePIP);
    };
  }, []);

  const onCanPlay = useCallback(() => {
    if (supportsPIP()) setShouldShowControls(true);
  }, []); const onCameraToggle = useCallback(async () => {
    const video = videoElement.current;
    if (!video) return;

    if (isCameraEnabled) {
      video.src = srcs[currentVideoIndex];
      video.srcObject = null;
      setIsCameraEnabled(false);
    } else {
      const stream = await getCameraStream();
      await applyStreamToVideo(video, stream);
      setIsCameraEnabled(Boolean(stream));
    }
  }, [isCameraEnabled, currentVideoIndex]);

  useEffect(() => {
    const video = videoElement.current;

    
  }, []);

  return (
    <div className={styles.Container}>
      <video
        muted
        loop
        src={srcs[currentVideoIndex]}
        autoPlay
        controls
        playsInline
        ref={videoElement}
        className={styles.Video}
        onCanPlay={onCanPlay}
      />
      {shouldShowControls && (
        <div>
          <button onClick={togglePIP} className={styles.Button}>
            {isPIPOn ? "Turn off PIP" : "Turn on PIP"}
          </button>
          <button onClick={onCameraToggle} className={styles.Button}>
            {isCameraEnabled ? "Turn off camera" : "Turn on camera"}
          </button>
        </div>
      )}
    </div>
  );

};