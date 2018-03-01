function my_ajax_post(_url,_data,_onsuccess,_dataType)
{
    if(_dataType === undefined)
        _dataType = "json";
    $.ajax({url: _url, 
        dataType: _dataType,
        data: _data,
        processData: false,
        type:"post",
        success: function(data)
            {
                _onsuccess(data);
            },
        error: function(req, err, exp)
            {
                goto_login();
            }
    });
}

function goto_login()
{
    var p = window.top;
    p.location.href = "/index.html";
}

function isIP(strIP) 
{
    //if (isNull(strIP)) return false;
    var re=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g; //匹配IP地址的正则表达式
    if(re.test(strIP))
    {
        if( RegExp.$1 <256 && RegExp.$2<256 && RegExp.$3<256 && RegExp.$4<256) 
            return true;
    }
    return false;
}

function my_parse_int(num)
{
    if(num=="")return 0;
    return parseInt(num);
}

function isValidIGbid(strId)
{
    var re=/[0-9]{20}/;
    return re.test(strId);
}
function isValidIGbid2(strId)
{
    var re=/[0-9]{2}/;
    return re.test(strId);
}
function isValidIGbid4(strId)
{
    var re=/[0-9]{4}/;
    return re.test(strId);
}
function isValidIGbid6(strId)
{
    var re=/[0-9]{6}/;
    return re.test(strId);
}
function isValidIGbid8(strId)
{
    var re=/[0-9]{8}/;
    return re.test(strId);
}
function isValidIGbidEx(strId,strLen)
{
    var re=/[0-9]{1,20}/;
    return re.test(strId);
}
