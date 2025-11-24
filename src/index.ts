import { toHijri } from 'hijri-converter';

export const hijriInputFormat = (date: Date, lang: string = 'en', isEditable?: boolean): string => {
  const hijri = normalToHijri(date);
  const year = isEditable ? hijri.year.toString() : toIndian(hijri.year);
  const month = isEditable ? hijri.month.toString() : toIndian(hijri.month);
  const day = isEditable ? hijri.day.toString() : toIndian(hijri.day);
  
  return lang === 'ar' ? `${year}/${month}/${day}` : `${day}/${month}/${year}`;
};

export const normalToHijri = (date: Date): { day: number; month: number; year: number } => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // JavaScript months are 0-indexed
  const day = date.getDate();
  const hijri = toHijri(year, month, day);
  return { day: hijri.hd, month: hijri.hm, year: hijri.hy };
};

export const toIndian = (item: string | number): string => {
  const indianNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  
  return String(item)
    .split('')
    .map((char) => {
      const num = parseInt(char);
      return isNaN(num) ? char : indianNumbers[num];
    })
    .join('');
};

// Additional utility functions you might find useful
export const getCurrentHijriDate = (): string => {
  return hijriInputFormat(new Date(), 'en', false);
};

export const formatHijriForDisplay = (date: Date, language: string = 'en'): string => {
  return hijriInputFormat(date, language, false);
};