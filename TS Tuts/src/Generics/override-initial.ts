
type UseState1<T> = [ () => T, ( newVal: T) => void];

function useState1<T>( initial: T): UseState1<T> {
   
   let stateVal = initial;
   return [ () => stateVal, ( newVal: T) => stateVal = newVal];
}

const [ state1, setState1] = useState1< string | null >(null);
console.log( state1());
setState1("Hello");
console.log( state1());


interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>( items: RankItem[], rank: ( r: RankItem) => number): RankItem[] {

   const rankItems: Rank<RankItem>[] = items.map(( item ) => ( {
    item,
    rank: rank( item)
   }));

   rankItems.sort( (a, b) => a.rank - b.rank);

   return rankItems.map(( item ) => (
     item.item
   ))
}
let num = 5;
console.log(ranker(["A", "B", "C", "D"], (item) => num--));