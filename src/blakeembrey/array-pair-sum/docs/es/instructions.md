
#  Suma de pares de matrices

Dada una matriz de enteros, genere todos los pares distintos que suman un valor específico k. Considere el hecho de que el mismo número puede sumar k con sus duplicados en la matriz.

f(10, [3, 4, 5, 6, 7]) // [ [4, 6], [3, 7] ]
f(8, [3, 4, 5, 4, 4]) // [ [3, 5], [4, 4], [4, 4], [4, 4] ]
f(10, [3, 5, 6, 8]) // []

## Más difícil
- Los números de pares no se pueden repetir, ejemplo: [5, 5]
- Los números de los pares no pueden ser iguales sino de diferente orden, ejemplo: [3, 4], [4, 3]
- No puede ser una matriz vacía