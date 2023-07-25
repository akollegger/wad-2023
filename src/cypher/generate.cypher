// make 100 people living on same street
UNWIND range(1,100) as surname
WITH surname, toInteger(floor(rand()*10)) as streetnumber
CREATE (p:Person {name:"Robi " + surname, livesAt: streetnumber + " Kollegger Ave", id:randomUUID()})

// create addresses for each person
MATCH (p:Person)
MERGE (a:Address {street: p.livesAt})
RETURN p, a

// create a relationship from a person to their address
MATCH (p:Person {livesAt: "110 Kollegger Ave"})
MATCH (a:Address {street: "110 Kollegger Ave"})
MERGE (p)-[r:LIVES_AT]->(a)
RETURN p, r, a

// connect each person to their address
MATCH (p:Person)
MERGE (a:Address {street: p.livesAt})
MERGE (p)-[r:LIVES_AT]->(a)
RETURN p, r, a

// connect all addresses in order
MATCH (a:Address) 
WITH a ORDER BY a.street ASC
WITH collect(a) as addresses
FOREACH (i in range(0, size(addresses) - 2) |
 FOREACH (node1 in [addresses[i]] |
  FOREACH (node2 in [addresses[i+1]] |
   CREATE (node1)-[:NEXT_TO]->(node2)
  )
 )
)

// count people at each address
MATCH (p:Person)-[r:LIVES_AT]->(a:Address) 
RETURN a.street, count(p) as family

// count people at each address
MATCH (p:Person)-[r:LIVES_AT]->(a:Address) 
RETURN a, count(p) as people ORDER by people DESC