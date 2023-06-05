function toggleChat() {
  var e = document.getElementById("chat-box");
  e.classList.contains("open")
    ? (e.classList.remove("open"), e.classList.add("closed"))
    : (e.classList.remove("closed"), e.classList.add("open"));
}

function initializeChatWidget(e) {
  let chatContainer = document.createElement("div");
  chatContainer.id = "chat-container";
  let chatBubble = document.createElement("div");
  chatBubble.id = "chat-bubble";
  chatBubble.onclick = toggleChat;
  chatBubble.innerHTML =
    '<svg id="ic_bubble" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>';
  let chatBox = document.createElement("div");
  chatBox.id = "chat-box";
  chatBox.classList.add("closed");

  // If you want to use on Local then replace the following URL with http://localhost:<port>/test.html
  let chatScreen = "https://coral-kelcie-81.tiiny.site/";
  chatBox.innerHTML =
    '<iframe src="' +
    chatScreen +
    '" style="height: 100%; width: 100%;" frameborder="0"></iframe>';
  chatContainer.appendChild(chatBubble);
  chatContainer.appendChild(chatBox);
  document.body.appendChild(chatContainer);
}

function loadCSS() {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  // If you want to use on Local then replace the following URL with http://localhost:<port>/css/chat.css
  link.href = "https://static.staticsave.com/widgetassets/chat.css";
  document.head.appendChild(link);
}

loadCSS();
