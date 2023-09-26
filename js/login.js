let loginBtn = document.getElementById('login')
const users = [
  {
    firstname: 'Sophia',
    middlename: '',
    matno: 'HA22/1100',
    lastname: 'Vincent',
    email: 'sophire@example.com',
    password: '123456',
  },
  {
    firstname: 'John',
    middlename: '',
    matno: 'HA22/090',
    lastname: 'Doe',
    email: 'user@example.com',
    password: 'password',
  },
]
loginBtn.addEventListener('click', async (e) => {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const validUser = users.find((obj) => obj.email === email)
  if (!validUser || validUser.password !== password)
    return alert('Invalid Credentials')
  const regFormUrl = `${window.location.origin}/reg-form.html?fname=${validUser.firstname}&lname=${validUser.lastname}&mname=${validUser.middlename}&matno=${validUser.matno}&email=${validUser.email}`

  return window.location.replace(regFormUrl)
})
