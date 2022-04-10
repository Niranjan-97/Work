<?php
//   Class is a programmer-defined data type which includes local variables and local methods  
// Class is a collection of Objects and Objects has Properties Behaviour 
class ClassAndObjects{
    
    public function Name(){
        echo "Drupal Book";
    }
    public function Price(){
        echo "900 ";
    }
}

// To create an Object We need to use a new Operator. Here php Object is the Object of the ClassAndObjects Class

$obj = new ClassAndObjects();
$obj->Name();
$obj->Price();