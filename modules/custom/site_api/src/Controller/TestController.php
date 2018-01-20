<?php
namespace Drupal\site_api\Controller;

use Drupal\Core\Controller\ControllerBase;

class TestController extends ControllerBase {
	public static function testPage() {
		$values = array('type' => 'slide');

		$node = \Drupal::entityTypeManager()
			->getStorage('node')
			->create($values);

		$form = \Drupal::entityTypeManager()
			->getFormObject('node', 'default')
			->setEntity($node);

		$render = \Drupal::formBuilder()->getForm($form);;
		$render['#attached']['library'][] = 'site_api/form-convertor';

		return $render;
	}
}