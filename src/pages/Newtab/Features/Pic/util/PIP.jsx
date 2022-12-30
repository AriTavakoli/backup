export const canPIP = () =>
  "pictureInPictureEnabled" in document && document.pictureInPictureEnabled;

export const isInPIP = () => Boolean(document.pictureInPictureElement);

const supportsOldSafariPIP = () => {
  const video = document.createElement("video");

  return (
    canPIP() &&
    video.webkitSupportsPresentationMode &&
    typeof video.webkitSetPresentationMode === "function"
  );
};

const supportsModernPIP = () => {
  const video = document.createElement("video");

  return (
    canPIP() &&
    video.requestPictureInPicture &&
    typeof video.requestPictureInPicture === "function"
  );
};

export const supportsPIP = () =>
  supportsOldSafariPIP() || supportsModernPIP();

export const openPIP = (video) => {
  if (isInPIP()) return;

  if (supportsOldSafariPIP()) {
    video.webkitSetPresentationMode("picture-in-picture");
  }
  if (supportsModernPIP()) {
    video.requestPictureInPicture();
  }
};

export const closePIP = (video) => {
  if (!isInPIP()) return;

  if (supportsOldSafariPIP()) {
    video.webkitSetPresentationMode("inline");
  }
  if (supportsModernPIP()) {
    document.exitPictureInPicture();
  }
};
