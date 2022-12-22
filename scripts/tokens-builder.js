/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const axios = require("axios");
const path = require("path");
const _ = require("lodash");

const FIGMA_FILES_API = "https://api.figma.com/v1/files";
const FIGMA_API_TOKEN = "186113-7550d2b6-948e-4365-aab0-ba6d02e3edd6";
const TOKENS_FILE = "sRwh5uhZmqaq6IFbODcWV5";
const DIST_PATH = "../src/foundation/tokens.ts";

const capitalizeFirstLetter = (value) =>
  `${value.charAt(0).toUpperCase()}${value.slice(1)}`;

const generateEnum = (name, tokens) => `
  export enum ${name} {
    ${Object.keys(tokens)
      .sort()
      .map((token) => `${capitalizeFirstLetter(token)} = '${tokens[token]}'`)
      .join(",\n")}
  }
`;

const extractToken = (tokenLayer) => {
  const value = tokenLayer.children
    .find((item) => item.name === "tokenValue")
    .characters.trim();

  const name = tokenLayer.children
    .find((item) => item.name === "tokenVariable")
    .characters.trim()
    .replace("$", "");

  return { [name]: value };
};

const getFigmaFile = async (figmaFileId, pageName) => {
  const { data } = await axios.get(`${FIGMA_FILES_API}/${figmaFileId}`, {
    headers: {
      "X-Figma-Token": FIGMA_API_TOKEN,
    },
  });

  return data.document.children.find((item) => {
    return item.name === pageName;
  }).children[0].children;
};

const getSection = (tokensBase) => {};

const getFontFamily = (fontFamilySection) => {
  return fontFamilySection;
};
const getLineHeight = (tokensBase) => {};
const getFontWeight = (tokensBase) => {};
const getFontSize = (tokensBase) => {};
const getBrandColors = (tokensBase) => {};
const getNeutralColors = (tokensBase) => {};

const TOKENS_SECTIONS = {
  "Font Family": getFontFamily,
};

(async () => {
  try {
    const tokensPage = await getFigmaFile(TOKENS_FILE, "Tokens");
    tokensPage.map((tokensSection) => {
      const parser = TOKENS_SECTIONS[tokensSection.name];
      if (!parser) return;
      console.log(TOKENS_SECTIONS[tokensSection.name](tokensSection.children));
    });

    // const tokens = `
    //   ${generateEnum("Colors", getFontFamily(tokensBase))}
    //   ${generateEnum("Fonts", getLineHeight(tokensBase))}
    //   ${generateEnum("Fonts", getFontWeight(tokensBase))}
    //   ${generateEnum("Fonts", getFontSize(tokensBase))}
    //   ${generateEnum("Fonts", getBrandColors(tokensBase))}
    //   ${generateEnum("Fonts", getNeutralColors(tokensBase))}
    // `;

    // fs.writeFileSync(path.resolve(DIST_PATH), tokens);

    console.log("The tokens has been generated at styles folder!");
  } catch (e) {
    console.error(e);
  }
})();
