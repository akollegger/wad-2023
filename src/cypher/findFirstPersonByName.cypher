// set query parameters 
:params name => "Andreas"
// findAllPeopleByName() – find all people by $name parameter
MATCH (p:Person {name: $name}) RETURN p LIMIT 1
