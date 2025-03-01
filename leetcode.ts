class Node {
  key: number;
  val: number;
  prev: Node | null;
  next: Node | null;

  constructor(key: number, val: number) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  private capacity: number;
  private cache: Map<number, Node>;
  private left: Node; // LRU (Least Recently Used)
  private right: Node; // MRU (Most Recently Used)

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();

    this.left = new Node(0, 0);
    this.right = new Node(0, 0);
    this.left.next = this.right;
    this.right.prev = this.left;
  }

  private remove(node: Node): void {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }

  private insert(node: Node): void {
    node.prev = this.right.prev;
    node.next = this.right;
    this.right.prev!.next = node;
    this.right.prev = node;
  }

  get(key: number): number {
    if (!this.cache.has(key)) return -1;
    const node = this.cache.get(key)!;
    this.remove(node);
    this.insert(node);
    return node.val;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.remove(this.cache.get(key)!);
    }
    const newNode = new Node(key, value);
    this.cache.set(key, newNode);
    this.insert(newNode);

    if (this.cache.size > this.capacity) {
      const lru = this.left.next!;
      this.remove(lru);
      this.cache.delete(lru.key);
    }
  }
}
