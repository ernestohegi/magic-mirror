<?php

$handle = fopen('2017_05_04_benefit_stores_coordinates.csv', 'r');
$row = 0;

while ($data = fgetcsv($handle, 1000, ',')) {
    ++$row;

    $storeName = isset($data[0]) ? $data[0] : '';
    $storeLatitude = isset($data[1]) ? $data[1] : 0;
    $storeLongitude = isset($data[2]) ? $data[2] : 0;

    var_dump($row);
    if ($storeName) var_dump('Store name: ' . $storeName);
    if ($storeLatitude) var_dump('Store latitude: ' . $storeLatitude);
    if ($storeLongitude) var_dump('Store longitude: ' . $storeLongitude);
}

fclose($handle);
