/// <reference path="./dayjsTypes.d.ts" />

declare module 'dayjs/locale/*' {
  namespace locale {
    interface Locale extends ILocale {}
  }

  const locale: locale.Locale

  export = locale
}
