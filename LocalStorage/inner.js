// @ts-check

window.addEventListener('message', function(event) {
  this.console.log("8005はイベントを受信しました: ", event);
  if (event.data) {
    if (event.data.type === "save") {
      console.log("http://localhost:8005/inner.htmlへ書き込み");
      saveData("params", event.data.body.params);
    }
    if (event.data.type === "read") {
      console.log("http://localhost:8005/inner.htmlから読み込み");
      const data = readData("params");
      event.source.postMessage(data, event.origin);
    }
  }
}, false);

function saveData(key, value) {
  window.localStorage.setItem(key, value);
}

function readData(key) {
  return window.localStorage.getItem(key);
}
