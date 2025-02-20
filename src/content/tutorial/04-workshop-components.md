---
title: Componentes
author: Angular Bolivia
description: Los componentes son los bloques básicos de construcción de las páginas web en Angular. Contienen una parte visual en html (la vista) y una funcional en Typescript.
order: 4
slug: 04-workshop-components
nextStep: '05-workshop-html'
prevStep: '03-workshop-stackblitz'
---

# ¿Qué son los componentes?

> Los componentes son los bloques básicos de construcción de las páginas web en Angular. Contienen una parte visual en html (la vista) y una funcional en Typescript.

---

Un componente estará compuesto por tres bloques de código:

1. **Imports**, las sentencias de importación de los diferentes elementos que empleará el componente.

2. **Decorador** **_@Component_**, con al menos los siguientes metadatos:

   - Selector: que define la etiqueta html donde se renderiza el componente.
   - Template: el archivo html con la vista del componente.
   - Style: con el archivo CSS con los de estilos del componente.

3. **Export de la Clase**, definición y exportación de la clase con la lógica del componente.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: ` <h1>Hola mundo!</h1> `,
})
export class App {
  name = 'Angular';
}
```

[> Próximo artículo: Introducción a HTML](/tutorial/05-workshop-html)

[< Artículo anterior: Stackblitz](/tutorial/03-workshop-stackblitz)
