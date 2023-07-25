
export type Person = {
  id: number
  name: string
  livesAt?: string
}

export class World {
  readonly idToPerson = new Map<number, Person>();

  addPerson = (person:Person) => {
    this.idToPerson.set(person.id, person); // insert into map
  }
  getPeople = () => {
    return Array.from(this.idToPerson.values());
  }
  addPeople = (newPeople:Person[]) => {
    newPeople.forEach(this.addPerson); // add each person
  }
  findFirstPersonByName = (name:string) => {
    return this.getPeople().find(p => p.name === name);
  }
  findAllPeopleByName = (name:string) => {
    return this.getPeople().filter(p => p.name === name);
  }
  getPersonById = (id:number) => {
    return this.idToPerson.get(id); 
  }
  
}

