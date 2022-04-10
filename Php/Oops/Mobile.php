<?php 
class Mobile{
    var $price;
    var $title;
    function setPrice($pric){
        $this->price = $pric;
    }
    function getPrice(){
        echo $this->price."\r\n";
    }
    function setName($nam){
        $this->title = $nam;
    }
    function getName(){
        echo $this->title."\n";
    }

}
// we can create any number of objects for a class
$Moto = new Mobile();
$Vivo = new Mobile();
$Moto->setName("Motorola E2");
$Vivo->setName("Vivo Z1 Pro");
$Vivo->setPrice("12,500/-");
$Moto->setPrice("7000/-");
$Moto->getName();
$Moto->getPrice();
$Vivo->getName();
$Vivo->getPrice();
// we can access the variables and method functions of the class with the help of ->(arrow) operator

?>