if (typeof number === "undefined" || number === null || number === "") number = 0;
if (typeof i18n_title_one === "undefined" || i18n_title_one === null || i18n_title_one === "") { return; }
if (typeof i18n_title_more === "undefined" || i18n_title_more === null || i18n_title_more === "") { return; }
if (typeof i18n_title_zero === "undefined" || i18n_title_zero === null || i18n_title_zero === "") { return; }

if (number < 1) {
    return i18n_title_zero;

} else if (number === 1) {
    return i18n_title_one;

} else {
    return i18n_title_more.replace("{0}", number);
}
