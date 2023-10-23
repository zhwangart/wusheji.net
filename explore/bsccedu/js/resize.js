function handleResize() {
	var htmlWidth = document.documentElement.clientWidth|| document.body.clientWidth
	let htmlDom=document.getElementsByTagName('html')[0]
	htmlDom.style.fontSize= 10 / 1920 * htmlWidth + 'px';
}
handleResize();
window.onresize = handleResize;
