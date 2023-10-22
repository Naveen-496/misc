// observer
type Listener<EventType> = (ev: EventType) => void;

function createObserver<EventType>(): {
  subscribe: (listener: Listener<EventType>) => () => void;
  publish: (event: EventType) => void;
} {
  let listeners: Listener<EventType>[] = [];

  return {
    subscribe(listener: Listener<EventType>): () => void {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter((l) => l !== listener);
      };
    },

    publish(event: EventType) {
      listeners.forEach((l) => l(event));
    },
  };
}

interface BeforeSetEvent<T> {
  value: T;
  newValue: T;
}

interface AfterSetEvent<T> {
  value: T;
}

interface Pokemon {
  id: string;
  attack: number;
  defence: number;
}

interface BaseRecord {
  id: string;
}

interface DatabaseObs<T extends BaseRecord> {
  set(newValue: T): void;
  get(id: string): T | undefined;

  onBeforeSet(listener: Listener<BeforeSetEvent<T>>): () => void;
  onAfterSet(listener: Listener<AfterSetEvent<T>>): () => void;
}

function createDatabaseObs<T extends BaseRecord>() {
  class InMemoryDatabaseObs implements DatabaseObs<T> {
    private db: Record<string, T> = {};

    private beforeAddListeners = createObserver<BeforeSetEvent<T>>();
    private afterAddListeners = createObserver<AfterSetEvent<T>>();

    private constructor() {}
    static instance = new InMemoryDatabaseObs();

    public set(newObject: T): void {
      this.beforeAddListeners.publish({
        newValue: newObject,
        value: this.db[newObject.id],
      });
      this.db[newObject.id] = newObject;

      this.afterAddListeners.publish({
        value: newObject,
      });
    }

    public get(id: string): T | undefined {
      return this.db[id];
    }

    onBeforeSet(listener: Listener<BeforeSetEvent<T>>): () => void {
      return () => {
        return this.beforeAddListeners.subscribe(listener);
      };
    }
    onAfterSet(listener: Listener<AfterSetEvent<T>>): () => void {
      return () => {
        return this.afterAddListeners.subscribe(listener);
      };
    }
  }

  return InMemoryDatabaseObs;
}


const pokemonDbSingleton = createDatabaseObs<Pokemon>();
pokemonDbSingleton.instance.set({
  id: "45678",
  attack: 25,
  defence: 25
});

pokemonDbSingleton.instance.onAfterSet(({value}) =>{
   console.log( value );
})


pokemonDbSingleton.instance.set({
  id: "45678",
  attack: 25,
  defence: 25
});

console.log(pokemonDbSingleton.instance.get("45678"));