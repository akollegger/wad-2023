// add a person to the world
CREATE (:Person {name: 'Andreas', livesAt: '110 Kollegger Ave', id:randomUUID()})

// get all people in the world
MATCH (p:Person) RETURN p

// get all people in the world named Andreas
MATCH (p:Person {name: 'Andreas'}) RETURN p

// get all people in the world by $name parameter
MATCH (p:Person {name: $name}) RETURN p

// get the first person in the world by $name parameter
MATCH (p:Person {name: $name}) RETURN p LIMIT 1

// get a unique Person by element ID
MATCH (p:Person) WHERE p.id = $id RETURN p

// add a person with address to the world
MERGE (a:Address {street: $street})
CREATE (p:Person {name: $name, id:randomUUID()})-[:LIVES_AT]->(a)

// find all people who live at a given address
MATCH (p:Person)-[:LIVES_AT]->(a:Address) 
WHERE properties(a) = $address
RETURN p

// get the neighborhood
MATCH neighborhood=(:Person)-[:LIVES_AT]->(:Address)-[:NEXT_TO]->(b:Address)<-[:LIVES_AT]-(:Person)
RETURN neighborhood
