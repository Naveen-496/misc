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


// factory Pattern
function createDatabase<T extends BaseRecord>() {
  class InMemoryDatabase implements Database<T> {
    private db: Record<string, T> = {};

    public set(newObject: T): void {
      this.db[newObject.id] = newObject;
    }

    public get(id: string): T | undefined {
      return this.db[id];
    }
  }
  return InMemoryDatabase;
}
// the createDatabase function returns the class defination of InMemoryDatabese
const PokemonDb = createDatabase<Pokemon>();
const pokemonDb = new PokemonDb();
pokemonDb.set({
  id: "12345",
  attack: 50,
  defence: 20,
});

console.log(pokemonDb.get("12345"));
