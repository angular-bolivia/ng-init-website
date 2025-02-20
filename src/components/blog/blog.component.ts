import { Component } from '@angular/core';
import CardBlogComponent from './card-blog.component';
import CodeOfConductImg from '@assets/images/code-of-conduct.webp';
import PromptIcon from '@assets/icons/prompt-icon.svg';

@Component({
  selector: 'app-blog-component',
  standalone: true,
  imports: [CardBlogComponent],
  template: `
    <article class="bg-[#111828] pb-16">
      <header class="flex flex-col items-center gap-4 py-16 px-4 md:px-8">
        <h2
          class="flex gap-1 md:gap-2 text-white text-4xl font-bold text-center"
        >
          <img [src]="PROMPT_ICON_IMG" alt="Prompt Icon" />
          {{ TITLE }}
        </h2>
      </header>

      <section
        class="flex flex-col md:flex-row gap-8 px-4 justify-center items-center md:px-8"
      >
        <app-card-blog
          [title]="CODE_OF_CONDUCT"
          [content]="CODE_OF_CONDUCT_CONTENT"
          [date]="CODE_OF_CONDUCT_DATE"
          [image]="CODE_OF_CONDUCT_IMAGE"
          [time]="CODE_OF_CONDUCT_TIME"
          [link]="CODE_OF_CONDUCT_LINK"
        ></app-card-blog>
      </section>
    </article>
  `,
})
export default class BlogComponent {
  protected readonly TITLE: string = 'Blog';
  protected readonly CODE_OF_CONDUCT: string = 'Código de conducta';
  protected readonly CODE_OF_CONDUCT_CONTENT: string =
    'Explora el código de conducta del día del evento.';
  protected readonly CODE_OF_CONDUCT_DATE: string = '3/2/2025';
  protected readonly CODE_OF_CONDUCT_IMAGE: string = CodeOfConductImg.src;
  protected readonly CODE_OF_CONDUCT_TIME: string = '7 min read';
  protected readonly PROMPT_ICON_IMG: string = PromptIcon.src;
  protected readonly CODE_OF_CONDUCT_LINK: string = '/blogs/code-of-conduct';
}
