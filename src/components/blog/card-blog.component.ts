import { Component, input } from '@angular/core';
import DateIcon from '@assets/icons/date-icon.svg';
import TimeIcon from '@assets/icons/time-icon.svg';

@Component({
  selector: 'app-card-blog',
  standalone: true,
  template: `
    <a
      class="flex flex-col max-w-[393px] h-[360px] rounded-xl overflow-hidden border-[#414142] border-2"
      [href]="'/posts/' + link()"
    >
      <img class="h-[55%]" [src]="image()" [alt]="title()" />
      <div
        class="h-[45%] bg-[#1B2640] text-amber-50 flex flex-col gap-3 p-4 justify-between"
      >
        <h2 class="text-[20px] md:text-xl">{{ title() }}</h2>
        <p class="text-[14px] md:text-[16px]">{{ content() }}</p>
        <div class="flex gap-4 text-[#8E9196] font-bold text-[14px]">
          @if (date()) {
            <label class="flex gap-2 justify-center items-center">
              <img [src]="DATE_ICON_IMG" alt="Prompt Icon" />
              <p>{{ date() }}</p>
            </label>
          }
        </div>
      </div>
    </a>
  `,
})
export default class CardComponent {
  title = input.required<string>();
  content = input.required<string>();
  image = input.required<string>();
  date = input<string>('');
  link = input.required<string>();
  protected readonly DATE_ICON_IMG = DateIcon.src;
  protected readonly TIME_ICON_IMG = TimeIcon.src;
}
