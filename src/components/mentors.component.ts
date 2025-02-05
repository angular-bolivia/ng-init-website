import { Component } from '@angular/core';

@Component({
  selector: 'app-mentors',
  standalone: true,
  template: `
    <section id="mentors" class="py-16 px-4 bg-gray-900 text-white">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-6">{{ TITLE }}</h2>
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

        <div class="text-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            class="border-2 border-[#C93AC8] rounded-4xl py-3 px-10 bg-[#17171799] hover:bg-[#C93AC8] hover:text-black hover:border-black transition-all duration-300 ease-in-out"
            [href]="APPLY_BUTTON_LINK"
          >
            {{ APPLY_BUTTON_LABEL }}
          </a>
        </div>
      </div>
    </section>
  `,
})
export default class MentorsComponent {
  readonly TITLE = 'Conviértete en Mentor';
  readonly DESCRIPTION =
    'Comparte tu experiencia y ayuda a dar forma al futuro de la tecnología convirtiéndote en mentor en NG | INIT';
  readonly WHO_CAN_MENTOR_TITLE = '¿Quién puede ser mentor?';
  readonly WHO_CAN_MENTOR_DESCRIPTION =
    'Profesionales de la industria, líderes tecnológicos y desarrolladores experimentados con sólidos conocimientos en desarrollo web con Angular.';
  readonly WHY_MENTOR_TITLE = '¿Por qué ser mentor?';
  readonly WHY_MENTOR_DESCRIPTION =
    'Contribuye a la comunidad tecnológica, fortalece tu liderazgo, amplía tu red profesional y deja una huella significativa en la próxima generación de desarrolladores.';
  readonly COMMITMENT_TITLE = 'Compromiso';
  readonly COMMITMENT_DESCRIPTION =
    'Si eres seleccionado como mentor, deberás asistir a la sesión de capacitación previa al evento, cumplir con el código de conducta, presentarte en persona el día del evento y participar activamente ayudando a los participantes.';
  readonly APPLY_BUTTON_LABEL = 'POSTULA PARA SER MENTOR';
  readonly APPLY_BUTTON_LINK = 'https://forms.gle/3i5TjZRmys9KdcaK7';
}
