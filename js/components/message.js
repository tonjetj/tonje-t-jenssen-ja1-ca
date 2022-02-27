function message(messageType = "error", message = "") {
  return `<div class="alert ${messageType}">${message}</div>`;
}
