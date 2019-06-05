const mjml2html = require("mjml");
const simpleTemplate = require("./templates/simple");

module.exports = {
  simple: function(data) {
    const { html } = mjml2html(simpleTemplate(data));
    return html;
  }
};
