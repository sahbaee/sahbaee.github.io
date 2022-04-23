function configJson() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let configData = JSON.parse(this.responseText);
            const username = configData.username;
            const link_github = configData.links.github;
            const link_stackoverflow = configData.links.stackoverflow;
            const link_instagram = configData.links.instagram;
            const link_linkedin = configData.links.linkedin;
            userJson(username, link_github, link_stackoverflow, link_instagram, link_linkedin);
        }
    };
    xhttp.open("GET", '../../config/config.json', true);
    xhttp.send();
};
configJson();

function userJson(username, link_github, link_stackoverflow, link_instagram, link_linkedin) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let resultData = this.responseText;
            let data = JSON.parse(resultData);
            const avatar = data.avatar_url;
            const bio = data.bio;
            const fullName = data.name;
            applyData(fullName, bio, avatar, link_github, link_stackoverflow, link_instagram, link_linkedin)
        }
    };
    xhttp.open("GET", 'https://api.github.com/users/' + username, true);
    xhttp.send();
};

function applyData(fullName, bio, avatar, link_github, link_stackoverflow, link_instagram, link_linkedin) {
    let avatar_element = document.querySelector('.avatar');
    let name_element = document.querySelector('.name_txt');
    let bio_element = document.querySelector('.bio_txt');
    let background_element = document.querySelector('.background-image');
    let instagram_icon_element = document.querySelector('.instagram_icon');
    let github_icon_element = document.querySelector('.github_icon');
    let linkedin_icon_element = document.querySelector('.linkedin_icon');
    let stackoverflow_element = document.querySelector('.stackoverflow_icon');
    avatar_element.setAttribute("src", avatar);
    name_element.innerHTML = fullName;
    bio_element.innerHTML = bio;
    background_element.style.backgroundImage = `url('${avatar}')`;
    instagram_icon_element.setAttribute("onclick", `window.location.href='${link_instagram}'`);
    stackoverflow_element.setAttribute("onclick", `window.location.href='${link_stackoverflow}'`);
    linkedin_icon_element.setAttribute("onclick", `window.location.href='${link_linkedin}'`);
    github_icon_element.setAttribute("onclick", `window.location.href='${link_github}'`);
}


