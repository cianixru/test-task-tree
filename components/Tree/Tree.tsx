import React, { useState } from 'react';

import { nodeList } from './nodeList';
import type {
  Item,
  TreeItemProps as TreeItem,
  TreeProps
} from '../../types/common';

export const Tree: React.FC<TreeProps> = ({ children, data = {} }) => {
  const [openNodes, setOpenNodes] = useState<string[]>([]);

  const toggleNode = (node: string) => {
    const newOpenNodes = openNodes.includes(node)
      ? openNodes.filter(openNode => openNode !== node)
      : [...openNodes, node];

    setOpenNodes(newOpenNodes);
  };

  const generateItems = (): TreeItem[] => {
    const items: Item[] = nodeList({ data, openNodes });

    return items.map(item => ({
      ...item,
      toggleNode: item.hasNodes ? () => toggleNode(item.key) : undefined,
    }));
  };

  return children({ items: generateItems() });
};
