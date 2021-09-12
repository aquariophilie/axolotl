import ForgeUI, { render, useConfig, Fragment, Image, TextField, TextArea, Select, Option, MacroConfig, Macro, Link, Text, useProductContext, useState } from "@forge/ui";
import api, { route } from "@forge/api";
import QRCode from "qrcode-svg";

const defaultConfig = {
  url: "https://www.atlassian.com",
  color: "172B4D",
  label: ""
};

/* 
const getPageContext = async () => await view.getContext(); */

const Config = () => {
  const context = useProductContext();
  /* console.log(JSON.stringify(pageContext)); */
  return (
    <MacroConfig>
      <TextArea isRequired={true} label="URL" name="url" defaultValue={defaultConfig.url} />
      <TextField isRequired={false} label="LABEL" name="label" defaultValue="" />
      <Select label="Color" name="color">
        <Option label="N800 - Squid ink" value="172B4D" />
        <Option label="B400 - Pacific bridge" value="0052CC" />
        <Option label="R500 - Dragon's blood" value="BF2600" />
        <Option label="Y400 - Cheezy blasters" value="FF991F" />
        <Option label="G400 - Slime" value="00875A" />
        <Option label="T400 - Prom dress" value="00A3BF" />
        <Option label="P300 - Da' juice" value="6554C0" />
      </Select>
    </MacroConfig>
  );
}

const App = () => {
  const context = useProductContext();
  const { url, color, label } = useConfig() || defaultConfig || { url: '', color: '172B4D', label: '' };
  /* const { url, color } = useConfig(); */
  const colorHex = "#" + color;
  const qrCode = new QRCode({
    content: url,
    padding: 4,
    width: 256,
    height: 256,
    color: colorHex,
    background: "#ffffff",
    ecl: "M",
  });
  let svg = qrCode.svg();
  console.log(label);
  if (label) {
    svg = svg.replace('</svg>', '<text x="50%" y="250" fill="' + colorHex + '" text-anchor="middle">' + label + '</text>\r\n</svg>');
  }

  const encodedSvg = new Buffer(svg).toString('base64');
  const dataUri = `data:image/svg+xml;base64,${encodedSvg}`;

  return (
    <Fragment>
      <Image src={dataUri} alt={url} />
      <Text>
      </Text>
    </Fragment>
  );
};

export const run = render(
  <Macro
    app={<App />}
  />
);
export const config = render(<Config />);
