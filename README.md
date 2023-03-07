## <p align="">Ingeniero Carlos García, Arquitecto de Soluciones Asociado y Desarrollador Asociado de <a href="https://aws.amazon.com/es/" target="_blank">AWS</a>.</p>

<p align="center">
  <a href="https://www.linkedin.com/in/ingcarlosgarciachacon/" target="blank"><img src="https://media.licdn.com/dms/image/C5603AQHQqJttsF0cJg/profile-displayphoto-shrink_200_200/0/1656990249470?e=1683763200&v=beta&t=B8efnOKuHa1El-fWUwCYhuchgzP7-S70tLNlaF6EgTQ" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Diseño de Solución para Infraestructura en Nube de AWS
<p> A continuación se presenta el modelo de la solución  </p>
<p align="center">
<a href="https://ibb.co/4RWyv8c"><img src="https://i.ibb.co/N2xhD9X/modelo-solucion-infra.png" alt="modelo-solucion-infra" border="0"></a>
</p>

## Descripción

Acontinuación se presenta el diseño de la solución implementada en la nube de AWS y código versionado en github.
 - Github (versionamiento de código)
 - CodeBuild (Construcción de la imagen docker)
 - Elastic Container Registry (Para registro de la Imagen Docker).
 - Elastic Container Service (Para despliegue de contenedores).
 - CodePipeline (Estrategia de detección de cambios y despliegue de la aplicación en los cluster de ECS
 - Fargate cómo estrategia de despliegue de los contenedores.
 - Cloudwatch para monitoreo de eventos en los logs.
 - Application Load Balancer para distribución del tráfico entre los pods


## Desarrollo de Api REST en NestJs

NestJS es un framework progresivo de NodeJS desarrollado en TypeScript diseñado para facilitar el desarrollo de aplicaciones backend, aportando a los programadores una buena estructura y metodología inicial.

Aunque es compatible con TypeScript, NestJS también permite desarrollar aplicaciones en código JavaScript. Esto permite que sea utilizado para el desarrollo de la gran mayoría de aplicaciones backend. 

Además, soluciona uno de los problemas más importantes que los usuarios de Node, sobre todo principiantes, tienden a encontrarse. NodeJS es un programa ideal para facilitar el desarrollo de aplicaciones web: permite expandir fácilmente el código, presenta un muy buen rendimiento, alta escalabilidad… 

Pese a esto, si no se tiene una buena metodología y estructura, el desarrollo con Node puede llegar a ser complejo y difícil de mantener. NestJS soluciona este problema proporcionando una arquitectura clara que facilita tanto el desarrollo como el mantenimiento de aplicaciones. 

## Beneficios

NestJS presenta varios beneficios que facilitan el desarrollo de aplicaciones backend con NodeJS:

Arquitectura de proyecto simple pero efectiva, que facilita tanto la escalabilidad del proyecto como su mantenimiento.
Elevada adaptabilidad a diferentes proyectos. Permite crear todo tipo de aplicaciones Backend.
Aunque está diseñado para TypeScript, permite codificar también con JavaScript.
La arquitectura modular del framework permite utilizar otras bibliotecas de NodeJS.
Emplea las últimas funciones de JS. 
En definitiva, NestJS agiliza increíblemente el trabajo que supone desarrollar aplicaciones backend, una API por ejemplo. En ese sentido, es un framework que facilita mucho el trabajo que supone trabajar con NodeJS puesto que soluciona sus principales carencias. 

Cualquier desarrollador Backend que emplee de manera habitual NodeJS debería aprender a trabajar con NestJS, algo que no le supondrá ningún problema si está familiarizado con TypeScript. Si no es el caso, debería empezar aprendiendo este lenguaje: es posible que termine sustituyendo JavaScript.


<p align="">***Tomado de <a href="https://www.epitech-it.es/nestjs-que-es/#:~:text=NestJS%20presenta%20varios%20beneficios%20que,todo%20tipo%20de%20aplicaciones%20Backend." target="_blank">epitech</a> </p>


## Acerca de NestJs

<p align="">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->


[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
