$(document).ready(function () {
    var btn = document.getElementById('btn_nmsl');
    var clipboard = new ClipboardJS(btn);
    clipboard.on('success', function (e) {
        $('#span_copy').text('已复制')
        window.setTimeout(copy_success, 400);
    });
    random('min');
});

var last_nmsl = new Array();

function random(level) {
    if ($('#txt_nmsl').text().length > 0) {
        last_nmsl.push($('#txt_nmsl').text())
        $('#btn_last').attr('disabled', false);
    } else {
        $('#btn_last').attr('disabled', true);
    }

    var url = './api.php?level=' + level;

    $.get(url, function (e) {
        result = e
        console.log($('#chk_god').is(':checked'))
        if ($('#chk_god').is(':checked')) {
            result = result.replace('妈', '爸').replace('🐴', '爹').replace('🐎', '爹')

            var reg = new RegExp("妈", "g");
            result = result.replace(reg, "爸");

            reg = new RegExp("🐴", "g");
            result = result.replace(reg, "爹");

            reg = new RegExp("🐎", "g");
            result = result.replace(reg, "爹");

            reg = new RegExp("母亲", "g");
            result = result.replace(reg, "爹");

            reg = new RegExp("母", "g");
            result = result.replace(reg, "公");

            reg = new RegExp("你吗", "g");
            result = result.replace(reg, "你爹");

            reg = new RegExp("逼", "g");
            result = result.replace(reg, "屌");

            reg = new RegExp("阴道", "g");
            result = result.replace(reg, "肛门");

            reg = new RegExp("处女", "g");
            result = result.replace(reg, "处男");

            reg = new RegExp("她", "g");
            result = result.replace(reg, "他");
        }
        $('#txt_nmsl').text(result);
        $('#btn_nmsl').attr('data-clipboard-text', result);
    });

}

function last() {
    result = last_nmsl.pop()
    $('#txt_nmsl').text(result);
    $('#btn_nmsl').attr('data-clipboard-text', result);

    if (last_nmsl.length == 0) {
        $('#btn_last').attr('disabled', true);
    }
}

function copy_success() {
    $('#span_copy').text('复制');
}