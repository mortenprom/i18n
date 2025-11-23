if (!htmlMsg_paragraph1) htmlMsg_paragraph1 = "";
if (!htmlMsg_paragraph2) htmlMsg_paragraph2 = "";
if (!htmlMsg_titleMiddle) htmlMsg_titleMiddle = "";
if (!htmlMsg_titleTop) htmlMsg_titleTop = "";
let formattedText = "";

if (htmlMsg_titleTop) formattedText += `<h3>${htmlMsg_titleTop}</h3>`;
if (htmlMsg_paragraph1) formattedText += `<p>${htmlMsg_paragraph1}</p>`;
if (htmlMsg_titleMiddle) formattedText += `<h4>${htmlMsg_titleMiddle}</h4>`;
if (htmlMsg_paragraph1) formattedText += `<p>${htmlMsg_paragraph1}</p>`;
if (htmlMsg_paragraph2) formattedText += `<p>${htmlMsg_paragraph2}</p>`;

return formattedText;