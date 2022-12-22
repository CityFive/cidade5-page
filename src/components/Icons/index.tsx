import React from "react";
import { BrandColors, NeutralColors } from "../../foundation/tokens";
import Instagram from "./assets/instagram.icon.svg";
import Spotify from "./assets/spotify.icon.svg";
import Youtube from "./assets/youtube.icon.svg";
import Burger from "./assets/burger.icon.svg";
import Twitter from "./assets/twitter.icon.svg";
import ArrowRight from "./assets/arrow-right.icon.svg";
import Copy from "./assets/copy.icon.svg";

export type SVGIcon = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

export enum Icons {
  Instagram = "instagram",
  Spotify = "spotify",
  Youtube = "youtube",
  Burger = "burger",
  ArrowRight = "arrow-right",
  Twitter = "twitter",
  Copy = 'copy'
}

type IIcons = { [key in Icons]: SVGIcon };

export const IconSVGs: IIcons = {
  [Icons.Instagram]: Instagram,
  [Icons.Spotify]: Spotify,
  [Icons.Youtube]: Youtube,
  [Icons.Burger]: Burger,
  [Icons.ArrowRight]: ArrowRight,
  [Icons.Twitter]: Twitter,
  [Icons.Copy]: Copy,
};

interface Props {
  icon: Icons;
  color: BrandColors | NeutralColors;
  size?: string;
}

const Icon = ({ icon, color, size }: Props) => {
  const IconElement = IconSVGs[icon];

  if (size) {
    return <IconElement fill={color} width={size} height={size} />;
  }

  return <IconElement fill={color} />;
};

export default Icon;
