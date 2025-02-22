import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  type AfterViewInit,
} from '@angular/core';

@Directive({ selector: '[appNavbarScroll]', standalone: true })
export class NavbarScrollDirective implements AfterViewInit {
  #elementRef = inject(ElementRef);

  public ngAfterViewInit(): void {
    this.onWindowScroll();
  }

  @HostListener('window:scroll', ['$event'])
  public onWindowScroll(): void {
    if (typeof window !== 'undefined') {
      const navbarEl: HTMLElement = this.#elementRef.nativeElement;

      if (window.scrollY > 0) {
        navbarEl.classList.add('bg-[#37014A]');
        navbarEl.classList.remove('md:p-16');
        navbarEl.classList.add('px-4');
        navbarEl.classList.add('py-0');
      } else {
        navbarEl.classList.add('md:p-16');
        navbarEl.classList.remove('px-4');
        navbarEl.classList.remove('py-0');
        navbarEl.classList.remove('bg-[#37014A]');
      }
    }
  }
}
