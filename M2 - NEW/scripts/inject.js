(() => { 
"use strict";


var __webpack_exports__ = {};

function numberFormat(numberState) {
  return getNumberFormatter(extConfig.numberDisplayFormat).format(
    numberState
  );
}

function getNumberFormatter(optionSelect) {
  let userLocales;
  if (document.documentElement.lang) {
    userLocales = document.documentElement.lang;
  } else if (navigator.language) {
    userLocales = navigator.language;
  } else {
    try {
      userLocales = new URL(
        Array.from(document.querySelectorAll("head > link[rel='search']"))
          ?.find((n) => n?.getAttribute("href")?.includes("?locale="))
          ?.getAttribute("href")
      )?.searchParams?.get("locale");
    } catch {
      utils_cLog(
        "Cannot find browser locale. Use en as default for number formatting."
      );
      userLocales = "en";
    }
  }

  let formatterNotation;
  let formatterCompactDisplay;
  switch (optionSelect) {
    case "compactLong":
      formatterNotation = "compact";
      formatterCompactDisplay = "long";
      break;
    case "standard":
      formatterNotation = "standard";
      formatterCompactDisplay = "short";
      break;
    case "compactShort":
    default:
      formatterNotation = "compact";
      formatterCompactDisplay = "short";
  }

  const formatter = Intl.NumberFormat(userLocales, {
    notation: formatterNotation,
    compactDisplay: formatterCompactDisplay,
  });
  return formatter;
}

function localize(localeString) {
  return chrome.i18n.getMessage(localeString);
}

function getBrowser() {
  if (typeof chrome !== "undefined" && typeof chrome.runtime !== "undefined") {
    return chrome;
  } else if (
    typeof browser !== "undefined" &&
    typeof browser.runtime !== "undefined"
  ) {
    return browser;
  } else {
    console.log("browser is not supported");
    return false;
  }
}

function getVideoId(url) {
  const urlObject = new URL(url);
  const pathname = urlObject.pathname;
  if (pathname.startsWith("/clip")) {
    return document.querySelector("meta[itemprop='videoId']").content;
  } else {
    if (pathname.startsWith("/shorts")) {
      return pathname.slice(8);
    }
    return urlObject.searchParams.get("v");
  }
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const height = innerHeight || document.documentElement.clientHeight;
  const width = innerWidth || document.documentElement.clientWidth;
  return (
    !(rect.top == 0 && rect.left == 0 && rect.bottom == 0 && rect.right == 0) &&
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= height &&
    rect.right <= width
  );
}

function isVideoLoaded() {
  const videoId = getVideoId(window.location.href);
  return (
    document.querySelector(`ytd-watch-flexy[video-id='${videoId}']`) !== null ||
    document.querySelector('#player[loading="false"]:not([hidden])') !== null
  );
}

function utils_cLog(message, writer) {
  message = `[Dislikes in YouTube™]: ${message}`;
  if (writer) {
    writer(message);
  } else {
    console.log(message);
  }
}

function getColorFromTheme(voteIsLike) {
  let colorString;
  switch (extConfig.colorTheme) {
    case "accessible":
      if (voteIsLike === true) {
        colorString = "dodgerblue";
      } else {
        colorString = "gold";
      }
      break;
    case "neon":
      if (voteIsLike === true) {
        colorString = "aqua";
      } else {
        colorString = "magenta";
      }
      break;
    case "classic":
    default:
      if (voteIsLike === true) {
        colorString = "lime";
      } else {
        colorString = "red";
      }
  }
  return colorString;
};




function createRateBarInternal(likes, dislikes) {
  if (!isLikesDisabled()) {

    let rateBar = document.getElementById("hemu-bar-container");

    const widthPx =
      getLikeButton().clientWidth +
      getDislikeButton().clientWidth +
      (isRoundedDesign() ? 0 : 8);

    const widthPercent =
      likes + dislikes > 0 ? (likes / (likes + dislikes)) * 100 : 50;

    var likePercentage = parseFloat(widthPercent.toFixed(1));
    const dislikePercentage = (100 - likePercentage).toLocaleString();
    likePercentage = likePercentage.toLocaleString();

    if (extConfig.showTooltipPercentage) {
      var tooltipInnerHTML;
      switch (extConfig.tooltipPercentageMode) {
        case "dash_dislike":
          tooltipInnerHTML = `${likes.toLocaleString()}&nbsp;/&nbsp;${dislikes.toLocaleString()}&nbsp;&nbsp;-&nbsp;&nbsp;${dislikePercentage}%`;
          break;
        case "both":
          tooltipInnerHTML = `${likePercentage}%&nbsp;/&nbsp;${dislikePercentage}%`;
          break;
        case "only_like":
          tooltipInnerHTML = `${likePercentage}%`;
          break;
        case "only_dislike":
          tooltipInnerHTML = `${dislikePercentage}%`;
          break;
        default: 
          tooltipInnerHTML = `${likes.toLocaleString()}&nbsp;/&nbsp;${dislikes.toLocaleString()}&nbsp;&nbsp;-&nbsp;&nbsp;${likePercentage}%`;
      }
    } else {
      tooltipInnerHTML = `${likes.toLocaleString()}&nbsp;/&nbsp;${dislikes.toLocaleString()}`;
    }

    if (!isShorts()) {
      if (!rateBar && !isMobile()) {
        let colorLikeStyle = "";
        let colorDislikeStyle = "";
        if (extConfig.coloredBar) {
          colorLikeStyle = "; background-color: " + getColorFromTheme(true);
          colorDislikeStyle = "; background-color: " + getColorFromTheme(false);
        }
        (
          document.getElementById(
            isNewDesign() ? "top-level-buttons-computed" : "menu-container"
          ) || document.querySelector("ytm-slim-video-action-bar-renderer")
        ).insertAdjacentHTML(
          "beforeend",
          `<style type="text/css">#hemu-bar-container { background: var(--yt-spec-icon-disabled); border-radius: 2px; } #hemu-bar { background: var(--yt-spec-text-primary); border-radius: 2px; transition: all 0.15s ease-in-out; } .hemu-tooltip { display: block; height: 2px; } .hemu-tooltip-old-design { position: relative; top: 9px; } .hemu-tooltip-new-design { position: absolute; bottom: -10px; } .hemu-tooltip-bar-container { width: 100%; height: 2px; position: absolute; padding-top: 6px; padding-bottom: 12px; top: -6px; } ytd-menu-renderer.ytd-watch-metadata { overflow-y: visible !important; } #top-level-buttons-computed { position: relative !important; }</style>
              <div class="hemu-tooltip hemu-tooltip-${isNewDesign() ? "new" : "old"}-design" style="width: ${widthPx}px">
              <div class="hemu-tooltip-bar-container">
                <div
                    id="hemu-bar-container"
                    style="width: 100%; height: 2px;${colorDislikeStyle}"
                    >
                    <div
                      id="hemu-bar"
                      style="width: ${widthPercent}%; height: 100%${colorLikeStyle}"
                      ></div>
                </div>
              </div>
              <tp-yt-paper-tooltip position="top" id="hemu-dislike-tooltip" class="style-scope ytd-sentiment-bar-renderer" role="tooltip" tabindex="-1">
                <!--css-build:shady-->${tooltipInnerHTML}
              </tp-yt-paper-tooltip>
              </div>
            `
        );

        if (isNewDesign()) {
          let descriptionAndActionsElement = document.getElementById("top-row");
          descriptionAndActionsElement.style.borderBottom =
            "1px solid var(--yt-spec-10-percent-layer)";
          descriptionAndActionsElement.style.paddingBottom = "10px";

          document.getElementById("actions-inner").style.width = "revert";
          if (isRoundedDesign()) {
            document.getElementById("actions").style.flexDirection =
              "row-reverse";
          }
        }
      } else {
        if (document.getElementById("hemu-bar-container")) {
          document.getElementById("hemu-bar-container").style.width = widthPx + "px";
        }
        if (document.getElementById("hemu-bar")) {
          document.getElementById("hemu-bar").style.width = widthPercent + "%";
        }
        if (document.querySelector("#hemu-dislike-tooltip > #tooltip")) {
            document.querySelector("#hemu-dislike-tooltip > #tooltip").innerHTML = tooltipInnerHTML;
        }

        if (extConfig.coloredBar) {
          document.getElementById("hemu-bar-container").style.backgroundColor =
            getColorFromTheme(false);
          document.getElementById("hemu-bar").style.backgroundColor =
            getColorFromTheme(true);
        }
      }
    }
  } else {
    //utils_cLog("removing bar");
    let ratebar = document.getElementById("hemu-bar-container");
    if (ratebar) {
      ratebar.parentNode.removeChild(ratebar);
    }
  }
}

async function createRateBar(likes, dislikes) {
  createRateBarInternal(likes, dislikes);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  createRateBarInternal(likes, dislikes);
};


function createStarRating(rating, isMobile) {
  let starRating = document.createElement("label");

  let starSlider = document.createElement("input");
  starSlider.setAttribute("class", "rating");
  starSlider.setAttribute("max", "5");
  starSlider.setAttribute("readonly", "");
  starSlider.setAttribute(
    "style",
    `--fill:rgb(255, 215, 0);--value:${rating.toString()};};background-color: transparent;`
  );
  starSlider.setAttribute("type", "range");

  starRating.appendChild(starSlider);

  let YTLikeButton;

  if (isMobile) {
    YTLikeButton = document.querySelector(
      "#app > div.page-container > ytm-watch > ytm-single-column-watch-next-results-renderer > ytm-slim-video-metadata-section-renderer > ytm-slim-video-action-bar-renderer > div > ytm-slim-metadata-toggle-button-renderer:nth-child(1)"
    );
  } else {
    YTLikeButton = document.querySelector(
      "#top-level-buttons-computed"
    );
  }

  YTLikeButton.insertAdjacentElement("afterend", starRating);

  try {
    let YTBar = document.querySelector("#hemu-bar-container");
    YTBar.setAttribute("style", "width: 190%; height: 2px;");
  } catch (err) {
    cLog("RateBar Not Present");
  }

  let style = `<style>

.rating {
    --dir: right;
    --fill: gold;
    --fillbg: rgba(100, 100, 100, 0.15);
    --star: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z"/></svg>');
    --stars: 5;
    --starSize: 2.8rem;
    --symbol: var(--star);
    --value: 1;
    --w: calc(var(--stars) * var(--starSize));
    --x: calc(100% * (var(--value) / var(--stars)));
    block-size: var(--starSize);
    inline-size: var(--w);
    position: relative;
    touch-action: manipulation;
    -webkit-appearance: none;
}

[dir="rtl"] .rating {
    --dir: left;
}

.rating::-moz-range-track {
    background: linear-gradient(to var(--dir), var(--fill) 0 var(--x), var(--fillbg) 0 var(--x));
    block-size: 100%;
    mask: repeat left center/var(--starSize) var(--symbol);
}

.rating::-webkit-slider-runnable-track {
    background: linear-gradient(to var(--dir), var(--fill) 0 var(--x), var(--fillbg) 0 var(--x));
    block-size: 100%;
    mask: repeat left center/var(--starSize) var(--symbol);
    -webkit-mask: repeat left center/var(--starSize) var(--symbol);
}

.rating::-moz-range-thumb {
    height: var(--starSize);
    opacity: 0;
    width: var(--starSize);
}

.rating::-webkit-slider-thumb {
    height: var(--starSize);
    opacity: 0;
    width: var(--starSize);
    -webkit-appearance: none;
}

.rating,
.rating-label {
    display: block;
    font-family: ui-sans-serif, system-ui, sans-serif;
}

.rating-label {
    margin-block-end: 1rem;
}

</style>`;

  document.head.insertAdjacentHTML("beforeend", style);
};

const apiUrl = "https://returnyoutubedislikeapi.com";
const LIKED_STATE = "LIKED_STATE";
const DISLIKED_STATE = "DISLIKED_STATE";
const NEUTRAL_STATE = "NEUTRAL_STATE";

let extConfig = {
  disableVoteSubmission: false,
  coloredThumbs: false,
  coloredBar: false,
  colorTheme: "classic",
  numberDisplayFormat: "compactShort",
  showTooltipPercentage: false,
  tooltipPercentageMode: "dash_like",
  numberDisplayReformatLikes: false,
};

let storedData = {
  likes: 0,
  dislikes: 0,
  previousState: NEUTRAL_STATE,
};

function isMobile() {
  return location.hostname == "m.youtube.com";
}

function isShorts() {
  return location.pathname.startsWith("/shorts");
}

function isNewDesign() {
  return document.getElementById("comment-teaser") !== null;
}

function isRoundedDesign() {
  return document.getElementById("segmented-like-button") !== null;
}

let mutationObserver = new Object();

if (isShorts() && mutationObserver.exists !== true) {
  utils_cLog("initializing mutation observer");
  mutationObserver.options = {
    childList: false,
    attributes: true,
    subtree: false,
  };
  mutationObserver.exists = true;
  mutationObserver.observer = new MutationObserver(function (
    mutationList,
    observer
  ) {
    mutationList.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.target.nodeName === "TP-YT-PAPER-BUTTON" &&
        mutation.target.id === "button"
      ) {
        if (mutation.target.getAttribute("aria-pressed") === "true") {
          mutation.target.style.color =
            mutation.target.parentElement.parentElement.id === "like-button"
              ? getColorFromTheme(true)
              : getColorFromTheme(false);
        } else {
          mutation.target.style.color = "unset";
        }
        return;
      }
      utils_cLog(
        "unexpected mutation observer event: " + mutation.target + mutation.type
      );
    });
  });
}

function isLikesDisabled() {
  if (isMobile()) {
    return /^\D*$/.test(
      getButtons().querySelector(".yt-core-attributed-string").innerText
    );
  }
  return /^\D*$/.test(getButtons().innerText);
}

function isVideoLiked() {
  if (isMobile()) {
    return (
      getLikeButton().querySelector("button").getAttribute("aria-label") ==
      "true"
    );
  }
  return getLikeButton().classList.contains("style-default-active");
}

function isVideoDisliked() {
  if (isMobile()) {
    return (
      getDislikeButton().querySelector("button").getAttribute("aria-label") ==
      "true"
    );
  }
  return getDislikeButton().classList.contains("style-default-active");
}

function getState(storedData) {
  if (isVideoLiked()) {
    return { current: LIKED_STATE, previous: storedData.previousState };
  }
  if (isVideoDisliked()) {
    return { current: DISLIKED_STATE, previous: storedData.previousState };
  }
  return { current: NEUTRAL_STATE, previous: storedData.previousState };
}

function setLikes(likesCount) {
  utils_cLog(`SET likes ${likesCount}`)
  getLikeTextContainer().innerText = likesCount;
}

function setDislikes(dislikesCount) {
  utils_cLog(`SET dislikes ${dislikesCount}`)
  getDislikeTextContainer()?.removeAttribute("is-empty");
  getDislikeTextContainer()?.removeAttribute('is-empty');
  if (!isLikesDisabled()) {
    if (isMobile()) {
      getButtons().querySelector(
        "#text"
      ).innerText = dislikesCount;
      return;
    }
    getDislikeTextContainer().innerText = dislikesCount;
  } else {
    utils_cLog("likes count disabled by creator");
    if (isMobile()) {
      getButtons().querySelector(
        "#text"
      ).innerText = localize("TextLikesDisabled");
      return;
    }
    getDislikeTextContainer().innerText = localize("TextLikesDisabled");
  }
}

function getLikeCountFromButton() {
  try {
    if (isShorts()) {
      return false;
    }

    let likeButton = getLikeButton()
    .querySelector("yt-formatted-string#text") ??
    getLikeButton().querySelector("button");

    let likesStr = likeButton.getAttribute("aria-label")
    .replace(/\D/g, "");
    return likesStr.length > 0 ? parseInt(likesStr) : false;
  } catch {
    return false;
  }
}

function processResponse(response, storedData) {
  const formattedDislike = numberFormat(response.dislikes);
  setDislikes(formattedDislike);
  if (extConfig.numberDisplayReformatLikes === true) {
    const nativeLikes = getLikeCountFromButton();
    if (nativeLikes !== false) {
      setLikes(numberFormat(nativeLikes));
    }
  }
  storedData.dislikes = parseInt(response.dislikes);
  storedData.likes = getLikeCountFromButton() || parseInt(response.likes);
  createRateBar(storedData.likes, storedData.dislikes);
  if (extConfig.coloredThumbs === true) {
    if (isShorts()) {
      let shortLikeButton = getLikeButton().querySelector(
        "tp-yt-paper-button#button"
      );
      let shortDislikeButton = getDislikeButton().querySelector(
        "tp-yt-paper-button#button"
      );
      if (shortLikeButton.getAttribute("aria-pressed") === "true") {
        shortLikeButton.style.color = getColorFromTheme(true);
      }
      if (shortDislikeButton.getAttribute("aria-pressed") === "true") {
        shortDislikeButton.style.color = getColorFromTheme(false);
      }
      mutationObserver.observer.observe(
        shortLikeButton,
        mutationObserver.options
      );
      mutationObserver.observer.observe(
        shortDislikeButton,
        mutationObserver.options
      );
    } else {
      getLikeButton().style.color = getColorFromTheme(true);
      getDislikeButton().style.color = getColorFromTheme(false);
    }
  }
}

function displayError(error) {
  getDislikeTextContainer().innerText = localize(
    "textTempUnavailable"
  );
}

async function setState(storedData) {
  storedData.previousState = isVideoDisliked()
    ? DISLIKED_STATE
    : isVideoLiked()
    ? LIKED_STATE
    : NEUTRAL_STATE;
  let statsSet = false;

  let videoId = getVideoId(window.location.href);
  let likeCount = getLikeCountFromButton() || null;

  let response = await fetch(
    `${apiUrl}/votes?videoId=${videoId}&likeCount=${likeCount || ""}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then((response) => {
      if (!response.ok) displayError(response.error);
      return response;
    })
    .then((response) => response.json())
    .catch(displayError);
  utils_cLog("response from api:");
  utils_cLog(JSON.stringify(response));
  if (response !== undefined && !("traceId" in response) && !statsSet) {
    processResponse(response, storedData);
  }
}

function setInitialState() {
  setState(storedData);
}

function initExtConfig() {
  initializeDisableVoteSubmission();
  initializeColoredThumbs();
  initializeColoredBar();
  initializeColorTheme();
  initializeNumberDisplayFormat();
  initializeTooltipPercentage();
  initializeTooltipPercentageMode();
  initializeNumberDisplayReformatLikes();
}

function initializeDisableVoteSubmission() {
  getBrowser().storage.sync.get(["disableVoteSubmission"], (res) => {
    if (res.disableVoteSubmission === undefined) {
      getBrowser().storage.sync.set({ disableVoteSubmission: false });
    } else {
      extConfig.disableVoteSubmission = res.disableVoteSubmission;
    }
  });
}

function initializeColoredThumbs() {
  getBrowser().storage.sync.get(["coloredThumbs"], (res) => {
    if (res.coloredThumbs === undefined) {
      getBrowser().storage.sync.set({ coloredThumbs: false });
    } else {
      extConfig.coloredThumbs = res.coloredThumbs;
    }
  });
}

function initializeColoredBar() {
  getBrowser().storage.sync.get(["coloredBar"], (res) => {
    if (res.coloredBar === undefined) {
      getBrowser().storage.sync.set({ coloredBar: false });
    } else {
      extConfig.coloredBar = res.coloredBar;
    }
  });
}

function initializeColorTheme() {
  getBrowser().storage.sync.get(["colorTheme"], (res) => {
    if (res.colorTheme === undefined) {
      getBrowser().storage.sync.set({ colorTheme: false });
    } else {
      extConfig.colorTheme = res.colorTheme;
    }
  });
}

function initializeNumberDisplayFormat() {
  getBrowser().storage.sync.get(["numberDisplayFormat"], (res) => {
    if (res.numberDisplayFormat === undefined) {
      getBrowser().storage.sync.set({ numberDisplayFormat: "compactShort" });
    } else {
      extConfig.numberDisplayFormat = res.numberDisplayFormat;
    }
  });
}

function initializeTooltipPercentage() {
  getBrowser().storage.sync.get(["showTooltipPercentage"], (res) => {
    if (res.showTooltipPercentage === undefined) {
      getBrowser().storage.sync.set({ showTooltipPercentage: false });
    } else {
      extConfig.showTooltipPercentage = res.showTooltipPercentage;
    }
  });
}

function initializeTooltipPercentageMode() {
  getBrowser().storage.sync.get(["tooltipPercentageMode"], (res) => {
    if (res.tooltipPercentageMode === undefined) {
      getBrowser().storage.sync.set({ tooltipPercentageMode: "dash_like" });
    } else {
      extConfig.tooltipPercentageMode = res.tooltipPercentageMode;
    }
  });
}

function initializeNumberDisplayReformatLikes() {
  getBrowser().storage.sync.get(["numberDisplayReformatLikes"], (res) => {
    if (res.numberDisplayReformatLikes === undefined) {
      getBrowser().storage.sync.set({ numberDisplayReformatLikes: false });
    } else {
      extConfig.numberDisplayReformatLikes = res.numberDisplayReformatLikes;
    }
  });
};

function getButtons() {
  if (isShorts()) {
    let elements = document.querySelectorAll(
      isMobile()
        ? "ytm-like-button-renderer"
        : "#like-button > ytd-like-button-renderer"
    );
    for (let element of elements) {
      if (isInViewport(element)) {
        return element;
      }
    }
  }
  if (isMobile()) {
    return document.querySelector(".slim-video-action-bar-actions");
  }
  if (document.getElementById("menu-container")?.offsetParent === null) {
    return document.querySelector("ytd-menu-renderer.ytd-watch-metadata > div");
  } else {
    return document
      .getElementById("menu-container")
      ?.querySelector("#top-level-buttons-computed");
  }
}

function getLikeButton() {

  return isShorts() ? 
         getButtons().querySelector("#like-button") : 
         getButtons().querySelectorAll("like-button-view-model")[0] ?
         getButtons().querySelectorAll("like-button-view-model")[0] :
         getButtons().querySelectorAll("*")[0].tagName === "YTD-SEGMENTED-LIKE-DISLIKE-BUTTON-RENDERER" ?
         getButtons().querySelector("#segmented-like-button") :
         getButtons().querySelectorAll("ytm-toggle-button-renderer")[0];
}

function getLikeTextContainer() {
  return (
    getLikeButton().querySelector("#text") ??
    getLikeButton().getElementsByTagName("yt-formatted-string")[0] ??
    getLikeButton().querySelector("span[role='text']")
  );
}

function getDislikeButton() {
  return isShorts() ? 
         getButtons().querySelector("#dislike-button") : 
         getButtons().querySelectorAll("dislike-button-view-model")[0] ?
         getButtons().querySelectorAll("dislike-button-view-model")[0] :
         getButtons().querySelectorAll("*")[0].tagName === "YTD-SEGMENTED-LIKE-DISLIKE-BUTTON-RENDERER" ?
         getButtons().querySelector("#segmented-dislike-button") :
         getButtons().querySelectorAll("dislike-button-view-model")[0];

}

function getDislikeTextContainer() {
  let result =
    getDislikeButton().querySelector("#text") ??
    getDislikeButton().getElementsByTagName("yt-formatted-string")[0] ??
    getDislikeButton().querySelector("span[role='text']");
  if (result == null) {
    let textSpan = document.createElement("span");
    textSpan.id = "text";
    getDislikeButton().querySelector("button").appendChild(textSpan);
    getDislikeButton().querySelector("button").style.width = "auto";
    result = getDislikeButton().querySelector("#text");
  }
  return result;
}

function checkForSignInButton() {
  if (
    document.querySelector(
      "a[href^='https://accounts.google.com/ServiceLogin']"
    )
  ) {
    return true;
  } else {
    return false;
  }
}
;





function sendVote(vote) {
  if (extConfig.disableVoteSubmission !== true) {
    getBrowser().runtime.sendMessage({
      message: "send_vote",
      vote: vote,
      videoId: getVideoId(window.location.href),
    });
  }
}

function likeClicked() {
  if (checkForSignInButton() === false) {
    if (storedData.previousState === DISLIKED_STATE) {
      sendVote(1);
      if (storedData.dislikes > 0) storedData.dislikes--;
      storedData.likes++;
      createRateBar(storedData.likes, storedData.dislikes);
      setDislikes(numberFormat(storedData.dislikes));
      storedData.previousState = LIKED_STATE;
    } else if (storedData.previousState === NEUTRAL_STATE) {
      sendVote(1);
      storedData.likes++;
      createRateBar(storedData.likes, storedData.dislikes);
      storedData.previousState = LIKED_STATE;
    } else if ((storedData.previousState = LIKED_STATE)) {
      sendVote(0);
      if (storedData.likes > 0) storedData.likes--;
      createRateBar(storedData.likes, storedData.dislikes);
      storedData.previousState = NEUTRAL_STATE;
    }
    if (extConfig.numberDisplayReformatLikes === true) {
      const nativeLikes = getLikeCountFromButton();
      if (nativeLikes !== false) {
        setLikes(numberFormat(nativeLikes));
      }
    }
  }
}

function dislikeClicked() {
  if (checkForSignInButton() == false) {
    if (storedData.previousState === NEUTRAL_STATE) {
      sendVote(-1);
      storedData.dislikes++;
      setDislikes(numberFormat(storedData.dislikes));
      createRateBar(storedData.likes, storedData.dislikes);
      storedData.previousState = DISLIKED_STATE;
    } else if (storedData.previousState === DISLIKED_STATE) {
      sendVote(0);
      if (storedData.dislikes > 0) storedData.dislikes--;
      setDislikes(numberFormat(storedData.dislikes));
      createRateBar(storedData.likes, storedData.dislikes);
      storedData.previousState = NEUTRAL_STATE;
    } else if (storedData.previousState === LIKED_STATE) {
      sendVote(-1);
      if (storedData.likes > 0) storedData.likes--;
      storedData.dislikes++;
      setDislikes(numberFormat(storedData.dislikes));
      createRateBar(storedData.likes, storedData.dislikes);
      storedData.previousState = DISLIKED_STATE;
      if (extConfig.numberDisplayReformatLikes === true) {
        const nativeLikes = getLikeCountFromButton();
        if (nativeLikes !== false) {
          setLikes(numberFormat(nativeLikes));
        }
      }
    }
  }
}

function addLikeDislikeEventListener() {
  if (!window.returnDislikeButtonlistenersSet) {
    getLikeButton().addEventListener("click", likeClicked);
    getDislikeButton().addEventListener("click", dislikeClicked);
    getLikeButton().addEventListener("touchstart", likeClicked);
    getLikeButton().addEventListener("touchstart", dislikeClicked);
    window.returnDislikeButtonlistenersSet = true;
  }
}

function storageChangeHandler(changes, area) {
  if (changes.disableVoteSubmission !== undefined) {
    handleDisableVoteSubmissionChangeEvent(
      changes.disableVoteSubmission.newValue
    );
  }
  if (changes.coloredThumbs !== undefined) {
    handleColoredThumbsChangeEvent(changes.coloredThumbs.newValue);
  }
  if (changes.coloredBar !== undefined) {
    handleColoredBarChangeEvent(changes.coloredBar.newValue);
  }
  if (changes.colorTheme !== undefined) {
    handleColorThemeChangeEvent(changes.colorTheme.newValue);
  }
  if (changes.numberDisplayFormat !== undefined) {
    handleNumberDisplayFormatChangeEvent(changes.numberDisplayFormat.newValue);
  }
  if (changes.numberDisplayReformatLikes !== undefined) {
    handleNumberDisplayReformatLikesChangeEvent(
      changes.numberDisplayReformatLikes.newValue
    );
  }
}

function handleDisableVoteSubmissionChangeEvent(value) {
  extConfig.disableVoteSubmission = value;
}

function handleColoredThumbsChangeEvent(value) {
  extConfig.coloredThumbs = value;
}

function handleColoredBarChangeEvent(value) {
  extConfig.coloredBar = value;
}

function handleColorThemeChangeEvent(value) {
  if (!value) value = "classic";
  extConfig.colorTheme = value;
}

function handleNumberDisplayFormatChangeEvent(value) {
  extConfig.numberDisplayFormat = value;
}

function handleNumberDisplayReformatLikesChangeEvent(value) {
  extConfig.numberDisplayReformatLikes = value;
};


initExtConfig();

let jsInitChecktimer = null;

function setEventListeners(evt) {
  function checkForJS_Finish() {
    if (isShorts() || (getButtons()?.offsetParent && isVideoLoaded())) {
      addLikeDislikeEventListener();
      setInitialState();
      getBrowser().storage.onChanged.addListener(storageChangeHandler);
      clearInterval(jsInitChecktimer);
      jsInitChecktimer = null;
    }
  }

  jsInitChecktimer = setInterval(checkForJS_Finish, 111);
}

setEventListeners();

document.addEventListener("yt-navigate-finish", function (event) {
  if (jsInitChecktimer !== null) clearInterval(jsInitChecktimer);
  window.returnDislikeButtonlistenersSet = false;
  setEventListeners();
});

})();