import React, { ReactNode } from "react";
import Image from "next/image";

import type { TreeItemProps } from "../../types/common";
import { Icon, IconWrapper, Label, TreeItem } from "./Tree.styled";
import { PADDING, ICON_SIZE, LEVEL_SPACE } from "../../constants";

import closedIconImg from "../../assets/folder.png";
import openedIconImg from "../../assets/chevron-down.png";
import fileIcon from "../../assets/file.png";

const openedIcon = <Image src={openedIconImg}></Image>;
const closedIcon = <Image src={closedIconImg}></Image>;
const itemIcon = <Image src={fileIcon}></Image>;

const ToggleIcon = ({
  isOpen,
  openedIcon,
  closedIcon,
}: {
  isOpen: boolean;
  openedIcon: ReactNode;
  closedIcon: ReactNode;
  itemIcon?: ReactNode;
}) => <Icon>{isOpen ? openedIcon : closedIcon}</Icon>;

export const Item: React.FC<TreeItemProps> = ({
  hasNodes = false,
  isOpen = false,
  level = 0,
  toggleNode,
  label,
}) => (
  <TreeItem
    onClick={() => hasNodes && toggleNode?.()}
    pl={`${PADDING + ICON_SIZE * (hasNodes ? 0 : 1) + level * LEVEL_SPACE}rem`}
  >
    {hasNodes && (
      <ToggleIcon
        isOpen={isOpen}
        openedIcon={openedIcon}
        closedIcon={closedIcon}
      />
    )}
    <IconWrapper>
      {!hasNodes && <Icon>{itemIcon}</Icon>}
      <Label>{label}</Label>
    </IconWrapper>
  </TreeItem>
);
