// MIT License
// Copyright (c) 2021 Sebastian C. Nietzsche

var config = {
  mode: "direct"
};

function set() {
  chrome.proxy.settings.set(
    {value: config, scope: 'regular'},
    function() {}
  );
}


chrome.runtime.onInstalled.addListener(function () {
  set();
});

chrome.runtime.onStartup.addListener(function () {
  set();
});

chrome.browserAction.onClicked.addListener(function () {
  set();
});