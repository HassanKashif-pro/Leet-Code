class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDepth = 0;

  function depth(node: TreeNode | null): number {
    if (!node) return 0;

    let leftDepth = depth(node.left);
    let rightDepth = depth(node.right);

    maxDepth = Math.max(maxDepth, leftDepth + rightDepth);

    return Math.max(leftDepth, rightDepth) + 1;
  }

  depth(root);
  return maxDepth;
}
