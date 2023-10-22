

type serializationOptions = {
  formatting?: {
   getIndent?: () => number;
  }
}

function jsonStringify( value: any, options?: serializationOptions ): any {
  const indent = options?.formatting?.getIndent?.();
// const indent = options ? options.formatting ?  options.formatting.indent : undefined : undefined;
  return JSON.stringify( value, null, indent );
}

const user = {
 name: 'reddy',
 age: 25
}

const result = jsonStringify( user, { formatting: {
 getIndent: () => 3,
} });
console.log( result );