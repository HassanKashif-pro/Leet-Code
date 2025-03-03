function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root) return null;

  // If either p or q matches the root, return root
  if (root === p || root === q) return root;

  // Search left and right subtrees
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  // If both left and right are not null, root is LCA
  if (left && right) return root;

  // Otherwise, return the non-null side (either left or right)
  return left ? left : right;
}
