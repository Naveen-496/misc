const createCache = () => {
    const cache = {};
    // or
    const anotherCache = {};
    const add = (id, value) => {
        anotherCache[id] = value;
    };
    const remove = (id) => {
        delete anotherCache[id];
    };
    return {
        anotherCache,
        add,
        remove
    };
};
export {};
