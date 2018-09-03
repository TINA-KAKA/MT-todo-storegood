/*
* Author:,
*Create Time:2018-08-31 09:03,
*Description;
*/


function t1() {
    var nowTodo=$("#jd_name").val();
    var mNum=$("#jd_num").val();

    if (nowTodo==""){
        alert("请输入胶带名称");
        return;
    }
    if(mNum==""){
        alert("请输入米数");
        return;
    }
    var oli = $("<li>"+nowTodo+"<a class=\"bj\">编辑</a><a class=\"delete\">删除</a></li>")
    $('ul').append(oli)
    $('#jd_name').val("");
    $('#jd_num').val("");
    console.log($(".delete"));
}
/*实现编辑操作*/
function edit(element) {

    var oldhtml=element.innerHTML;
    /*创建新的input元素*/
    var newobj=document.createElement("input");
    /*为新增元素添加类型*/
    newobj.type='text';
    /*为新增元素添加value值*/
    newobj.onblur=oldhtml;
    /*为新增元素添加光标离开事件*/
    newobj.onblur=function () {
        element.innerHTML=this.value==oldhtml ? oldhtml:this.value;
        /*当触发时判断新增元素值是否为空,为空则不修改,并返回原有值*/
    }
    /*设置该标签的子节点为空*/
    element.innerHTML="";
    /*添加该标签的子节点,input对象*/
    element.appendChild(newobj);
    /*设置选择文本的内容或设置光标位置(两个参数,start end start 为开始位置*/

}
    $('#todo').bind('keydown',function(event){
        if(event.keyCode == "13") {
            t1();
        }
    });
    $('.assign').click(function () {
        t1();
    });
    /*实现删除操作*/
    $("#tdl").on('click','.delete',function () {
        alert(111);
        var task=$(this).parent("li");
        console.log(task);
        task.remove();

    })




