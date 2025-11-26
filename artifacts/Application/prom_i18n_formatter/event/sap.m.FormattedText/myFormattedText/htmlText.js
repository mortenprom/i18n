if (typeof i18n_promi18n_htmlMsg_paragraph1 === "undefined" || i18n_promi18n_htmlMsg_paragraph1 === null || i18n_promi18n_htmlMsg_paragraph1 === "") { return; }
if (typeof i18n_promi18n_htmlMsg_titleTop === "undefined" || i18n_promi18n_htmlMsg_titleTop === null || i18n_promi18n_htmlMsg_titleTop === "") { return; }
if (typeof i18n_promAppdoc_htmlMsg_paragraph1 === "undefined" || i18n_promAppdoc_htmlMsg_paragraph1 === null || i18n_promAppdoc_htmlMsg_paragraph1 === "") { return; }
if (typeof i18n_promAppdoc_htmlMsg_paragraph2 === "undefined" || i18n_promAppdoc_htmlMsg_paragraph2 === null || i18n_promAppdoc_htmlMsg_paragraph2 === "") { return; }
if (typeof i18n_promAppdoc_htmlMsg_titleTop === "undefined" || i18n_promAppdoc_htmlMsg_titleTop === null || i18n_promAppdoc_htmlMsg_titleTop === "") { return; }

const formattedText = i18n_promi18n_htmlMsg_paragraph1 + " " + i18n_promi18n_htmlMsg_titleTop + " " + i18n_promAppdoc_htmlMsg_paragraph1 + " " + i18n_promAppdoc_htmlMsg_paragraph2 + " " + i18n_promAppdoc_htmlMsg_titleTop;

return formattedText;