// set query parameters 
:params dto => ({name:"Andreas", livesAt: '110 Hobson Ave'})
;
// add a parameterized Person to the world
CREATE (p:Person) SET p = $dto SET p.id = randomUUID() RETURN p
