class HashMap<K, V> {
  private storage: Array<[K, V][]>; // Array of key-value pairs (for handling collisions)
  private size: number;

  constructor(size: number = 10) {
    this.size = size;
    this.storage = new Array(size);
  }

  // Hash function to generate an index
  private hash(key: K): number {
    let hash = 0;
    const keyString = String(key); // Convert key to string
    for (let i = 0; i < keyString.length; i++) {
      hash += keyString.charCodeAt(i);
    }
    return hash % this.size;
  }

  // Insert key-value pair
  set(key: K, value: V): void {
    const index = this.hash(key);
    if (!this.storage[index]) {
      this.storage[index] = [];
    }
    // Check if key already exists and update
    for (let pair of this.storage[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }
    this.storage[index].push([key, value]);
  }

  // Retrieve value by key
  get(key: K): V | undefined {
    const index = this.hash(key);
    if (!this.storage[index]) return undefined;
    for (let pair of this.storage[index]) {
      if (pair[0] === key) {
        return pair[1];
      }
    }
    return undefined;
  }

  // Delete key-value pair
  delete(key: K): void {
    const index = this.hash(key);
    if (!this.storage[index]) return;
    this.storage[index] = this.storage[index].filter(pair => pair[0] !== key);
  }
}

// Usage example
const map = new HashMap<string, number>();
map.set("age", 25);
map.set("height", 175);
map.set("weight", 70);

console.log(map.get("age"));    // Output: 25
console.log(map.get("height")); // Output: 175
console.log(map.get("weight")); // Output: 70

map.delete("age");
console.log(map.get("age")); // Output: undefined
