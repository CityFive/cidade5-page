import Icon, { Icons } from "../Icons";
import { NeutralColors } from "../../foundation/tokens";
import { CopyIcon, CopyToast } from "./CopyToClipboard.styles";
import { useRef, useState } from "react";

interface Props {
  text: string;
}

const CopyToClipboard: React.FC<Props> = ({ text }) => {
  const [showToast, setShowToast] = useState(false);

  const handleOnClick = () => {
    navigator.clipboard.writeText(text);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <CopyIcon onClick={handleOnClick}>
      <Icon
        icon={Icons.Copy}
        color={NeutralColors.lightest}
      />
      {showToast && <CopyToast>Copiado</CopyToast>}
    </CopyIcon>
  );
};

export default CopyToClipboard;