document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("getTitle").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
      var activeTabTitle = activeTab.title;
      document.getElementById("title").textContent = activeTabTitle;
    });
  });
});
