export interface ItemObject {
  [name: string]: TreeNode;
}

export interface TreeNode {
  nodes?: ItemObject;
}

export interface ItemsInArray {
  key: string;
  nodes?: ItemsInArray[];
}

export type Data = ItemObject | ItemsInArray[];

export interface NodeListProps {
  data?: Data;
  parent?: string;
  level?: number;
  openNodes: string[];
}

export interface BranchProps {
  parent: string;
  level: number;
  openNodes: string[];
  node: TreeNode | ItemsInArray;
  nodeName: string;
}

export interface Item {
  hasNodes: boolean;
  isOpen: boolean;
  level: number;
  key: string;
  [name: string]: any;
}

export type TreeChildren = (props: { items: TreeItemProps[] }) => JSX.Element;

export type TreeProps = {
  data: { [name: string]: TreeNode } | ItemsInArray[];
  children: TreeChildren;
};

export interface TreeItemProps extends Item {
  toggleNode?: () => void;
}
