import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  template: `
    <h1 class="text-3xl font-bold mb-4">Hello from Angular and Astro!</h1>
    <p class="mb-2">This is only a test angular component.</p>
    <p class="mb-4">It can be safely deleted once implementation is started.</p>

    <a
      href="/blog"
      class="text-blue-500 hover:text-blue-700 underline mb-4 inline-block"
    >
      Blog
    </a>

    <div>
      @if (show) {
        <p class="text-gray-700">{{ helpText() }}</p>
      }

      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        (click)="toggle()"
      >
        Toggle
      </button>
    </div>
  `,
})
export default class HelloComponent {
  helpText = input('help');

  show = false;

  toggle(): void {
    this.show = !this.show;
  }
}
