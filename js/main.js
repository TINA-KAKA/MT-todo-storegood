/*
* Author:,
*Create Time:2018-08-31 09:03,
*Description;
*/

$(document).ready(function(){
   /*页面加载后本地存储的list*/
    showJdLists();
      /*键盘时间:空格键=确定*/
    $('#jd_name').bind('keydown',function(event){
        if(event.keyCode == "13") {
            addJdTOBuy();
        }
    });
    /*加入新的胶带list*/
    $('.assign').click(function () {
        addJdTOBuy();
    });
    /*实现删除操作*/
    $("#showlist").on('click','.delete',function () {

        var task=$(this).parent("li");
        var i=task.index();
        console.log(i);
        jdList.splice(i,1);
        console.log(jdList);
        saveData(jdList);
        $("ul li").remove();
        showJdLists();
    })
/*本来无一物,何处惹尘埃*/
});

var jdList=[];
function addJdTOBuy() {
    var obj_list={
        todo:"",
    }
    var jdToBuy=$("#jd_name").val();
    var mTime=$("#jd_time").val();
    console.log("-------------------------");
    console.log(jdToBuy);

    if (jdToBuy==""){
        alert("请输入胶带名称");
        return;
    }
    if(mTime==""){
        alert("请输入米数");
        return;
    }
    var oli = $("<li>"+jdToBuy+"<a class=\"delete\">删除</a></li>")
    $('ul').append(oli)
    jdList.push(jdToBuy);
/*    var str = JSON.stringify(jdList);
    localStorage.setItem("jdb",str);*/
     saveData(jdList);
    $('#jd_name').val("");
    $('#jd_time').val("");
}
function showJdLists() {
    var jdbs=localStorage.getItem("jdb");
    console.log(JSON.parse(jdbs));
    var jdbss=JSON.parse(jdbs)
    console.log(jdbss);
    /*初始化页面遍历dom*/
    for (var i=0;i<jdbss.length;i++){
        var sjdList=$("<li>"+jdbss[i]+"<a class=\"delete\">删除</a></li>");
        $('ul').append(sjdList);
        $("#count").innerText=i+1;
    }

}
function saveData(data) {
    localStorage.setItem("jdb", JSON.stringify(data));   //JS对象转换成JSON对象存进本地缓存
}


