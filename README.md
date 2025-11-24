# Hijri Date Formatter

A lightweight JavaScript library for converting Gregorian dates to Hijri (Islamic) dates with multilingual support and Indian numeral formatting.

## Features

- 📅 Convert Gregorian dates to Hijri dates
- 🌐 Multilingual support (Arabic & English)
- 🔢 Indian numeral formatting for Arabic output
- 📦 Zero dependencies (except hijri-converter)
- 🏷️ TypeScript support included
- 🎯 Simple and intuitive API

## Installation

```bash
npm install hijri-date-formatter


### Quick Start

Get up and running in seconds — examples below show ES Modules and CommonJS usage, plus common helper functions.

#### Install
```bash
npm install hijri-date-formatter
```

#### ES Modules
```js
// ES Modules
import {
    hijriInputFormat,
    getCurrentHijriDate,
    normalToHijri,
    toIndian
} from 'hijri-date-formatter';

// Current Hijri date (English, DD/MM/YYYY)
console.log(getCurrentHijriDate()); // e.g. "15/06/1445"

// Format today's date in Arabic with Indian numerals
console.log(hijriInputFormat(new Date(), 'ar', false)); // e.g. "١٥/٠٦/١٤٤٥"
```

#### CommonJS
```js
// CommonJS
const {
    hijriInputFormat,
    getCurrentHijriDate,
    normalToHijri,
    toIndian
} = require('hijri-date-formatter');

console.log(getCurrentHijriDate());
```

#### Examples

Basic conversion
```js
import { hijriInputFormat } from 'hijri-date-formatter';
const date = new Date('2023-01-15');
console.log(hijriInputFormat(date, 'en', true)); // "15/6/1444"
```

Arabic format with Indian numerals
```js
import { hijriInputFormat } from 'hijri-date-formatter';
console.log(hijriInputFormat(new Date(), 'ar', false)); // "١٥/٠٦/١٤٤٥"
```

Get raw Hijri object
```js
import { normalToHijri } from 'hijri-date-formatter';
console.log(normalToHijri(new Date())); // { day: 15, month: 6, year: 1445 }
```

Convert to Indian numerals
```js
import { toIndian } from 'hijri-date-formatter';
console.log(toIndian(1445));   // "١٤٤٥"
console.log(toIndian('2023')); // "٢٠٢٣"
```

#### TypeScript
```ts
import { hijriInputFormat, normalToHijri } from 'hijri-date-formatter';

const hijriDate: string = hijriInputFormat(new Date(), 'en', true);
const hijriObject: { day: number; month: number; year: number } = normalToHijri(new Date());
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create your feature branch:
```bash
git checkout -b feature/AmazingFeature
```
3. Commit your changes:
```bash
git commit -m "Add some AmazingFeature"
```
4. Push to the branch:
```bash
git push origin feature/AmazingFeature
```
5. Open a Pull Request describing your changes and any relevant context.

Please make sure your code follows the existing style, includes tests where appropriate, and documents new behavior.

## License

This project is licensed under the MIT License — see the LICENSE file for details.

## Acknowledgments

- Built with hijri-converter for accurate date conversions  
- Indian numeral conversion for authentic Arabic display

## Support

If you encounter any issues or have questions, please file an issue on the [GitHub repository](https://github.com/rwaidaAlmehanni/hijri-date-formatter).

> Note: This library uses astronomical calculations for date conversion. There might be slight variations (±1 day) compared to local moon-sighting observations in different regions.

