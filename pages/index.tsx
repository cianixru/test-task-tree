import React from "react";

import { TreeItemGroup } from "../components/Tree/Tree.styled";
import Tree, { Item } from "../components/Tree";

import { mockData } from "../__mocks__/mockData";

export default function Home() {
  return (
    <Tree data={mockData}>
      {({ items }) => (
        <TreeItemGroup>
          {items.map(({ key, ...props }) => (
            <Item
              key={key}
              {...props}
            />
          ))}
        </TreeItemGroup>
      )}
    </Tree>
  );
}
