const apiUrl = "https://api.github.com/users/";
const main = document.querySelector("#main");
const getUser = async(username)=>{
    const response = await fetch(apiUrl + username)
    const data = await response.json()
    console.log(data);
    const card = `
    <div class="card">
        <div>
            <img class="avatar" src="${data.avatar_url}" alt="codesandbox" width="250px">
        </div>
            <div class="user-info">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>
                    
                    <ul class="info">
                        <li>${data.followers}<strong>Followers</strong></li>
                        <li>${data.following}<strong>Following</strong></li>
                        <li>${data.public_repos}<strong>Repos</strong></li>
                    </ul>
                    <div id="repos">
                        <a class="repo" href="#" target="_blank">Repo1</a>
                        <a class="repo" href="#" target="_blank">Repo2</a>
                        <a class="repo" href="#" target="_blank">Repo3</a>
                    </div>
                </div>
            </div>
        `
        main.innerHTML = card;
        // getRepos(username)
}
getUser("taylorotwell")