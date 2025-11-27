let greeting = "";
const hour = new Date().getHours();
if (hour < 12) greeting = i18n_promi18n_viking_greeting_goodmorning;
else if (hour < 18) greeting = i18n_promi18n_viking_greeting_goodafternoon;
else greeting = i18n_promi18n_viking_greeting_goodevening;

let quote = "";
const random = Math.floor(Math.random() * 10);
if (random === 0) quote = i18n_promi18n_viking_quotes_q0;
else if (random === 1) quote = i18n_promi18n_viking_quotes_q1;
else if (random === 2) quote = i18n_promi18n_viking_quotes_q2;
else if (random === 3) quote = i18n_promi18n_viking_quotes_q3;
else if (random === 4) quote = i18n_promi18n_viking_quotes_q4;
else if (random === 5) quote = i18n_promi18n_viking_quotes_q5;
else if (random === 6) quote = i18n_promi18n_viking_quotes_q6;
else if (random === 7) quote = i18n_promi18n_viking_quotes_q7;
else if (random === 8) quote = i18n_promi18n_viking_quotes_q8;
else if (random === 9) quote = i18n_promi18n_viking_quotes_q9;

return `
    <h2>${greeting}, ${AppCache?.userInfo?.name}</h2>
    <p>${quote}</p>
`;