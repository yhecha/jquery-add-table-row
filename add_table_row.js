$(function() {
    // 行が1行しかなかったら、行の削除ボタンを表示させない(入力行が無くなってしまうので)
    if (hideDeleteBtn("#tbl tbody")) {
        $('.btn_deleteTableRow').hide();
    }

    // 行追加ボタンが押されたら
    $('#btn_addTableRow').on("click", function(event) {
        // 最終行のフォームをクローン
        $("#tbl tbody tr:last-child").clone(true).appendTo("#tbl");
        // クローンした行の値をクリアする(値も引き継いでしまうので)
        $("#tbl tbody tr:last-child input").val("");
        // 削除ボタンを表示する
        $('.btn_deleteTableRow').show();
    });

    // 削除ボタンが押された行を削除する
    $('.btn_deleteTableRow').click(function() {
        var row = $(this).closest("tr").remove();
        $(row).remove();
        // 削除ボタンが押された時にも削除ボタン非表示判定を行う。
        if (hideDeleteBtn("#tbl tbody")) {
            $('.btn_deleteTableRow').hide();
        }
    });
});

/** 削除ボタン非表示判定
 *  行が1行しかない場合は、行削除ボタンは非表示にする。
 * 
 * return bool true: 非表示, false: 表示
 */
function hideDeleteBtn(elem)
{
    if (elem != null) {
        var len = $(elem).children().length;
        if (len == 1) {
            return true;
        }
    }
    return false;
}
