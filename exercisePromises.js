// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string

const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, 'success')
})

// #2) Run the above promise and make it console.log "success"
Promise.all([promise, promise2, promise3])
  .then(values => {
    console.log(values);
  })


// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const promise = Promise.resolve(
  setTimeout(() => {
  console.log('success');
  }, 4000)
  );

// #4) Catch this error and console log 'Ooops something went wrong'
function resolved(result) {
  console.log('Resolved');
}

function rejected(result) {
  console.error(result);
}

Promise.reject(new Error('Ooops something went wrong')).then(resolved, rejected);


// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.dev/api/people/1',
  'https://swapi.dev/api/people/2',
  'https://swapi.dev/api/people/3',
  'https://swapi.devee/api/people/4'
]

Promise.all(urls.map(url => {
  return fetch(url).then(resp=> resp.json())
})).then(results => {
  console.log(results[0])
  console.log(results[1])
  console.log(results[2])
  console.log(results[3])
})
  .catch(err => console.log('ughhhh fix it', err));

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
