import styled from "styled-components";
import { compose, SpaceProps, space } from "styled-system";
import css from "@styled-system/css";

import { ICON_SIZE, ICON_WIDTH } from "../../constants";

export const Box = styled.div<SpaceProps>(compose(space));

export const TreeItemGroup = styled.ul(
  css({
    fontFamily: "Arial",
    lineHeight: "1.5",
    color: "#5E6366",
    listStyleType: "none",
    pl: 0,
    width: "100%",
    "*": {
      boxSizing: "border-box",
    },
  })
);

export const TreeItem = styled.li<SpaceProps>(
  css({
    cursor: "pointer",
  }),
  compose(space)
);

export const Label = styled(Box)<SpaceProps>(
  css({
    ml: 26,
  })
);

export const IconWrapper = styled(Box)(
  css({
    display: "inline-block",
  })
);

export const Icon = styled(Box)(
  css({
    width: ICON_WIDTH,
    height: ICON_SIZE,
    lineHeight: ICON_SIZE,
    textAlign: "center",
  })
);
