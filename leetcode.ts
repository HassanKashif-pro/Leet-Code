function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  let result: number[][] = []; // This is 2D array for the result
  let queue: TreeNode[] = [root]; // This is how you initalize a queue with the first element being root

  while (queue.length > 0) {
    let levelSize = queue.length; // This size of this level is the length of the queue for now(before it gets shifted())
    let level: number[] = []; // Temporary variable array to store all the numbers of the level

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift()!; // This will reset the whole queue to start fresh for the new lvl

      level.push(node.val); // This will puch the values of the nodes into the level variable

      // These will store the right and left children if any into the queue.
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
}
