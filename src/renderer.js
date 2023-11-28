// 运行在 Electron 渲染进程 下的页面脚本


// 页面加载完成时触发
function onLoad() {
    window.LLAPI.on("dom-up-messages", (message) => {
        //console.log(message);
        let text = message.innerText;
        if(text.indexOf('[自动回复]') != -1){
            //console.log(message);
            message.hidden = true;
        }
    })
}


// 打开设置界面时触发
function onConfigView(view) {

}


// 这两个函数都是可选的
export {
    onLoad,
    onConfigView
}