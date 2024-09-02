// ->for registering a user in app
// POST-> localhost:3000/api/auth/register
// {
//     "username":"example",
//     "password":"asdf"
// }

// for logging in user& for getting access token
// POST->locahost:3000/api/auth/login
// {
//     "username":"example",
//     "password":"asdf"
// }



// NOTE , YOU NEED TO GIVE ACCESS TOKEN FOR DOING ALL API OPERATIONS in 'auth'->'bearer'


//for getting all cats
// GET->localhost:3000/api/catperson/getAll

//for adding a cat data
// POST-> localhost:3000/api/catperson/addCatData
// ->in json body
// {
//     "name":"catName",
//     "bread":"catBread",
//     "details":"catDetails"
//   }


// for updating cat data
// PUT-> localhost:3000/api/catperson/updateCat/:cat_id
// {
    //     "name":"catName",
    //     "bread":"catBread",
    //     "details":"catDetails"
    //   }



// for deleting whole cat data by id
// DELETE ->localhost:3000/api/catperson/deleteById/:id




