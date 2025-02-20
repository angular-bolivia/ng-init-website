---
title: CSS
author: Angular Bolivia
description: Nuestra aplicación para manejo de gastos todavía es un poco fea, ¿no te parece? ¡Es hora de ponerla bonita! Para eso, vamos a usar CSS.
order: 11
nextStep: '12-delete-expenses'
prevStep: '10-budget'
---

# CSS - ¡Que quede bonito!

> Nuestra aplicación para manejo de gastos todavía es un poco fea, ¿no te parece? ¡Es hora de ponerla bonita! Para eso, vamos a usar CSS.

## ¿Qué es CSS?

El lenguaje CSS (las siglas en inglés de hojas de estilos en cascada, o Cascading Style Sheets) sirve para describir la apariencia de un sitio web escrito en un lenguaje de marcado (como HTML). Es como la capa de pintura para nuestra página web. ;)

## Paso #1

En los archivos que conforman la aplicación existe un archivo llamado `global_styles.css`, que es donde vamos a trabajar todos nuestros estilos.

![Estructura del proyecto](/images/tutorial/project-structure.png)

En ese archivo podemos ajustar cualquier cosa respecto al aspecto visual de la aplicación. Un ejemplo, si agregas este código dentro del archivo `global_styles.css`:

```css
body {
  background-color: red;
}
```

El resultado es:

![App con fondo rojo](/images/tutorial/red-app.png)

## Paso #2

Vamos a usar una hoja de estilos que ya está preparada para que funcione muy bien dentro de la aplicación.

Tenemos 2 opciones, abre cualquier de las 2, copia todo el contenido y reemplaza lo que tengas en `global_styles.css` con lo que acabas de copiar:

- <a href="https://raw.githubusercontent.com/angular-bolivia/ng-she-workshop/develop/src/styles.css" target="_blank" rel="noopener noreferrer">Opción de estilos #1</a>
- <a href="https://raw.githubusercontent.com/angular-bolivia/ng-she-workshop/develop/src/styles-v2.css" target="_blank" rel="noopener noreferrer">Opción de estilos #2</a>

El resultado será el siguiente si escoges la Opción #1:

![App final antes de ingresar presupuesto](/images/tutorial/app-1.png)

## Paso #3

Ahora vamos a verlo en pantalla completa haciendo click en el botón **Open Preview in new Tab**(ubicado en la esquina superior derecha de Stackblitz).

![App final después de ingresar presupuesto](/images/tutorial/app-2.png)

En caso de mostrarse una ventana con el mensaje "Additional step required", asegúrate de hacer click en el botón "Connect to Project" para continuar.

El resultado de la Opción #1:

![App final en pantalla completa](/images/tutorial/app-3.png)

El resultado de la Opción #2:

![App final en pantalla completa](/images/tutorial/app-4.png)
