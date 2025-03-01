class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

function isBalanced(root: TreeNode | null): boolean {
  function checkHeight(node: TreeNode | null): number {
    if (!node) return 0; // Base case: empty tree has height 0

    let leftHeight = checkHeight(node.left);
    let rightHeight = checkHeight(node.right);

    if (
      leftHeight === -1 ||
      rightHeight === -1 ||
      Math.abs(leftHeight - rightHeight) > 1
    ) {
      return -1; // Found imbalance
    }

    return 1 + Math.max(leftHeight, rightHeight);
  }

  return checkHeight(root) !== -1;
}
