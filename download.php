<?php

$type = $_GET['type'];
$contentId = $_GET['contentId'];

$file = "files/".$type."/";
switch($type) {
    case "ftm":
        $file .= $contentId.".mp3";
        break;
    case "sticker":
        $file .= $contentId.".gif";
        break;
}

if(file_exists($file)) {
    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename='.basename($file));
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($file));
    readfile($file);
    exit;
}

?>
