function isIdentical(tree1: TreeNode | null, tree2: TreeNode | null): boolean {
  if (!tree1 && !tree2) return true;
  if (!tree1 || !tree2 || tree1.val !== tree2.val) return false;

  return (
    isIdentical(tree1.left, tree2.left) && isIdentical(tree1.right, tree2.right)
  );
}

function isSubtree(T1: TreeNode | null, T2: TreeNode | null): boolean {
  if (!T2) return true;
  if (!T1) return false;

  if (isIdentical(T1, T2)) return true;

  return isSubtree(T1.left, T2) || isSubtree(T1.right, T2);
}
