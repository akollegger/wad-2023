
export type PersonWithAddress = {
  id: number
  name: string
  livesAt?: string
}

export type PersonWithDetailedAddress = {
  id: number
  name: string
  livesAt?: Address
}

export type PersonWithAddressAndFriends = {
  id: number
  name: string
  livesAt?: Address
  knows?: Person[]
}

export type Person = PersonWithAddress

export type Address = {
  id: number
  street: string
}

export class World {
  readonly people = new Set<Person>();
  readonly addresses = new Set<Address>();
  readonly idToPerson = new Map<number, Person>();
  readonly idToAddress = new Map<number, Address>();

  orderedPeople = () => {
    return Array.from(this.people).sort((a, b) => a.name.localeCompare(b.name));
  }
  
  addPerson = (person:Person) => {
    // this.people.add(person); // add to set
    this.idToPerson.set(person.id, person); // insert into map

    // this.addAddress(person.livesAt); // add address if it exists
  }
  
  addPeople = (newPeople:Person[]) => {
    newPeople.forEach(this.addPerson); // add each person
  }
  
  getPersonById = (id:number) => {
    // const foundPerson = Array.from(this.people).find(p => p.id === id); // find in set
    const foundPerson = this.idToPerson.get(id); // find in map
    return foundPerson;
  }
  
  getPeople = () => {
    // const people = Array.from(this.people);
    const people = Array.from(this.idToPerson.values());
    return people;
  }

  addAddress = (address?:Address) => {
    if (address !== undefined) {
      this.addresses.add(address);  // add to set
      this.idToAddress.set(address.id, address); // insert into map
    }
  }

  whoIsAtAddress = (address:string) => {
    const people = Array.from(this.people).filter(p => p.livesAt === address);
    return people;
  }

  // whoIsAtAddress = (address:Address) => {
  //   const people = Array.from(this.people).filter(p => p.livesAt.street === address.street);
  //   return people;
  // }

}

