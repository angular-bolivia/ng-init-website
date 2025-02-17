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
              <img [src]="ANGULAR_WHITE" [alt]="IMAGE_ALT_TEXT.ANGULAR" />
              <h2 class="text-[#FFFFFF] text-2xl font-bold">{{
                EVENT_TITLE
              }}</h2>
            </div>
            <p class="text-left md:text-left max-w-md text-[#8E9196]">
              {{ DESCRIPTION }}
            </p>
          </div>
          <div class="flex flex-col items-center gap-2">
            <p class="text-xl">Organizado por:</p>
            <a
              [href]="ANGULAR_BOLIVIA_LINK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                [src]="ANGULAR_BOLIVIA"
                [alt]="IMAGE_ALT_TEXT.ANGULAR_BOLIVIA"
                width="240px"
              />
            </a>
            <div class="flex items-center gap-8 mt-4 md:mt-6 md:gap-12">
              @for (social of SOCIAL_MEDIA_LINKS; track social.link) {
                <a
                  [href]="social.link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    [src]="social.src"
                    [width]="social.link.includes('github') ? '24' : '20'"
                    [height]="social.link.includes('github') ? '24' : '20'"
                    [alt]="social.alt"
                  />
                </a>
              }
            </div>
          </div>
        </div>
        <div class="mt-12 pt-8 border-t border-[#414142]">
          <p class="text-center text-sm text-[#F2F2F2]">
            {{ COPYRIGHT }}
          </p>
        </div>
      </div>
    </footer>
  `,
})
export default class FooterComponent {
  protected readonly ANGULAR_WHITE = AngularWhite.src;
  protected readonly ANGULAR_BOLIVIA = AngularBolivia.src;
  protected readonly GITHUB_LOGO = GithubLogo.src;
  protected readonly X_LOGO = XLogo.src;
  protected readonly EMAIL_LOGO = EmailLogo.src;
  protected readonly LINKEDIN_LOGO = LinkedinLogo.src;
  protected readonly EVENT_TITLE = 'NG | INIT';
  protected readonly COPYRIGHT =
    '© 2025 NG | INIT. Todos los derechos reservados';
  protected readonly DESCRIPTION =
    'Empoderamos a la próxima generación de innovadores tecnológicos a través de tutoría, recursos y desarrollo de comunidades.';
  protected readonly ANGULAR_BOLIVIA_LINK = 'https://ng.com.bo/';

  protected readonly IMAGE_ALT_TEXT = {
    ANGULAR: 'Logo de Angular',
    ANGULAR_BOLIVIA: 'Angular Bolivia',
    GITHUB: 'Logo de Github',
    X: 'Logo de X',
    EMAIL: 'Logo de Email',
    LINKEDIN: 'Logo de Linkedin',
  } as const;

  protected readonly SOCIAL_MEDIA_LINKS = [
    {
      link: 'https://github.com/angular-bolivia',
      alt: this.IMAGE_ALT_TEXT.GITHUB,
      src: this.GITHUB_LOGO,
    },
    {
      link: 'https://x.com/angularBolivia',
      alt: this.IMAGE_ALT_TEXT.X,
      src: this.X_LOGO,
    },
    {
      link: 'mailto:angularbolivia@gmail.com',
      alt: this.IMAGE_ALT_TEXT.EMAIL,
      src: this.EMAIL_LOGO,
    },
    {
      link: 'https://www.linkedin.com/company/angular-bolivia/',
      alt: this.IMAGE_ALT_TEXT.LINKEDIN,
      src: this.LINKEDIN_LOGO,
    },
  ];
}
