import { Component } from '@angular/core';

import dafne from '@assets/images/mentors/dafne.webp';
import damaris from '@assets/images/mentors/damaris.webp';
import dayana from '@assets/images/mentors/dayana.webp';
import gonzalo from '@assets/images/mentors/gonzalo.webp';
import griss from '@assets/images/mentors/griss.webp';
import jhonatan from '@assets/images/mentors/jhonatan.webp';
import jose from '@assets/images/mentors/jose.webp';
import luis from '@assets/images/mentors/luis.webp';
import mauricio from '@assets/images/mentors/mauricio.webp';
import melany from '@assets/images/mentors/melany.webp';

interface Mentor {
  name: string;
  role: string;
  photo: ImageMetadata;
  socialLink: string;
}

@Component({
  selector: 'app-mentors',
  standalone: true,
  template: `
    <section id="mentors" class="py-16 px-4 bg-[#1A1A1A] text-white">
      <div class="max-w-6xl mx-auto">
        @if (APPLICATIONS_OPEN) {
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold mb-6">{{ APPLICATIONS_TITLE }}</h2>
            <p class="text-xl mb-8 max-w-3xl mx-auto">{{ DESCRIPTION }}</p>
          </div>

          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div class="p-6 border border-[#00F0FF] rounded-lg">
              <h3 class="text-xl font-bold mb-4 text-center">{{
                WHO_CAN_MENTOR_TITLE
              }}</h3>
              <p>{{ WHO_CAN_MENTOR_DESCRIPTION }}</p>
            </div>

            <div class="p-6 border border-[#00F0FF] rounded-lg">
              <h3 class="text-xl font-bold mb-4 text-center">{{
                WHY_MENTOR_TITLE
              }}</h3>
              <p>{{ WHY_MENTOR_DESCRIPTION }}</p>
            </div>

            <div class="p-6 border border-[#00F0FF] rounded-lg">
              <h3 class="text-xl font-bold mb-4 text-center">{{
                COMMITMENT_TITLE
              }}</h3>
              <p>{{ COMMITMENT_DESCRIPTION }}</p>
            </div>
          </div>

          <div class="text-center mb-12">
            <a
              target="_blank"
              rel="noopener noreferrer"
              class="border-2 border-[#C93AC8] rounded-4xl py-3 px-10 bg-[#17171799] hover:bg-[#C93AC8] hover:text-black hover:border-black transition-all duration-300 ease-in-out"
              [href]="APPLY_BUTTON_LINK"
            >
              {{ APPLY_BUTTON_LABEL }}
            </a>
          </div>
        } @else {
          <header class="flex flex-col items-center gap-4 py-16 px-4 md:px-8">
            <h2
              class="flex gap-1 md:gap-2 text-white text-4xl font-bold text-center"
            >
              {{ TITLE }}
            </h2>
          </header>
          <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            @for (mentor of MENTORS; track mentor.name) {
              <div
                class="p-6 border border-[#414142] bg-[#2A2A2A] rounded-lg text-center"
              >
                <div
                  class="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden"
                >
                  <img
                    [src]="mentor.photo.src"
                    [alt]="mentor.name"
                    class="w-full h-full object-cover"
                  />
                </div>
                <h3 class="text-xl font-bold mb-2">{{ mentor.name }}</h3>
                <p class="text-sm mb-4 text-[#8E9196]">{{ mentor.role }}</p>
                <a
                  [href]="mentor.socialLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-[#00F0FF]"
                  >Conectar</a
                >
              </div>
            }
          </div>
        }
      </div>
    </section>
  `,
})
export default class MentorsComponent {
  protected readonly APPLICATIONS_OPEN = false;
  protected readonly APPLICATIONS_TITLE = 'Conviértete en Mentor';
  protected readonly DESCRIPTION =
    'Comparte tu experiencia y ayuda a dar forma al futuro de la tecnología convirtiéndote en mentor en NG | INIT';
  protected readonly WHO_CAN_MENTOR_TITLE = '¿Quién puede ser mentor?';
  protected readonly WHO_CAN_MENTOR_DESCRIPTION =
    'Profesionales de la industria, líderes tecnológicos y desarrolladores experimentados con sólidos conocimientos en desarrollo web con Angular.';
  protected readonly WHY_MENTOR_TITLE = '¿Por qué ser mentor?';
  protected readonly WHY_MENTOR_DESCRIPTION =
    'Contribuye a la comunidad tecnológica, fortalece tu liderazgo, amplía tu red profesional y deja una huella significativa en la próxima generación de desarrolladores.';
  protected readonly COMMITMENT_TITLE = 'Compromiso';
  protected readonly COMMITMENT_DESCRIPTION =
    'Si eres seleccionado como mentor, deberás asistir a la sesión de capacitación previa al evento, cumplir con el código de conducta, presentarte en persona el día del evento y participar activamente ayudando a los participantes.';
  protected readonly APPLY_BUTTON_LABEL = 'POSTULA PARA SER MENTOR';
  protected readonly APPLY_BUTTON_LINK = 'https://forms.gle/3i5TjZRmys9KdcaK7';
  protected readonly TITLE = 'Conoce a nuestros mentores';
  protected readonly MENTORS: Mentor[] = [
    {
      name: 'Dayana Stefka Ledezma Bohorquez',
      role: 'Ingeniera de software',
      photo: dayana,
      socialLink: 'https://www.instagram.com/daya_stefka',
    },
    {
      name: 'Jhonatan Diego	Soto Guzman',
      role: 'Software Developer',
      photo: jhonatan,
      socialLink: 'https://www.linkedin.com/in/jhonasoto',
    },
    {
      name: 'Jose Maria	Mendoza Mamani',
      role: 'Desarrollador',
      photo: jose,
      socialLink:
        'https://www.linkedin.com/in/jose-maria-mendoza-mamani-9440471a0/',
    },
    {
      name: 'Mauricio	Arce Torrez',
      role: 'Software Engineer',
      photo: mauricio,
      socialLink: 'https://linktr.ee/combimauri',
    },
    {
      name: 'Melany Ventura',
      role: 'Web Developer',
      photo: melany,
      socialLink: 'https://www.tiktok.com/@dev.ventura',
    },
    {
      name: 'Dafne Ximena	Cruz Almendras ',
      role: 'Desarrollador Fullstack',
      photo: dafne,
      socialLink: 'https://www.instagram.com/dafnekocruz',
    },
    {
      name: 'Gonzalo Solano Condor',
      role: 'Fullstack developer',
      photo: gonzalo,
      socialLink: 'https://www.linkedin.com/in/gonzalo-solano-condor-02447572/',
    },
    {
      name: 'Dámaris Ruth	Gosálvez Chura',
      role: 'Docente de Ing. de Sistemas',
      photo: damaris,
      socialLink: 'www.linkedin.com/in/dámaris-ruth-gosálvez',
    },
    {
      name: 'Maria Griselda	Garcia Flores',
      role: 'Ingeniera de Software',
      photo: griss,
      socialLink: 'https://www.instagram.com/combigriss/',
    },
    {
      name: 'Luis	Aviles',
      role: 'Senior Software Engineer',
      photo: luis,
      socialLink: 'https://x.com/luixaviles',
    },
  ];
}
