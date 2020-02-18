var string = "";
var html = "";

document.write('<div class="flash wid">\
        </div>\
        <div class="clear"></div>\
        <ul id="nav" class="nav wid">\
            <li class="nLi index">\
                <h3><a  href="/" target="_self">軒轅劍</a></h3>\
            </li>\
            <li class="nLi intro">\
                <h3><a href="/lyh" target="_self">煉妖壺</a></h3>\
            </li>\
            <li class="nLi open">\
                <h3><a  href="/dhz" target="_self">東皇鐘</a></h3>\
            </li>\
            <li class="nLi internet">\
                <h3><a href="/pgf" target="_self">盤古斧</a></h3>\
            </li>\
            <li class="nLi service">\
                <h3><a href="/htt" target="_self">昊天塔</a></h3>\
            </li>\
        </ul>');

$(document).bind("click", function (e) {
    $('#qt').each(function () {
        if (e.target != this) {
            $('.news_drop').hide();
        }
    });

})