const linksSocialMedia = {
  github: 'mmatheusjs',
  youtube: 'maykbrito',
  facebook: 'matheus.oliveirahenrique.3',
  instagram: 'mmatheusjs',
  twitter: 'jakelinytec'
}

function changeSocialMediaLinks() {
  for (let li of linkList.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userImageProfile.src = data.avatar_url
      userName.textContent = `${data.name}`
      userLink.href = data.html_url
      githubLogin.textContent = data.login
      userBio.textContent = data.bio
    })
}

getGitHubProfileInfos()
