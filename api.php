<?php
$level = $_GET['level'] == 'min' ? 'min' : 'max';
$sql = "SELECT `text` FROM `main` WHERE LEVEL = '$level'  ORDER BY RANDOM() limit 1";
$db = new SQLite3('./db/data.db');
echo $db->querySingle($sql);
