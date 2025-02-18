import { Component } from '@angular/core';

import type { EventHighlight } from '@interfaces/event-highlight.interface';

import CyberpunkDuo from '@assets/images/cyberpunk-duo.webp';
import PromptIcon from '@assets/icons/prompt-icon.svg';
import RayoIcon from '@assets/icons/rayo-icon.svg';

@Component({
  selector: 'app-event-highlights',
  standalone: true,
  template: `<section
    class="flex flex-col items-center gap-8 py-16 px-4 text-white bg-[#111828] pb-0 md:px-8"
  >
    <header class="md:py-4">
      <h2
        class="flex gap-1 md:gap-2 text-[#F9E76A] text-4xl font-bold text-center"
      >
        <img [src]="PROMPT_ICON_IMG" alt="Prompt Icon" />

        {{ TITLE }}
      </h2>
    </header>

    <ul class="flex flex-col gap-4 mb-8 md:gap-8">
      @for (highlight of HIGHLIGHTS; track $index) {
        <li class="flex gap-4">
          <img [src]="RAYO_ICON_IMG" alt="Rayo Icon" />

          <p>
            <span class="font-bold"> {{ highlight.title }}: </span>

            <span>
              {{ highlight.description }}
            </span>
          </p>
        </li>
      }
    </ul>

    <img [src]="CYBERPUNK_DUO_IMG" alt="Cyberpunk Duo" />
  </section>`,
})
export default class EventHighlightsComponent {
  protected readonly CYBERPUNK_DUO_IMG: string = CyberpunkDuo.src;
  protected readonly PROMPT_ICON_IMG: string = PromptIcon.src;
  protected readonly RAYO_ICON_IMG: string = RayoIcon.src;

  protected readonly TITLE: string = '¿Qué esperar del NG | INIT?';
  protected readonly HIGHLIGHTS: EventHighlight[] = [
    {
      title: 'Aprendizaje guiado',
      description: 'Talleres paso a paso diseñados para principiantes',
    },
    {
      title: 'Mentoría experta',
      description:
        'Aprende de desarrolladores con experiencia en la industria.',
    },
    {
      title: 'Experiencia práctica',
      description: 'Construye aplicaciones reales en un entorno colaborativo.',
    },
    {
      title: 'Oportunidades de networking',
      description:
        ' Conéctate con otros apasionados y profesionales del sector.',
    },
  ];
}
