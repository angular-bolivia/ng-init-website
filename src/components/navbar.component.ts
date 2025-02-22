import { Component } from '@angular/core';

import { NavbarScrollDirective } from '../directives/navbar-scroll.directive';

import AngularLogo from '@assets/images/angular-white-logo.webp';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavbarScrollDirective],
  template: `
    <nav
      appNavbarScroll
      class="p-8 navbar navbar-expand-lg navbar-light bg-light z-[5] right-0 left-0 flex justify-between items-center fixed md:p-16 transition-all duration-200 ease-in-out"
    >
      <div class="flex items-center gap-4">
        <img [src]="ANGULAR_LOGO" alt="Angular Logo" />

        <p class="text-white font-bold text-lg">NG | INIT</p>
      </div>

      <section class="hidden md:flex md:items-center gap-16 text-white">
        <a
          class="cursor-pointer border-b-[3px] border-transparent hover:border-[#f9e76a]"
          href="#home"
        >
          Inicio
        </a>

        <a
          class="cursor-pointer border-b-[3px] border-transparent hover:border-[#f9e76a]"
          href="#blog"
        >
          Blog
        </a>
      </section>

      <section class="md:hidden">
        <input type="checkbox" id="menu-toggle" hidden #menuToggle />

        <label for="menu-toggle" class="flex flex-col gap-1 w-5 cursor-pointer">
          <span class="w-full h-0.5 bg-white block"></span>

          <span class="w-full h-0.5 bg-white block"></span>

          <span class="w-full h-0.5 bg-white block"></span>
        </label>

        <section
          class="hidden absolute left-4 right-4 top-4 bg-[#1A1A1A] rounded-md p-4 pt-2"
        >
          <div class="flex items-center justify-between w-full">
            <h4 class="font-bold text-[#00D5FF]">NG | INIT</h4>

            <label class="font-bold text-white cursor-pointer" for="menu-toggle"
              >X</label
            >
          </div>

          <section class="flex flex-col gap-4 text-white">
            <a class="text-sm w-full" href="#home"> Inicio </a>

            <a class="text-sm w-full" href="#blog"> Blog </a>
          </section>
        </section>
      </section>
    </nav>
  `,
  styles: `
    #menu-toggle:checked ~ section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  `,
})
export default class NavbarComponent {
  protected readonly ANGULAR_LOGO = AngularLogo.src;
}
