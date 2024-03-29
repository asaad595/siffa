import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
const locales = ['en', 'ar'];
 
export default getRequestConfig(async ({locale}) => {
  const baselocale = new Intl.Locale(locale).baseName
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
 
  return {
   
    messages: (await import(`../messages/${baselocale}.json`)).default
  };
});