import machines from "./machines.json";

interface Machine {
  name: string;
  model: number;
  color: string;
  hp: number;
}

interface MachineWithId extends Machine {
  id: number;
}

function findMachines(
  inputMachines: string | Machine[],
  filter?: (machine: Machine) => boolean
): MachineWithId[] {
  const machines: Machine[] =
    typeof inputMachines === "string"
      ? JSON.parse(inputMachines)
      : inputMachines;

  return (filter ? machines.filter(filter) : machines).map((machine) => {
    return {
      id: machines.indexOf(machine),
      ...machine,
    };
  });
}


console.log( findMachines(machines, ({ name }) => name === "Sonalika"));
console.log( findMachines(JSON.stringify(machines), ({ hp }) => hp > 50 ));