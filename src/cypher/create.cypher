// add a Person to the world
CREATE (p:Person {
  name: 'Andreas Kollegger',
  livesAt: '110 Hobson Ave',
  id:randomUUID()
}) RETURN p
