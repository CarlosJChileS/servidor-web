WebSockets con NestJS
## Comunicacin en tiempo real para aplicaciones web
### que son?
Protocolo de comunicacion bidireccional que permit la conexion persistente entre cliente y servidor.
A difrernecia de HTPP(request,response), mantiene canal abierto para intercambio instantaneo de mensajes
Ventaja clave: 
Comunicacion en tiempo real sin pollig constante
Caso de uso:
Chat, notficaciones live, actualizaciones en vivo, juegos multijugador
### Websockets vs HTPP tradicional
Websockets:
Bidireccional
Conexion persistente
Baja latencia 
Menos overhead
Tiempo real
### Http:
Unidireccional
Request-Response
Mayor latencia
Headers en cada request
Polling necesario
### Cuando usar websockets:
Cuando necesitas actualizaciones isntantaneas y frecuentes
# Arquitectura de Web
NestJS usa Socket.IO por defecto para Webbsockets. Organiza la logica en Gateways(similar a Controllers).. Sopporte para namespaces, room y midleware integrado
Gateway 
Maneja conexiones y eventos
Moudles
Organizacion funcionalidad
Guards Autenticacion y autorizacion
Pipes
Validacion de datos
