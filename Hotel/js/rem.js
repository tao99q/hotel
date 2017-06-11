var dW = 640; //设计稿宽
document.documentElement.style.fontSize = dW / (document.documentElement.clientWidth || document.body.clientWidth) * 100 + "px";
window.onresize = function() {
	document.documentElement.style.fontSize = dW / (document.documentElement.clientWidth || document.body.clientWidth) * 100 + "px";
}