//post request to add an user to the DB
app.get("/account/:collectionName", (request, response, next) => {
    let registerArray;
  
    let password = request.body.password;
    bcrypt.hash(password, saltRounds, (err, hash) => {
      registerArray = {email: request.body.email, username: request.body.username}
    });
    request.collection
      .find({ username: request.body.username })
      .toArray((e, results) => {
        if (!results.length == 0) {
          console.log("Already exists");
          response.send(false);
        } else {
          console.log("added to db");
  
          request.collection.insertOne(request.body, (e, results) => {
            console.log(request.body);
            if (e) return next(e);
            response.send(true);
          });
        }
        console.log(results);
      });
  });