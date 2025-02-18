import { Component } from '@angular/core';

import EventHighlightsComponent from './event-highlights.component';

import AngularBolivia from '@assets/images/angular-bolivia.webp';

@Component({
  selector: 'app-about-us',
  standalone: true,
  template: `
    <article>
      <section
        class="flex flex-col items-center gap-8 px-4 py-16 bg-[#1A1A1A] text-white"
      >
        <header class="md:py-4">
          <h2 class="text-[#00D5FF] text-4xl font-bold"> {{ EVENT_TITLE }}</h2>
        </header>

        <section class="max-w-[1100px] flex flex-col gap-8 md:gap-16">
          <p class="leading-[36px]">
            <strong class="text-[#00F0FF]">NG Init</strong> es un workshop
            práctico de <strong class="text-[#D946EF]">Angular</strong>,
            diseñado para estudiantes y personas interesadas en adentrarse en el
            mundo del desarrollo web moderno. Nuestra misión es brindar una
            experiencia de aprendizaje interactiva y dinámica, donde los
            participantes puedan construir sus primeras aplicaciones con la guía
            de
            <strong class="text-[#00F0FF]"
              >mentores expertos de toda Bolivia</strong
            >.
          </p>

          <p class="leading-[36px]">
            <strong class="text-[#00F0FF]">
              El
              <time datetime="2025-02-22">22 de febrero de 2025</time> </strong
            >, reuniremos a apasionados del desarrollo y expertos de la
            industria en la
            <strong class="text-[#00F0FF]">
              Universidad Católica de Cochabamba </strong
            >, creando un espacio de colaboración y crecimiento. Ya sea que
            estés dando tus primeros pasos en Angular o quieras reforzar tus
            conocimientos,
            <strong class="text-[#D946EF]">
              NG Init es el lugar ideal para comenzar tu camino.
            </strong>
          </p>

          <div class="flex flex-col gap-2 items-center w-full">
            <p class="text-xl">Organizado por:</p>

            <img [src]="ANGULAR_BOLIVIA" alt="Angular Bolivia" />
          </div>
        </section>
      </section>

      <app-event-highlights></app-event-highlights>
    </article>
  `,
  imports: [EventHighlightsComponent],
})
export class AboutUsComponent {
  protected readonly ANGULAR_BOLIVIA: string = AngularBolivia.src;
  protected readonly EVENT_TITLE: string = 'NG | INIT';
}
