const mjml2html = require("mjml");
const simpleTemplate = require("./templates/simple");

function Mermail() {}

Mermail.prototype.simple = function(data) {
  const { html } = mjml2html(simpleTemplate(data));
  return html;
};

Mermail.prototype.createTable = function(rows) {
  let table = `<table cellpadding="0" cellspacing="0" width="100%" border="0" style="cellspacing:0; color:#323235; font-family:Helvetica, sans-serif; font-size:16px; line-height:26px; table-layout: fixed; width:100%;">`;
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r];
    table += `<tr style="border-bottom:1px solid #ecedee;text-align:left;padding:15px 0;">`;
    for (let c = 0; c < row.length; c++) {
      const column = row[c];
      if (r === 0) {
        table += `<th style="padding: 0 15px 0 0;">${column}</th>`;
      } else {
        table += `<td style="padding: 0 15px 0 0;">${column}</td>`;
      }
    }
    table += `</tr>`;
  }

  table += `</table>`;
  return table;
};

module.exports = Mermail;
