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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  // Base case: if both nodes are null, they are the same
  if (!p && !q) return true;

  // If one is null but the other is not, or values are different, return false
  if (!p || !q || p.val !== q.val) return false;

  // Recursively check left and right subtrees
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
