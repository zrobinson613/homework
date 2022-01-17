import '../src/index.css';
(async function () {


    const headerDiv = document.createElement('div');
    headerDiv.setAttribute('class', 'headerDiv');
    const heading = document.createElement('h1');
    heading.innerText = 'Welcome to the PCS blog!';
    headerDiv.appendChild(heading);
    document.body.append(headerDiv);

    let postsDiv = document.createElement('div');
    postsDiv.setAttribute("id", "postsDiv");

    let currentlyDisplayingPosts = false;

    const usersDiv = document.getElementsByClassName('user');
    let postButton;


    // let users;

    async function myFetch(url) {
        try {
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error(`${response.status} ${response.stausText}`);
            }

            const data = await response.json();
            // console.log(data);
            return data;
            // users = data;
        } catch (error) {
            console.log(error);
        }
    }

    const users = await myFetch('https://jsonplaceholder.typicode.com/users');

    // console.log(users);
    addUserstoDom(users);

    function addUserstoDom(users) {
        headerDiv.append(document.createElement('hr'));
        const usersDiv = document.createElement('div');
        usersDiv.setAttribute("id", "usersDiv");


        let prac = '';
        users.forEach(u => {


            prac += `<div id="user${u.id}" class="user">
                        <h3>${u.name}</h3>
                        <p>${u.company.name} - ${u.company.catchPhrase}</p>
                        <p>Visit us at ${u.website}!</p>
                        </div>`;
        });

        usersDiv.innerHTML = prac;

        document.body.append(usersDiv);
    }

    for (let i = 0; i < usersDiv.length; i++) {
        usersDiv[i].addEventListener("click", function () {
            // console.log(this);
            displayPost.call(this);
        });
    }

    async function displayPost() {
        // console.log(this.id.match(/\d+/)[0]);
        const data = await myFetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.id.match(/\d+/)[0]}`);
        console.log(data);

        if (!currentlyDisplayingPosts) {
            document.body.append(postsDiv);
        }
        let html = '';
        data.forEach(d => {

            html += `<div id="post${d.id}" class="post">
                    <h5>${d.title}</h5>
                    <p>${d.body}</p>
                    <button id="postButton">show comments</button>
                    </div>`;
        });

        postsDiv.innerHTML = html;
        postButton = document.getElementsByClassName('post');

        for (let i = 0; i < postButton.length; i++) {
        postButton[i].addEventListener("click", function () {
            console.log(this);
            console.log("here");
            // displayPost.call(this);
        });
    }

    }

    

}());