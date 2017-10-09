/**
 * Created by 韩吉鑫 on 2017/7/26.
 */
function AddControl(superEle,maxNum,now,callback,content) {
    this.content = content;
    this.superEle = superEle;
    this.maxNum = maxNum;
    this.now=now;
    this.curNum = now;
    this.callback  = callback;
    this.createView();
}

AddControl.prototype.createView = function () {
    var container = document.createElement("span");
    var self = this;

    var datas = [{type:"button",content:"-",action:self.lessAction()},{type:"input",content:self.now+"",action:self.changeAction()},{type:"button",content:"+",action:self.moreAction()}];

    datas.forEach(function (info) {
        var ele = document.createElement(info.type);
        if (info.type==="input"){
            self.showNumView = ele;
        }
        info.type==="input"?ele.value = info.content:ele.textContent = info.content;
        info.type==="input"?ele.onblur = info.action:ele.onclick = info.action;
        container.appendChild(ele);
    });
    console.log(container);
    self.superEle.append($(container));

    return this;
};

AddControl.prototype.lessAction = function () {

    var self = this;
    return function () {
        --self.curNum;
        self.curNum = self.curNum<1?1:self.curNum;
        self.updateUI();
    }
};

AddControl.prototype.moreAction = function () {

    var self = this;
    return function () {
        ++self.curNum;
        self.curNum = self.curNum>self.maxNum?self.maxNum:self.curNum;
        self.updateUI();
    }
};

AddControl.prototype.changeAction = function () {

    var self = this;
    return function (event) {
        self.curNum = event.currentTarget.value;
        self.curNum = self.curNum>self.maxNum?self.maxNum:self.curNum;
        self.curNum = self.curNum<1?1:self.curNum;
        self.updateUI();
    }

};

AddControl.prototype.updateUI = function () {

    this.showNumView.value = this.curNum;
    this.callback(this.curNum,this.content);

};