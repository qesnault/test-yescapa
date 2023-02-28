import { createI18n } from 'vue-i18n';
import fr from '~/locales/fr.json';

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'fr',
    messages: {
      fr
    }
  });

  vueApp.use(i18n);
});
