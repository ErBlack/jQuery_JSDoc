<?php
$xml = new SimpleXMLElement('http://api.jquery.com/resources/api.xml', null, true);

foreach ($xml->entries->entry as $entry) {
    /* @var $entry SimpleXMLElement */
    $attr = $entry->attributes();
    switch ($attr['type']) {
    	case 'method':
    	    $description = array('/**');
    	    $description[] = " * {$entry->desc}";
     	    $description[] = " * @return {{$attr['return']}}";
    	    $description[] = " */"; 
    	    $description[] = "jQuery.prototype.{$attr['name']} = function(){}";
    	    $description[] = PHP_EOL;
    }
    file_put_contents('test.js',print_r(implode(PHP_EOL, $description),true),FILE_APPEND);
}