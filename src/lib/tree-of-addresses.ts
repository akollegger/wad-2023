
export type Address = {
  street: string
}

export type Person = {
  id: number
  name: string
  livesAt?: Address
}

export class World {
  readonly idToPerson = new Map<number, Person>();
  readonly addresses = new Set<Address>();
  
  addressesAreEqual = (a1:Address, a2:Address) => { return a1.street === a2.street;}
  findMatchingAddress = (address:Address) => {
    return Array.from(this.addresses).find(a => this.addressesAreEqual(a, address));
  }
  mergeAddress = (address:Address) => {
    let mergedAddress = this.findMatchingAddress(address);
    if (mergedAddress === undefined) {
      this.addresses.add(address);
      mergedAddress = address;
    }
    return mergedAddress;
  }
  addPerson = (person:Person) => {
    const mergedAddress = this.mergeAddress(person.livesAt);
    person.livesAt = mergedAddress; // update person to use merged address
    this.idToPerson.set(person.id, person); // then insert into map
  }  
  addPeople = (newPeople:Person[]) => {
    newPeople.forEach(this.addPerson); // add each person
  }  
  getPersonById = (id:number) => {
    const foundPerson = this.idToPerson.get(id); // find in map
    return foundPerson;
  }  
  getPeople = () => {
    // const people = Array.from(this.people);
    const people = Array.from(this.idToPerson.values());
    return people;
  }

  whoIsAtAddress = (address:Address) => {
    const people = Array.from(this.idToPerson.values()).filter(p => 
      this.addressesAreEqual(p.livesAt, address)
    );
    return people;
  }

}

