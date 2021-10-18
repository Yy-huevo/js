var that;
class Tab {
    constructor(id) {
        this.main = document.querySelector(id); //获取tab栏
        // this.lis = this.main.querySelectorAll('li'); //获取里面所有的li
        // this.sections = this.main.querySelectorAll('section'); //获取下面内容部分
        this.add = this.main.querySelector('.tabadd');
        this.ul = this.main.querySelector('.firstnav ul:first-child');
        this.fsection = this.main.querySelector('.tabscon');
        // this.remove = this.main.querySelectorAll('.icon-guanbi');
        this.init(); //调用初始化
        that = this;
    }
    init() {
        //初始化
        this.updateNode();  //页面刚加载的时候获取一次
        this.add.onclick = this.addTab;
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.remove[i].onclick = this.removeTab;
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
    }
    //切换
    toggleTab() {
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';
    }
    //清楚所有样式
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    updateNode() {
        this.lis = this.main.querySelectorAll('li'); //获取里面所有的li
        this.sections = this.main.querySelectorAll('section'); //获取下面内容部分
        this.remove = this.main.querySelectorAll('.icon-guanbi');
        this.spans = this.main.querySelectorAll('.firstnav li span:first-child');
    }
    //添加
    addTab() {
        that.clearClass();
        var random = Math.random();
        var li = '<li><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
        that.ul.insertAdjacentHTML('beforeend', li);
        var section = ' <section class="conactive">测试 ' + random + '</section>';
        that.fsection.insertAdjacentHTML('beforeend', section);
        that.init();  //点击添加后再刷新一次  再重新把新添加的再绑定一次
    }
    //删除
    removeTab(e) {
        e.stopPropagation();
        var index = this.parentNode.index;
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        if (document.querySelector('.liactive')) return;
        index--;
        that.lis[index] && that.lis[index].click(); // 前面为真 才执行后面的
    }
    //编辑
    editTab() {
        var str = this.innerHTML;
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text" />';
        var input = this.children[0];
        input.value = str;
        input.select();
        input.onblur = function(){
            this.parentNode.innerHTML = this.value;
        }
        input.onkeyup = function(e){
            if(e.keyCode === 13){
                this.blur();
            }
        }
    }
}
new Tab('#tab');
