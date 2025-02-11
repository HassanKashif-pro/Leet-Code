class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.right);
  invertTree(root.left);

  return root;
}
