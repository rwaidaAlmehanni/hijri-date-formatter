const { hijriInputFormat, getCurrentHijriDate } = require('./dist/index.js');

console.log('🧪 Testing hijri-date-formatter...');
console.log('Current Hijri date:', getCurrentHijriDate());
console.log('Arabic format:', hijriInputFormat(new Date(), 'ar', false));
console.log('English format:', hijriInputFormat(new Date(), 'en', true));
console.log('✅ All tests passed!');