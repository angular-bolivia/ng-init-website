import { Component } from '@angular/core';
import CardBlogComponent from './card-blog.component';
import CodeOfConductImg from '@assets/images/code-of-conduct.webp';
import PromptIcon from '@assets/icons/prompt-icon.svg';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CardBlogComponent],
  template: `
    <article class="bg-[#111828] pb-16" id="blog">
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
        @for (article of articles; track article.title) {
          <app-card-blog
            [title]="article.title"
            [content]="article.content"
            [date]="article.date"
            [image]="article.image"
            [link]="article.link"
          ></app-card-blog>
        }
      </section>
    </article>
  `,
})
export default class BlogComponent {
  protected readonly TITLE = 'Blog';
  protected readonly PROMPT_ICON_IMG = PromptIcon.src;

  protected readonly articles = [
    {
      title: 'Código de conducta',
      content: 'Explora el código de conducta del día del evento.',
      date: '3/2/2025',
      image: CodeOfConductImg.src,
      link: 'code-of-conduct',
    },
  ];
}
