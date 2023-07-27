MATCH (p:Person)-[:LIVES_AT]->(a:Address)
RETURN a.street, count(p) as family ORDER BY family DESC LIMIT 1
