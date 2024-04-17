2- Array pair sum

## Pasos

1. Seleccionar el primer número del arreglo y sumarlo con los suiguientes para ver con cuál la suma da el número del primer parámetro

2. Crear un array con el número seleccionado y el encontrado

No se puede repetir
No Puede ser un arreglo vacío
No pueden ser números iguales

## Solución

1. Hacer un mapeo del arreglo general INTEGERS_ARRAY.Este devolverá un nuevo array con las parejas de números

2. Por cada loop, hacer un find del mismo arreglo para encontrar los números enteros que, sumando 
el currentValue, del la suma esperada. Este de devolverá una pareja de números en array, el currentValue y el secondNumberMatched

3. Para evitar números repetidos, hice una función extra que elimina esas parejas

4. Para evitar las parejas repetidas pero en diferente orden, hice una función extra que elimina esas parejas

5. Para evitar los arreglos vacíos de los elementos que no suman el valor esperado, hice una función para eliminarlos



