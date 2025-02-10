import { Component, input, type InputSignal } from '@angular/core';
import DateIcon from '@assets/icons/date-icon.svg';
import TimeIcon from '@assets/icons/time-icon.svg';

@Component({
  selector: 'app-card-blog',
  standalone: true,
  template: `
    <a
      class="flex flex-col max-w-[393px] h-[360px] rounded-xl overflow-hidden border-[#414142] border-2"
      [attr.href]="link() || null"
      [class.pointer-events-none]="!link()"
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

          <label class="flex gap-2 justify-center items-center">
            <img [src]="TIME_ICON_IMG" alt="Prompt Icon" />
            <p>{{ time() }}</p>
          </label>
        </div>
      </div>
    </a>
  `,
})
export default class CardComponent {
  public title: InputSignal<string> = input.required<string>();
  public content: InputSignal<string> = input.required<string>();
  public image: InputSignal<string> = input.required<string>();
  public date: InputSignal<string> = input<string>('');
  public time: InputSignal<string> = input.required<string>();
  public link: InputSignal<string> = input<string>('');
  protected readonly DATE_ICON_IMG: string = DateIcon.src;
  protected readonly TIME_ICON_IMG: string = TimeIcon.src;
}
