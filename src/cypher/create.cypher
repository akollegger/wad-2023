// add a Person to the world
CREATE (p:Person {
  name: 'Andreas',
  livesAt: '110 Kollegger Ave',
  id:randomUUID()
}) RETURN p
