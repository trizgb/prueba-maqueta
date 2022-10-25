# Redradix UI developer - test

## Descripción y tecnologías usadas

Esta prueba consiste en el diseño de un “Hero" dentro de una landing page con más secciones (Hero, Quiénes somos, Servicios, Equipo, Newsletter, Contacto, Footer…). Y consta de 2 partes:

- Estimación del desarrollo de dicha landing y respuesta como si fuese para un cliente. (Esta parte se desarrollará en párrafos posteriores dentro de este mismo README).
- Maquetación de dicho Hero.

Para este reto, se han usado las siguientes tecnologías:

- NextJS, como framework principal.
- Typescript, para el tipado dentro de la page.
- CSS, para el desarrollo de los estilos (podría haber optado por Sass, Styled-components o TailwindCSS, pero me decanté por CSS al ser un proyecto light y para el que quería ser más "ágil").

## Parte primera de la prueba: estimación

Para estimar cuánto conllevaría el desarrollo de la landing page que contiene este hero, habría que tener en cuenta en primer lugar que elementos componen la página, si existen animaciones y la complejidad de éstas, así como la complejidad de la interacción que requiera la página.
Además, habría que tener en cuenta el uso de cookies y el posicionamiento SEO.
Y antes de todo ello, saber qué tecnologías se usarán para el desarrollo.

Por ello, cada bloque se estimaría, en la parte de desarrollo, a través de puntos de esfuerzo siendo el de menor rango un componente "tonto" y que no lleve interacción o animaciones y el de mayor puntuación aquel que es más complejo.

Así, teniendo en cuenta que la página contiene Header, Hero, Sections (Quiénes somos, Servicios, Equipo, Newsletter, Contacto), Footer, Layout de la página y unas animaciones no descabelladas:

- Header 3p
- Hero 5p
- Quienes Somos 8p
- Servicios 8p
- Equipo 8p
- Newsletter 3p
- Contacto 2p
- Footer 1p
- Layout 3p

Total = 41p

Al cliente, se le explicaría todo lo que va a contener su web, y en tiempo estimado se le daría una aproximación (exclusivamente de la maqueta, sin contar subida a prod, etc) de 5 días.

## Parte segunda de la prueba: maqueta

- `npm install` para instalar la app
- `npm dev` para correr la app
