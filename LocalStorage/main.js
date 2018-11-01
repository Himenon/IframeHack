// @ts-check

function writeData() {
  const target = document.getElementById("target-iframe");
  if (target) {
    console.info(target.src, "に対して、localStorageに書き込むようにメッセージを送信します")
    target.contentWindow.postMessage({
      type: "save",
      body: {
        params: ["data1", "data2"]
      }
    }, target.src);
  }
}

function readData() { 
  const target = document.getElementById("target-iframe");
  if (target) {
    console.info(target.src, "に対して、localStorageから読み込むようにメッセージを送信します")
    target.contentWindow.postMessage({
      type: "read"
    }, target.src);
  }
}

window.onload = () => {
  document.getElementById("local-write").addEventListener("click", writeData);
  document.getElementById("local-read").addEventListener("click", readData);
}

window.addEventListener('message', function(event) {
  console.info("8004はイベントを受信しました: ", event);
});
