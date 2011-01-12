
/**
 * Returns a handler which will open thefreedictionary definition in a new tab
 */
function onclick() {
  return function(info, tab) {
    var url = 'http://www.thefreedictionary.com/' + info.selectionText;
    chrome.tabs.create({ url: url, selected: true });
  };
};

/**
 * Create a context menu which will only show up when text is selected.
 */
chrome.contextMenus.create({
  "title" : "Search TheFreeDictionary for '%s'",
  "type" : "normal",
  "contexts" : ["selection"],
  "onclick" : onclick()
});
