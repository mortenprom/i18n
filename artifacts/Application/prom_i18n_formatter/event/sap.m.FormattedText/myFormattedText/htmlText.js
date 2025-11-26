if (typeof i18n_promi18n_htmlMsg_paragraph1 === "undefined" || i18n_promi18n_htmlMsg_paragraph1 === null || i18n_promi18n_htmlMsg_paragraph1 === "") { return; }
if (typeof i18n_promi18n_htmlMsg_paragraph2 === "undefined" || i18n_promi18n_htmlMsg_paragraph2 === null || i18n_promi18n_htmlMsg_paragraph2 === "") { return; }
if (typeof i18n_promi18n_htmlMsg_titleMiddle === "undefined" || i18n_promi18n_htmlMsg_titleMiddle === null || i18n_promi18n_htmlMsg_titleMiddle === "") { return; }
if (typeof i18n_promi18n_htmlMsg_titleTop === "undefined" || i18n_promi18n_htmlMsg_titleTop === null || i18n_promi18n_htmlMsg_titleTop === "") { return; }
return `
    <h2>${i18n_promi18n_htmlMsg_titleTop}</h2>
    <p>${i18n_promi18n_htmlMsg_paragraph1}</p>
    <h4>${i18n_promi18n_htmlMsg_titleMiddle}</h4>
    <p>${i18n_promi18n_htmlMsg_paragraph2}</p>
`;