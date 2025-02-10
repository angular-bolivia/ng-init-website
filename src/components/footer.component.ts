import { Component } from '@angular/core';

import AngularBolivia from '@assets/images/angular-bolivia.webp';
import AngularWhite from '@assets/images/angular-white-logo.webp';
import XLogo from '@assets/images/x-logo.svg';
import LinkedinLogo from '@assets/images/linkedin-logo.svg';
import GithubLogo from '@assets/images/github-logo.svg';
import EmailLogo from '@assets/images/email-logo.svg';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-[#111828] text-white py-12">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row md:justify-between gap-12">
          <div class="flex flex-col md:items-start gap-4">
            <div class="flex flex-row items-center gap-4">
              <img [src]="ANGULAR_WHITE" alt="Logo de Angular" />
              <h2 class="text-[#FFFFFF] text-2xl font-bold">{{
                EVENT_TITLE
              }}</h2>
            </div>
            <p class="text-left md:text-left max-w-md text-[#8E9196]">
              Empoderamos a la próxima generación de innovadores tecnológicos a
              través de tutoría, recursos y desarrollo de comunidades.
            </p>
          </div>
          <div class="flex flex-col items-center gap-2">
            <p class="text-xl" style="font-family: 'Inter Tight', sans-serif;"
              >Organizado por:</p
            >
            <img [src]="ANGULAR_BOLIVIA" alt="Angular Bolivia" width="240px" />
            <div class="flex items-center gap-8 mt-4 md:mt-6 md:gap-12">
              <a
                href="https://github.com/angular-bolivia"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  [src]="GITHUB_LOGO"
                  width="24"
                  height="24"
                  alt="Logo de Github"
                />
              </a>
              <a
                href="https://x.com/angularBolivia"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img [src]="X_LOGO" width="20" height="20" alt="Logo de X" />
              </a>
              <a href="mailto:angularbolivia@gmail.com">
                <img
                  [src]="EMAIL_LOGO"
                  width="20"
                  height="20"
                  alt="Logo de Email"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/angular-bolivia/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  [src]="LINKEDIN_LOGO"
                  width="20"
                  height="20"
                  alt="Logo de Linkedin"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="mt-12 pt-8 border-t border-[#414142]">
          <p class="text-center text-sm text-[#F2F2F2]">
            © 2025 NG | INIT. Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  protected readonly ANGULAR_WHITE = AngularWhite.src;
  protected readonly ANGULAR_BOLIVIA = AngularBolivia.src;
  protected readonly GITHUB_LOGO = GithubLogo.src;
  protected readonly X_LOGO = XLogo.src;
  protected readonly EMAIL_LOGO = EmailLogo.src;
  protected readonly LINKEDIN_LOGO = LinkedinLogo.src;
  protected readonly EVENT_TITLE = 'NG | INIT';
}
