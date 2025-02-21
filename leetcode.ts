class Node {
  val: number;
  next: Node | null;
  random: Node | null;

  constructor(val?: number, next?: Node | null, random?: Node | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
    this.random = random ?? null;
  }
}

function copyRandomList(head: Node | null): Node | null {
  if (!head) return null;

  let map = new Map<Node, Node>();
  let curr: Node | null = head;

  // First pass: Create a copy of each node and store it in the map
  while (curr) {
    map.set(curr, new Node(curr.val));
    curr = curr.next;
  }

  // Second pass: Set the next and random pointers
  curr = head;
  while (curr) {
    map.get(curr)!.next = map.get(curr.next) || null;
    map.get(curr)!.random = map.get(curr.random) || null;
    curr = curr.next;
  }

  return map.get(head) || null;
}
