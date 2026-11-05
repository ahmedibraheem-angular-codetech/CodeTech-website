import { Pipe, PipeTransform } from '@angular/core';
import { AppLanguage } from '../../core/i18n/language.service';

const DATE_LOCALES: Record<AppLanguage, string> = {
  ar: 'ar-SA-u-ca-gregory-nu-latn',
  en: 'en-GB'
};

@Pipe({
  name: 'localizedDate',
  standalone: true
})
export class LocalizedDatePipe implements PipeTransform {
  transform(value: string, lang: AppLanguage): string {
    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return '';
    }

    return new Intl.DateTimeFormat(DATE_LOCALES[lang], {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  }
}
