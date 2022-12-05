const fullname = document.querySelector('.fullname');
const img = document.querySelector('#img');
const phone = document.querySelector('#phone');
const age = document.querySelector('#age');
const nationality = document.querySelector('#nat');
const mail = document.querySelector('#email');
const picture = document.querySelector('#img');
const btn = document.querySelector('button');
const card = document.querySelector('.userInfo');

const numbs = Math.trunc(Math.random() * 100) + 1
const url = 'https://randomuser.me/api/';

const getUserId = async () => {
    const response = await fetch(url);
    const data = await response.json();
    //destruction
    const person = data.results[0]
    const { title, first, last } = person.name
    const { dob:{age} } = person
    const { email } = person
    const { phone } = person
    const { nat } = person
    const { large:image } = person.picture
    // console.log(image);
        return{
            name:`${title} ${first} ${last}`,
            age,
            email,
            nat,
            image,
            phone,
        };
};
getUserId()

const displayUser = (person) => {
    img.src = person.image;
    fullname.innerText = person.name;
    phone.innerText = `+${person.phone}`;
    email.innerText = person.email;
    age.innerText = `${person.age} yrs`;
    nationality.innerText = person.nat;
    card.style.transistion = ' 0.5s ease-in'
}

const showUserId = async () => {
    // get user api
    const person = await getUserId();
    // console.log(person);

    // display user
    displayUser(person);
}

window.addEventListener('DOMContentLoaded', showUserId);
btn.addEventListener('click', showUserId);

const cardHtml = `
            <img src="./index.jpg" alt="avater" id="img">
            <div class="content">
                <h1 class="fullname">Abdulrasaq Taofeeq</h1>
                <div class="info">
                    <label for="phone">
                        Phone:
                        <div id="phone">+2347012345678</div>
                    </label>
                    <label for="phone">
                        Age:
                        <div id="age">25</div>
                    </label>
                    <label for="phone">
                        Nationality:
                        <div id="nation">Nigeria</div>
                    </label>
                    <label for="mail">
                        Email address:
                        <div id="mail">Example@gmail.com</div>
                    </label>
                </div>


            </div>
        </div>
`


