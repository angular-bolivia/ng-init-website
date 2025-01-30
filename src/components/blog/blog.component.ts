import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  template: `
    <ul class="list-disc pl-5">
      <li class="mb-2">
        <a href="/posts/post-1/" class="text-blue-500 hover:text-blue-700"
          >Post 1</a
        >
      </li>
    </ul>
  `,
})
export default class BlogComponent {}
