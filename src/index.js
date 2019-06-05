const mjml2html = require("mjml");
const simpleTemplate = require("./templates/simple");

function Mermail() {}

Mermail.prototype.simple = function(data) {
  const { html } = mjml2html(simpleTemplate(data));
  return html;
};

module.exports = Mermail;
