import { Component } from '@angular/core';

import UCatolica from '@assets/images/sponsors/u-catolica.webp';
import Wolipay from '@assets/images/sponsors/wolipay.webp';

@Component({
  selector: 'app-sponsors',
  standalone: true,
  template: `
    <article class="py-12 bg-[#1A1A1A]">
      <h2 class="text-[#FCEE0A] text-3xl text-center mb-12">
        {{ SECTION_TITLE }}
      </h2>
      <section
        class="container mx-auto grid grid-cols-1 gap-8 justify-items-center items-center"
      >
        @for (sponsor of SPONSORS; track sponsor.url) {
          <a
            [href]="sponsor.url"
            target="_blank"
            rel="noopener noreferrer"
            class="transition-transform hover:scale-105"
          >
            <img
              [src]="sponsor.logo"
              [alt]="sponsor.name"
              class="max-w-[240px] h-auto"
            />
          </a>
        }
      </section>
    </article>
  `,
})
export default class SponsorsComponent {
  protected readonly SECTION_TITLE = 'Con el apoyo de:';

  protected readonly SPONSORS = [
    {
      name: 'Wolipay',
      logo: Wolipay.src,
      url: 'https://wolipay.bo/',
    },
    {
      name: 'Universidad Católica Boliviana',
      logo: UCatolica.src,
      url: 'https://www.ucb.edu.bo/',
    },
  ];
}
