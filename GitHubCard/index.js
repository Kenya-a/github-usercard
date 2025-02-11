/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// const promise = 
// axios.get(`https://api.github.com/users/Kenya-a`)
// promise
//   .then(data => {
//     console.log('Profile:', data)

//   })
//   .catch(error => {
//     console.log('Profiles are down, try again later', error)
//   })


const cards = document.querySelector('.cards')

const followersArray = [
  "Kenya-a",
  "justsml",
  "luishrd",
  "bigknell"
];



  followersArray.forEach(person => {
    axios.get(`https://api.github.com/users/${person}`)
      .then(data => {
        console.log('Profile:', data.data)
        cards.appendChild(createCards(dataK.data.data))
      })

      .catch(error => {
        console.log('problem', error)
      })
  })	  

 
  // const cards = document.querySelector('.cards')
  // cards.appendChild(createCards())

  
function createCards(dataK) {
  
  //create elements
  const card = document.createElement('div')
  const img = document.createElement('img')
  const cardInfo = document.createElement('div')
  const name = document.createElement('h3')
  const userName = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const urlInfo = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  //set the styles
  card.classList.add('card'); 
  cardInfo.classList.add('card-info'); 
  name.classList.add('name'); 
  userName.classList.add('username'); 
  img.classList.add('img')

  //set content
  img.src =  `${dataK.data.avatar_url}`;
  userName.textContent = `${dataK.data.name}`;
  name.textContent = `${dataK.data.login}`;
  location.textContent = `Location: ${dataK.data.location}`;
  // profile.textContent = 'Profile:${dataK.data.p}';
  urlInfo.href = `${dataK.data.html_url}`;
  followers.textContent = `Followers: ${dataK.data.followers}`;
  following.textContent = `Following: ${dataK.data.following}`;
  bio.textContent = `Bio: ${dataK.data.bio}`;

  //organization
  
  card.appendChild(img)
  card.appendChild(cardInfo)
  cardInfo.appendChild(name)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  profile.appendChild(urlInfo)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)

  return card
  
}



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/ 

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/



/* 
      Pat's Code!!! 
*/


/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// const cards = document.querySelector('.cards')


// const cards = document.querySelector('.cards') //grabbing the DOM


// const lambdaPeople = [
//   axios.get(`https://api.github.com/users/tetondan`), 
//   axios.get(`https://api.github.com/users/dustinmyers`),
//   axios.get(`https://api.github.com/users/justsml`), 
//   axios.get(`https://api.github.com/users/luishrd`), 
//   axios.get(`https://api.github.com/users/bigknell`),
//   axios.get(`https://api.github.com/users/danbergelt`)
//   ]
  
//   lambdaPeople.forEach(person => {
//     person
//     .then(data => {
//       const props = data.data;
//       const element = createCard(props);
//       cards.appendChild(element);
//     })
//     console.log(person)
//   });


// function createCard(gitObj){
//   // create the elements
//   const card = document.createElement('div'); // Parent
//   const cardImg = document.createElement('img'); // Child

//   const cardInfo = document.createElement('div'); // Child
//   const cardName = document.createElement('h3'); // grandChild
//   const cardUsername = document.createElement('p') // grandChild
//   const cardLocation = document.createElement('p'); // grandChild

//   const cardProfile = document.createElement('p'); // grandChild
//   const profileLink = document.createElement('a') //greatGrandChild

//   const cardFollowers = document.createElement('p') // grandChild
//   const cardFollowing = document.createElement('p') // grandChild
//   const cardBio = document.createElement('p') // grandChild

//   // set the Style names
//   card.classList.add('card')
//   cardInfo.classList.add('card-info')
//   cardName.classList.add('name')
//   cardUsername.classList.add('username')

  

//   // set Content
//   cardImg.src = gitObj.avatar_url
//   cardName.textContent = gitObj.name
//   cardUsername.textContent = gitObj.login
//   cardLocation.textContent = `Location: ${gitObj.location}`
//   cardProfile.textContent = `Profile: `
//   profileLink.href = gitObj.url
//   profileLink.textContent = gitObj.url
//   cardFollowers.textContent = `Followers: ${gitObj.followers}`
//   cardFollowing.textContent = `Following: ${gitObj.following}`
//   cardBio.textContent = `Bio: ${gitObj.bio}`

//   // put together
//   card.appendChild(cardImg)
//   card.appendChild(cardInfo)
//   cardInfo.appendChild(cardName)
//   cardInfo.appendChild(cardUsername)
//   cardInfo.appendChild(cardLocation)
//   cardInfo.appendChild(cardProfile)
//   cardProfile.appendChild(profileLink)
//   cardInfo.appendChild(cardFollowers)
//   cardInfo.appendChild(cardFollowing)
//   cardInfo.appendChild(cardBio)

//   return card;

// }



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/