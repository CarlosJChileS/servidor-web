capa de dominio:astraccion de los data source, dtono debe haber referecnias a express, typeorm, base de datos, validar, 
El dominio debe estar completamente limpio
para titulacion es mejo buscar un dominio nuvo
Repository ,esta ligada a mucho mas alla a una base de datos
Infraestuctre
capa de implementacion seria el data-source
capa de repositorio , que utiliza 
sin tocar el dominio/
siempre se aisla y se abstrea el dominio de la implementacoon
la implementacio, es utilizar, el dominio , implementarlo
agregar un capa adicional de validacion, o quier una forma de traducir lo que maneja el servicio rest en donde iria , se agregaria a capaadicional en donde se haria

Cuando se maneja online y offline se crea otra estructura para modo ofline


traduccion usando middleware en la capa de presentacion
