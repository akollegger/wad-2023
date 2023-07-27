MATCH (p1:Person {name: "Andreas Kollegger"}),
      (p2:Person {name: "Adam Cowley"})
MERGE (p1)-[r:KNOWS]->(p2)
RETURN p, r, a
