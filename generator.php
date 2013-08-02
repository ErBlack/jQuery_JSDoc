<?php
define('DEPRECATED',(boolean) count(getopt('d')));
define('REMOVED',(boolean) count(getopt('r')));

$xml = new SimpleXMLElement('http://api.jquery.com/resources/api.xml', null, true);
file_put_contents('generated.js', file_get_contents('head.js') . PHP_EOL);

$methods = array();

foreach($xml->entries->entry as $entry) {
	/* @var $entry SimpleXMLElement */
	$attr = $entry->attributes();
	switch($attr['type']) {
		case 'method' :
			$Doc = new JSDocGenerator($entry);
			
			if ($Doc->deprecated && !DEPRECATED) continue;
			if ($Doc->removed && !REMOVED) continue;
			
			$methods[(string) $attr['name']] = $Doc->render();
	}
}

file_put_contents('generated.js', implode(PHP_EOL, $methods), FILE_APPEND);

class JSDocGenerator {
	/**
	 * Имя разрабтчика
	 */
	const AUTHOR = '@author';
	/**
	 * Маркирует функцию как конструктор
	 */
	const CONSTRUCTOR = '@constructor';
	/**
	 * Маркирует метод устаревшим и не рекомендуемым
	 */
	const DEPRECATED = '@deprecated';
	/**
	 *
	 * @see JSDocGenerator::THORWS
	 */
	const EXCEPTION = '@exception';
	/**
	 * Описывает аргумент функции; можно указать тип, задав его в фигурных скобках
	 */
	const PARAM = '@param';
	/**
	 * Означает, что метод приватный
	 */
	const PRIV = '@private';
	/**
	 *
	 * @see JSDocGenerator::RETURNS
	 */
	const RET = '@return';
	/**
	 * Описывает возвращаемое значение
	 */
	const RETURNS = '@returns';
	/**
	 * Описывает связь с другим объектом
	 */
	const SEE = '@see';
	/**
	 * Задает тип объекта, на который указывает ключевое слово «this» внутри функции
	 */
	const THIS = '@this';
	/**
	 * Описывает исключения, выбрасываемые методом
	 */
	const THROWS = '@throws';
	/**
	 * Версия библиотеки
	 */
	const VERSION = '@version';
	const DOC_BEG = '/**';
	const DOC_ITM = ' * ';
	const DOC_END = ' */';
	/**
	 * xml
	 *
	 * @var SimpleXMLElement
	 */
	protected $xml = null;
	/**
	 * Название метода
	 *
	 * @var string
	 */
	public $name = '';
	/**
	 * Возвращаемое значение
	 *
	 * @var string
	 */
	public $return = '';
	/**
	 * Версия с которой метод deprecated
	 *
	 * @var string
	 */
	public $deprecated = false;
	/**
	 * Версия с которой метод удалён
	 *
	 * @var string
	 */
	public $removed = false;
	/**
	 * Описание метода
	 *
	 * @var string
	 */
	public $description = '';
	/**
	 * Версия
	 *
	 * @var string
	 */
	public $version = '';
	/**
	 * Аргументы
	 *
	 * @var array
	 */
	public $arguments = array();
	/**
	 * Генератор описания метода
	 *
	 * @param SimpleXMLElement $xml        	
	 */
	public function __construct($xml) {
		$this->xml = $xml;
		$this->parse();
	}
	/**
	 * Разбирает xml на составляющие
	 */
	protected function parse() {
		foreach($this->xml->attributes() as $key => $value) {
			if(property_exists($this, $key))
				$this->$key =(string) $value;
		}
		
		foreach($this->xml as $key => $value) {
			switch($key) {
				case 'desc' :
					$this->description =(string) $value;
					break;
				case 'signature' :
					$signature = $value;
					break;
			}
		}
		if(isset($signature)) {
			foreach($signature as $key => $value) {
				
				switch($key) {
					case 'added' :
						$this->version =(string) $value;
						break;
					case 'argument' :
						$this->parseArgument($value);
						break;
				}
			}
		}
	}
	/**
	 * Разбирает аргумент
	 *
	 * @param SimpleXMLElement $xml        	
	 */
	protected function parseArgument($xml) {
		$attr = array();
		foreach($xml->attributes() as $key => $value) {
			$attr[(string) $key] =(string) $value;
		}
		
		if(! isset($attr['type'])) {
			$attr['type'] = array();
			
			foreach($xml as $key => $value) {
				$type = $value->attributes();
				if($key == 'type')
					$attr['type'][] =(string) $type['name'];
			}
			
			$attr['type'] = implode('|', $attr['type']);
		}
		
		$attr['name'] = $this->normalizeArgument($attr['name']);
		
		$this->arguments[$attr['name']] = $this::PARAM . " {{$attr['type']}} {$attr['name']} {$xml->desc}";
	}
	public function render() {
		$doc = array();
		$doc[] = $this->description;
		
		if($this->version)
			$doc[] = $this->version();
		if($this->deprecated)
			$doc[] = $this->deprecated();
		
		$doc += $this->arguments;
		
		$doc[] = $this->returns();
		
		$doc = $this::DOC_BEG . PHP_EOL . $this::DOC_ITM . implode(PHP_EOL . $this::DOC_ITM, $doc) . PHP_EOL . $this::DOC_END;
		
		return $doc . PHP_EOL . $this->method();
	}
	protected function method() {
		$arguments = implode(', ', array_keys($this->arguments));
		
		$preffix = strpos($this->name, 'jQuery') !== 0 ? 'jQuery.prototype.' : '';
		
		return "{$preffix}{$this->name} = function({$arguments}){}";
	}
	protected function returns() {
		return $this::RETURNS . " {{$this->return}}";
	}
	protected function version() {
		return $this::VERSION . " {$this->version}";
	}
	protected function deprecated() {
		return $this::DEPRECATED . " {$this->deprecated}";
	}
	/**
	 * Приводит имя аругмента к валидной строке
	 *
	 * @param string $string        	
	 */
	protected function normalizeArgument($string) {
		$search = array(
				'function',
				'switch',
				' ',
				'-' 
		);
		$replace = array(
				'foo',
				'toggle',
				'',
				'' 
		);
		return str_replace($search, $replace, preg_replace('/\\s*\\([^()]*\\)\\s*/', '',(string) $string));
	}
}