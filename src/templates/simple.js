const IMAGE_WIDTH = "48px";
const TEXT_COLOR = "#323235";
const LIGHT_BG = "#f8f8fb";
const BUTTON_BG = "#4954d8";
const FONT_FAMILY = "Helvetica";
const FONT_SM = "12px";
const FONT_BASE = "16px";
const FONT_XL = "24px";
const LINE_HEIGHT_BASE = "26px";
const SECTION_PADDING_BASE = "10px 0";
const SECTION_PADDING_XL = "20px 0";

const DEFAULT_ARGUMENTS = {
  logo: null,
  title: null,
  intro: [],
  cta: null,
  outro: [],
  links: [],
  footer: []
};

const template = userArguments => {
  const { logo, title, intro, cta, outro, links, footer } = {
    ...DEFAULT_ARGUMENTS,
    userArguments
  };

  return {
    tagName: "mjml",
    attributes: {},
    children: [
      {
        tagName: "mj-body",
        children: [
          // Logo
          logo && logo.length
            ? {
                tagName: "mj-section",
                attributes: {
                  padding: SECTION_PADDING_BASE
                },
                children: [
                  {
                    tagName: "mj-column",
                    children: [
                      {
                        tagName: "mj-image",
                        attributes: {
                          width: IMAGE_WIDTH,
                          src: logo
                        }
                      }
                    ]
                  }
                ]
              }
            : { tagName: "ignore" },
          // Title
          title && title.length
            ? {
                tagName: "mj-section",
                attributes: {
                  "background-color": LIGHT_BG,
                  padding: SECTION_PADDING_XL
                },
                children: [
                  {
                    tagName: "mj-column",
                    children: [
                      {
                        tagName: "mj-text",
                        content: title,
                        attributes: {
                          color: TEXT_COLOR,
                          "font-size": FONT_XL,
                          "font-family": FONT_FAMILY,
                          align: "center"
                        }
                      }
                    ]
                  }
                ]
              }
            : { tagName: "ignore" },
          ,
          // Intro
          intro &&
            intro.length && {
              tagName: "mj-section",
              attributes: {
                padding: SECTION_PADDING_BASE
              },
              children: [
                {
                  tagName: "mj-column",
                  children: intro.map(content => {
                    return typeof content === "string"
                      ? {
                          tagName: "mj-text",
                          content: content,
                          attributes: {
                            color: TEXT_COLOR,
                            "font-size": FONT_BASE,
                            "font-family": FONT_FAMILY,
                            "line-height": LINE_HEIGHT_BASE,
                            align: "left"
                          }
                        }
                      : content;
                  })
                }
              ]
            },
          // CTA
          cta
            ? {
                tagName: "mj-section",
                attributes: {
                  padding: SECTION_PADDING_BASE
                },
                children: [
                  {
                    tagName: "mj-column",
                    children: [
                      {
                        tagName: "mj-button",
                        content: cta.text,
                        attributes: {
                          href: cta.link,
                          "background-color": BUTTON_BG,
                          "font-size": FONT_BASE,
                          "font-family": FONT_FAMILY,
                          "line-height": LINE_HEIGHT_BASE
                        }
                      },
                      {
                        tagName: "mj-text",
                        content: `<a href="${cta.link}" target="_blank">${
                          cta.link
                        }</a>`,
                        attributes: {
                          "font-size": FONT_SM,
                          "font-family": FONT_FAMILY,
                          align: "center"
                        }
                      }
                    ]
                  }
                ]
              }
            : { tagName: "ignore" },
          ,
          // Outro
          outro.length && {
            tagName: "mj-section",
            attributes: {
              padding: SECTION_PADDING_BASE
            },
            children: [
              {
                tagName: "mj-column",
                children: outro.map(content => {
                  return typeof content === "string"
                    ? {
                        tagName: "mj-text",
                        content: content,
                        attributes: {
                          color: TEXT_COLOR,
                          "font-size": FONT_BASE,
                          "font-family": FONT_FAMILY,
                          "line-height": LINE_HEIGHT_BASE,
                          align: "left"
                        }
                      }
                    : content;
                })
              }
            ]
          },
          // Links
          links.length && {
            tagName: "mj-section",
            attributes: {
              padding: SECTION_PADDING_BASE
            },
            children: [
              {
                tagName: "mj-column",
                children: links.map(({ text, link }) => {
                  return {
                    tagName: "mj-text",
                    content: `<a href="${link}" target="_blank">${text}</a>`,
                    attributes: {
                      "font-size": FONT_SM,
                      "font-family": FONT_FAMILY
                    }
                  };
                })
              }
            ]
          },
          // Footer
          footer.length && {
            tagName: "mj-section",
            attributes: {
              "background-color": LIGHT_BG,
              padding: SECTION_PADDING_BASE
            },
            children: [
              {
                tagName: "mj-column",
                children: footer.map(content => {
                  return {
                    tagName: "mj-text",
                    content: content,
                    attributes: {
                      color: TEXT_COLOR,
                      "font-size": FONT_SM,
                      "font-family": FONT_FAMILY,
                      align: "center"
                    }
                  };
                })
              }
            ]
          }
        ]
      }
    ]
  };
};

module.exports = template;
