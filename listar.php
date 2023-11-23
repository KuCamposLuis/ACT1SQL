<?php
try {
    $conexion = new PDO("mysql:host=localhost;port=3306;dbname=bd_Camiones", "root","");
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    $res = $conexion->query('SELECT*FROM camiones') or die(print($conexion->errorInfo()));
    $data = [];
    while ($item = $res->fetch(PDO::FETCH_OBJ)) {
        
        $data[] = [
            'id' => $item->id,
            'nombre' => $item->nombre,
            'totalmacenaje' => $item->totalmacenaje,
            'placas' => $item->placas,
            'marca' => $item->marca,
        ];
    }
    echo json_encode($data);


} catch (\PDOException $error) {
    echo $error->getMessage();
    die();
}