const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// BONUS

// Cambio Data

const anno = [];
const mese = [];
const giorno = [];

const dateUsa = [];

posts.forEach(post => {
    dateUsa.push(post.created);
});

console.log(dateUsa);

dateUsa.forEach(date => {
    const splitDate = date.split("-");

    anno.push(splitDate["0"]);
    giorno.push(splitDate["1"]);
    mese.push(splitDate["2"]);
});

console.log(anno);
console.log(mese);
console.log(giorno);

for(let i = 0; i < posts.length; i++){
    posts[i].created = `${giorno[i]}-${mese[i]}-${anno[i]}`;
    console.log(posts[i].created);
}

// BONUS

// Iniziali Nome

const name = [];
const surname = [];
const initialName = [];
const initialSurname = [];
const fullName = [];

posts.forEach(post => {
    fullName.push(post.author.name);
})

for(let i = 0; i < posts.length; i++){
    splitName = fullName[i].split(" ");
    name.push(splitName[0]);
    surname.push(splitName[1]);
        
    initialName.push(name[i].at(0));
    initialSurname.push(surname[i].at(0));

    const bothInitial = initialName[i] + initialSurname[i];
    console.log(bothInitial);

    if (posts[i].author.image === null) {
        posts[i].author.image = `https://via.placeholder.com/150?text=${bothInitial}`;
    }
}

const myContainer = document.getElementById("container");

for(let i = 0; i < posts.length; i++){

    myContainer.innerHTML += `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${posts[i].author.image}" alt="Phil Mangione">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${posts[i].author.name}</div>
                    <div class="post-meta__time">${posts[i].created}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${posts[i].content}</div>
        <div class="post__image">
            <img src="${posts[i].media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button js-like-button" href="#" data-postid="${posts[i].id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${posts[i].id}" class="js-likes-counter">
                    ${posts[i].likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>
`
}

const likeButton = document.getElementsByClassName("like-button");

for(let i = 0; i < likeButton.length; i++){
    likeButton[i].addEventListener("click", function(event){
        event.preventDefault();
        this.classList.toggle("like-button--liked");

        const postId = this.dataset.postid;
        const likeCounter = document.getElementById(`like-counter-${postId}`);
        let j = parseInt(likeCounter.textContent);
        if (this.classList.contains('like-button--liked')) {
            j++;
        } else {
            j--;
        }
        likeCounter.textContent = j;
    })
}
