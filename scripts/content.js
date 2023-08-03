const SPO_CHANNELS = Object.freeze(["SPOTV", "스포타임"]);

const process = () => {
  if (!location.pathname === "/watch") {
    return;
  }

  const channelName = document.querySelector(
    "#meta-contents #channel-name a"
  ).text;

  if (SPO_CHANNELS.includes(channelName)) {
    document.getElementsByTagName("video")[0].currentTime = 8;
  }
};

document.addEventListener("yt-navigate-start", process);

if (document.readyState !== "complete") {
  window.addEventListener("load", process);
} else {
  process();
}
