# add_table_row.js の使い方
htmlのtableに行を追加するJS。  
行の追加と削除が可能。  
*JS初心者なのでソース汚いのはご了承くだせい。。。  

[今後の課題]  
・現状だと無限に行追加ができてしまうので、指定した上限数以上は行追加ができない処理を入れる。  


## JSを読み込む
jQueryを使うので、そちらの読み込みも忘れずに。  
```
# ディレクトリは適宜変更
<script src="./add_table_row.js"></script>
```

## 行追加用のボタンを設置
「id="btn_addTableRow"」を指定する。  
valueはお好みで。  
```
# 行追加ボタン
<input type="button" id="btn_addTableRow" value="行を追加する">
```

## tableのIDを指定する
```
# id="tbl"
<table id="tbl">
```

## tableにtheadとtbodyを指定する
tbodyの要素をクローンするといった処理をしている。  
```
<thead>
    ....
</thead>
<tbody>
    ....
</tbody>
```

## 行削除ボタンを設置する
1行に対して1つ削除ボタンをセットする。  
削除ボタンが押された行が削除されるようになっている。  
classは「"btn_deleteTableRow"」を指定する。  
*取り敢えず現状はname値を"btn_deleteTableRow"にしなくても大丈夫。  
```
# 行削除ボタン
<td>
    <button name="btn_deleteTableRow" class="btn_deleteTableRow">この行を削除</button>
</td>
```

-End-