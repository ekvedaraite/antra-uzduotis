fetch(`https://party-wedding.glitch.me/v1/party`)
  .then(res => res.json())
  .then(data => {
    const obj = data.find(person => person.name === "Kristupas Lapeika")
    const VIP = obj ? obj.VIP : false

    const h1 = document.createElement('h1')
    h1.textContent = `Is Kristupas Lapeika VIP? ${VIP}`

    document.body.appendChild(h1)
  })
  .catch(e => console.log(e.message))
