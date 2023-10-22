function myForEach<T>(items: T[], myForEachFunc: (t: T) => void): void {
  items.reduce((a, t) => {
    myForEachFunc(t);
    return undefined;
  }, undefined);
}

function myForEachFunc<T>(t: T) {
  console.log(`forEach ${t}`);
}

// myForEach(['a', 'b', 'c'], myForEachFunc);

function myFilter<T>(items: T[], myFilterFunc: (f: T) => boolean): T[] {
  return items.reduce((a: T[], f) => (myFilterFunc(f) ? [...a, f] : a), []);
}

// console.log(myFilter([2, 3, 4, 5, 6, 7, 8], (v) => v % 2 === 0));

function myMap<T, K>(items: T[], myMapFunc: (t: T) => K): K[] {
  return items.reduce((a: K[], v) => [...a, myMapFunc(v)], []);
}

const myMaps = myMap([1, 2, 3, 4, 5], (v) => `${v} --> ${v % 2}`);
console.log( myMaps );
