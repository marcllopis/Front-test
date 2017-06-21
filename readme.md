# Test de Spin&win

La idea es que he creado un código rapido que da dos endpoints para el spin&win de nuestra web (inventado):

## /spin
http://localhost:3000/spin

- freeSpinLeft:
Numero de Spins que le queda al usuario
- nextFree:
Hora a la cual el usuario volverá a tener spins gratis en formato UTC y con el timezone definido.
- prize:
Premio que le toca, y los premios que aparecen justamente antes y después de este en el spin.

## /prizes
http://localhost:3000/prizes
- id: identificador del premio
- name: Nombre del premio
- img: Imagen del premio que esta en /public
- porcentaje (opcional): Porcentaje en la barra de progreso. Esto puede estar o no.


User story: 

La idea es en base a estos dos endpoints crear un front asincrono (puede ser angular o lo que quieras) que pida 1 vez los prizes y despues que vaya haciendo spins y actualizando los resultados.
Elementos que tiene que tener: 
* Tabla con los premios que puede ganar. Si un premio tiene porcentaje y este esta por encima del 90%, tiene que mostrarse destacado y animado (como si estubiera caliente o a punto de explotar, vibrando de vez en cuando, se creativo :))
* Spins gratis que le quedan al usuario.
* Cuenta atras que aparece solo cuando ya no nos quedan mas Spins y el boton spinear queda bloqueado.
* Boton de spin, entre Cada Spin tiene que estar bloqueado 3 segundos mostrando una cuenta atras.
* Una rueda de Spin que gire con efecto (basandonos en el concepto de heartsone) cada vez que le de al boton de spin, finalizando en el premio que da /spin con el anterior premio y posterior premio a las posiciones adyacentes. Usando las imagenes y titulos de /prizes. La animacion total no tiene que durar mas de 6 seg.  

Requisitos:
- mobile first (pongamos iphone 5 y un android standard)
- No tiene que relentizarse.
- Solo puedes hacer una peticion a /prizes.  

Conceptos visuales:
- https://www.youtube.com/watch?v=OHnMgCBTH9I

