import { describe, expect, it } from "vitest";
import { LinkedList } from "./LinkedLilst.js";

// describe("#insertAtHead", () => {
//   it("adds node at the beginning of the list", () => {
//     const ll: LinkedList<number> = new LinkedList();
//     ll.insertAtHead(10);
//     const oldHead = ll.head;

//     ll.insertAtHead(20);

//     expect(ll.head?.data).toBe(20);
//     expect(ll.head?.next).toBe(oldHead);
//     expect(ll.length).toBe(2);
//   });
// });

// describe("#getByIndex", () => {
//   describe("with index less than 0", () => {
//     it("should return null", () => {
//       const ll: LinkedList<number> = LinkedList.fromValues(10, 20, 30);

//       expect(ll.getByIndex(-1)).toBe(null);
//     });
//   });
//   describe("with index greater  than list length ", () => {
//     it("should return null", () => {
//       const ll: LinkedList<number> = LinkedList.fromValues(10, 20, 30);

//       expect(ll.getByIndex(3)).toBe(null);
//     });
//   });

//   describe("with index 0 ", () => {
//     it("should return the head element", () => {
//       const ll: LinkedList<number> = LinkedList.fromValues(1, 2);
//       expect(ll.getByIndex(0)?.data).toBe(1);
//     });
//   });
//   describe("with index in the middle ", () => {
//     it("should return the element at that index", () => {
//       const ll: LinkedList<number> = LinkedList.fromValues(1, 2, 3, 4);
//       expect(ll.getByIndex(2)?.data).toBe(3);
//     });
//   });
// });

describe("#insertAt", () => {
  describe("with index less than 0", () => {
    it("should not add anything", () => {
      const ll = LinkedList.fromValues(1, 2, 3);
      ll.insertAt(-1, 5);
      expect(ll.length).toBe(3);
    });
  });
  describe("with index greater than list length", () => {
    it("should not add anything", () => {
      const ll = LinkedList.fromValues(1, 2, 3);
      ll.insertAt(3, 5);
      expect(ll.length).toBe(4);
    });
  });
  describe("with index 0", () => {
    it("should add at the head", () => {
      const ll = LinkedList.fromValues(1, 2, 3);
      ll.insertAt(0, 5);
      expect(ll.head?.data).toBe(5);
    });
  });
  describe("with index in the range of list length ", () => {
    it("should return that node itself", () => {
      const ll = LinkedList.fromValues(1, 2, 3);
      ll.insertAt(2, 5);
      expect(ll.getByIndex(2)?.data).toBe(5);
    });
  });
});

describe("#removeFirst", () => {
  
  describe("if head is null", () => {
    it("should return null", () => {
      const ll = LinkedList.fromValues();
      ll.insertAt(2, 5);
      expect(ll.removeFirst()).toBe(null);
    });
  });

  describe("with only one element ", () => {
    it("should remove the head and return null", () => {
      const ll = LinkedList.fromValues(1);
      ll.removeFirst();
      expect( ll.removeFirst()).toBe(null);
    });
  });

  describe("with more than one element ", () => {
    it("should remove the head and return new head", () => {
      const ll = LinkedList.fromValues(1, 2, 3);
      ll.removeFirst();
      expect( ll.head?.data).toBe(2);
    });
  });
});
describe("#removeAt", () => {
  
  describe("if index is less than 0", () => {
    it("should not remove anything", () => {
      const ll = LinkedList.fromValues();
      ll.removeAt(-1)
      expect(ll.length).toBe(0);
    });
  });

  describe("if the index is greater than list length", () => {
    it("should not remove anything", () => {
      const ll = LinkedList.fromValues(1);
      ll.removeAt(1);
      expect( ll.length).toBe(1);
    });
  });

  describe("with index in the middle", () => {
    it("should remove the element at that index", () => {
      const ll = LinkedList.fromValues("Hi", "Hello", "bye");
      ll.removeAt(1);
      expect( ll.getByIndex(1)?.data).toBe("bye");
    });
  });
});
