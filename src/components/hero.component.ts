import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

import Subtitle from '../assets/images/hero-subtitle.webp';
import HeroImg from '../assets/images/hero.webp';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgStyle],
  template: `
    <article
      class="hero h-screen p-4 md:p-8 bg-cover bg-center bg-no-repeat"
      [ngStyle]="{
        backgroundImage: 'url(' + HeroImg + ')',
      }"
    >
      <section
        class="relative z-[2] bg-no-repeat bg-cover bg-center h-full flex flex-col justify-center"
      >
        <svg
          class="absolute inset-0"
          width="100%"
          height="100%"
          viewBox="0 0 1469 807"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M1 1H1468V806H918.5L890 785H582L556 806H1V712.524L30.7796 686.488V109.841L1 79.5366V1Z"
            stroke="#00F0FF"
            stroke-opacity="0.5"
            stroke-width="2"
          />
        </svg>

        <!-- TODO: insert navbar -->

        <header
          class="relative z-[3] h-full items-center justify-end flex flex-col gap-6"
        >
          <h1
            class="text-[clamp(3rem,8vw,10rem)] flex justify-center items-center gap-4 md:gap-8 text-white font-bold"
          >
            {{ EVENT_NAME }}
          </h1>

          <h2 class="flex justify-center px-4">
            <img [src]="HERO_SUBTITLE" alt="Hero subtitle" />
          </h2>
        </header>

        <section
          class="relative z-[3] text-white text-center pb-10 flex flex-col gap-10 md:gap-20 h-full justify-end md:justify-center items-center"
        >
          <section class="flex flex-col gap-2">
            <p class="text-[clamp(1.5rem,4vw,3rem)] font-semibold">
              <time datetime="2025-02-22">
                {{ EVENT_DATE }}
              </time>
            </p>

            <p class="text-xl">
              {{ EVENT_LOCATION }}
            </p>
          </section>

          <a
            [href]="APPLY_LINK"
            rel="noreferrer"
            rel="noopener"
            class="border-2 border-[#FCEE0A] rounded-4xl py-3 px-10 bg-[#17171799] hover:bg-[#FCEE0A] hover:text-black hover:border-black transition-all duration-300 ease-in-out"
          >
            {{ APPLY_LABEL }}
          </a>
        </section>
      </section>
    </article>
  `,
  styles: `
    .hero:after {
      content: '';
      position: absolute;
      inset: 0;
      z-index: 1;
      background: linear-gradient(
        180deg,
        rgba(107, 9, 141, 0.8) 18.5%,
        rgba(0, 31, 33, 0.6) 54%,
        rgba(3, 24, 57, 0.7) 100%
      );
    }
  `,
})
export class HeroComponent {
  protected readonly EVENT_LOCATION: string = 'Cochabamba - Bolivia';
  protected readonly EVENT_DATE: string = '22 de Febrero, 2025';
  protected readonly APPLY_LABEL: string = 'APLICAR AL EVENTO';
  protected readonly EVENT_NAME: string = 'NG | INIT';
  protected readonly APPLY_LINK: string = '#';

  protected readonly HERO_SUBTITLE: string = Subtitle.src;
  protected readonly HeroImg: string = HeroImg.src;
}
