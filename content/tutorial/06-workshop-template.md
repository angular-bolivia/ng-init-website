---
title: Tu primera plantilla
author: Angular Bolivia
description: Ahora vamos a añadir la estructura HTML inicial de nuestra aplicación.
order: 6
slug: 06-workshop-template
nextStep: '07-workshop-ngmodel'
prevStep: '05-workshop-html'
---

# ¡Tu primera plantilla!

> Ahora vamos a añadir la estructura HTML inicial de nuestra aplicación.

---

## Paso #1

Copia el siguiente código HTML a tu archivo `main.ts`. Este código debe estar en la propiedad `template`:

```html
<div class="contenedor-principal">
  <div class="form gasto">
    <h3>Agrega tus gastos aquí</h3>
    <div>
      <label for="nombre-gasto">Nombre:</label>
      <input id="nombre-gasto" type="text" />
    </div>
    <div>
      <label for="cantidad-gasto">Cantidad:</label>
      <input id="cantidad-gasto" type="number" />
    </div>
  </div>
</div>
```

El resultado que deberás obtener:

<div class="flex justify-center items-center flex-col">
  <img src="/images/tutorial/template-1.png" alt="Primera parte de la plantilla" >
</div>

[> Próximo artículo: Usando ngModel](/tutorial/07-workshop-ngmodel)

[< Artículo anterior: Introducción a HTML](/tutorial/05-workshop-html)
