// Notes from Lesson:
// const formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle",
// };

// const configurationObject = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   });

// Notes from Walkthrough:

// function submitData(name, email) {
//   return fetch("http://localhost:3000/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify({
//       name,
//       email,
//     }),
//   })
//     .then((response) => response.json())
//     .then((response) => {
//       document.body.innerHTML = '<p>${response.id}</p>';
//     });
//     .catch(error => {
//         console.log("error", error)
//         document.body.innerHTML = '<p>${error.message}</p>'
//     })
// }

// debugger;

// submitData("name", "email")
// .then(response => response)

function submitData(name, email) {
  const formData = {
    name,
    email: email,
  };
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };
  return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      document.body.innerHTML = object.id;
    })
    .catch(function (error) {
      document.body.innerHTML = error.message;
    });
}
