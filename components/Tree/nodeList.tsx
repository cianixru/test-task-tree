import isEmpty from 'is-empty';

import { Data, NodeListProps, BranchProps } from '../../types/common';
import type { Item, ItemsInArray, ItemObject, TreeNode } from '../../types/common';

const validateData = (data?: Data): boolean => !!data && !isEmpty(data);
const getValidatedData = (data?: Data) =>
  validateData(data) ? (data as Data) : [];

export const nodeList = ({ data, ...props }: NodeListProps): Item[] => {
  const validatedData = getValidatedData(data);

  const propsWithDefaultValues = { parent: '', level: 0, ...props };
  const isNode = (dataAsArray: ItemsInArray[]) =>
    dataAsArray.reduce((all: Item[], node: ItemsInArray) => {
      const branchProps = { node,  nodeName: node.key, ...propsWithDefaultValues };
      const branch = createBranch(branchProps);
      return [...all, ...branch];
    }, []);

  const isItem = (dataAsObject: ItemObject) =>
    Object.entries(dataAsObject)
      .reduce((all: Item[], [nodeName, node]: [string, TreeNode]) => {
        const branchProps = { node, nodeName, ...propsWithDefaultValues };
        const branch = createBranch(branchProps);
        return [...all, ...branch];
      }, []);

  return Array.isArray(validatedData) ? isNode(validatedData) : isItem(validatedData);
};

const createBranch = ({ node, nodeName, ...rest }: BranchProps): Item[] => {
  const { parent, level, openNodes } = rest;

  const { nodes, ...nodeProps } = node;
  const key = [parent, nodeName].filter(x => x).join('/');
  const hasNodes = validateData(nodes);
  const isOpen = hasNodes && openNodes.includes(key);

  const currentItem = { ...rest, ...nodeProps, hasNodes, isOpen, key };

  const data = getValidatedData(nodes);

  const nextLevelItems = isOpen
    ? nodeList({ data, ...rest, parent: key, level: level + 1 })
    : [];

  return [currentItem, ...nextLevelItems];
};
