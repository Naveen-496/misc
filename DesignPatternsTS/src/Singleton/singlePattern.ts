
interface Pokemon {
  id: string;
  attack: number;
  defence: number;
}

interface BaseRecord {
  id: string;
}

interface Database<T extends BaseRecord> {
   set(newObject: T): void;
   get(id: string): T | undefined;
}

// singleton pattern
// only one instance will be created and given
function createDatabaseSingleton<T extends BaseRecord>() {
   
   class InMemoryDatabase implements Database<T> {

      private constructor() {

      }
      static instance = new InMemoryDatabase();

      private db: Record<string, T> = {};

    
      public set(newObject: T): void {
          this.db[newObject.id] = newObject;
      }

      public get( id: string): T | undefined {
          return this.db[id];
      }
   }

  //  const db = new InMemoryDatabase();
  //  return db;

   return InMemoryDatabase;
}

const pokemonDbSingleton = createDatabaseSingleton<Pokemon>();
pokemonDbSingleton.instance.set({
  id: "45678",
  attack: 25,
  defence: 25
});

console.log(pokemonDbSingleton.instance.get("45678"));
export {pokemonDbSingleton};
