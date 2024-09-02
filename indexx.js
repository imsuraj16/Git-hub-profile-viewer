let user = document.querySelector('.user')
let search = document.querySelector('.search')

async function fetchUser(username){
    let API = `https://api.github.com/users/${username}`
    let result = (await(await fetch(API)).json())
    console.log(result);
    displayUser(result)
}

function displayUser({followers,
    following,
    name,
    bio,
    public_repos,
    avatar_url,
    html_url}){

    document.querySelector('.container').innerHTML = 
    
    `<div class="profile-info">
                <div class="profile-header">
                    <img id="profile-img" src="${avatar_url}" alt="Profile Image" class="profile-img">
                    <div class="name-bio">
                        <h2 id="profile-name">${name===null?'':name}</h2>
                        <p id="profile-bio">${bio===null?'':bio}</p>
                    </div>
                </div>
                <div class="profile-stats">
                    <div class="stat">
                        <h3>Followers</h3>
                        <p id="followers-count">${followers}</p>
                    </div>
                    <div class="stat">
                        <h3>Following</h3>
                        <p id="following-count">${following}</p>
                    </div>
                    <div class="stat">
                        <h3>Repositories</h3>
                        <p id="repo-count">${public_repos}</p>
                    </div>
                </div>
                <div class="profile-link">
                    <a id="profile-link" href=${html_url} target="_blank">Visit Profile</a>
                </div>
            </div>`
            document.querySelector('.container').style.display = 'block';
            
}


search.addEventListener('click',()=>{
    let userValue = user.value
    // console.log(userValue);
    fetchUser(userValue)
    user.value = ''
})