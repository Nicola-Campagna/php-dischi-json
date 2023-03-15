<?php

$disco=file_get_contents(__DIR__."/../data/dischi.json");

header("Content-Type: application/json");

echo ($disco);

?>