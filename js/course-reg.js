// Get the URL query string
const queryString = window.location.search
const queryParams = new URLSearchParams(queryString)

document.getElementById('fname').value = queryParams.get('fname')
document.getElementById('mname').value = queryParams.get('mname')
document.getElementById('lname').value = queryParams.get('lname')
document.getElementById('matno').value = queryParams.get('matno')
document.getElementById('email').value = queryParams.get('email')
const courseList = document.getElementById('course-list')
const btn = document.getElementById('form-submit')
const level = document.getElementById('level')
const semester = document.getElementById('semester')

const H1_S1 = `
                  <li>
                    <input
                      type="checkbox"
                      name="course"
                      value="COM311"
                    />OPERATING SYSTEMS 1
                  </li>
                  <li>
                    <input type="checkbox" name="course" value="COM312" />
                    DATABASE DESIGN 1
                  </li>
                  <li>
                    <input type="checkbox" name="course" value="COM313" />
                    COMPUTER PROGRAMMING (C++)
                  </li>
                  <li>
                    <input type="checkbox" name="course" value="COM314" />
                    COMPUTER ARCHITECTURE
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="course"
                      value="COM315"
                    />PYTHON PROGRAMMING LANGUAGE
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="course"
                      value="COM316"
                    />NUMERICAL METHODS
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="course"
                      value="STA314"
                    />OPERATION RESEARCH 1
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="course"
                      value="STA311"
                    />STATISTICAL THEORY
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="course"
                      value="MTH311"
                    />ADVANCED ALGEBRA
                  </li>
                  <li>
                    <input type="checkbox" name="course" value="GNS111" />USE
                    OF ENGLISH 1
                  </li>
                `
const H1_S2 = ` <li><input type="checkbox" name="course" value="os">OPERATING SYSTEMS 11</li>
                            <li><input type="checkbox" name="course" value="db-design">DATABASE DESIGN 11</li>
                            <li><input type="checkbox" name="course" value="assembly-lang">ASSEMBLY LANGUAGE</li>
                            <li><input type="checkbox" name="course" value="software-eng">INTRO. TO SOFTWARE ENGINEERING</li>
                            <li><input type="checkbox" name="course" value="intro-hcl">INTRO. TO HUMAN COMP. INTERFACE(HCI)</li>
                            <li><input type="checkbox" name="course" value="mobile-app">MOBILE APPLICATION DEVELOPMENT</li>
                            <li><input type="checkbox" name="course" value="intro-ai">INTRO. TO ARTIFICIAL INTELLIGENT</li>
                            <li><input type="checkbox" name="course" value="comm-eng">COMMUNICATION IN ENGLISH 111</li>
                            <li><input type="checkbox" name="course" value="adv-cal">ADVANCED CALCULUS</li>`
const populateCourseList = () => {
  courseList.innerHTML = ''

  if (level.value === '3') {
    if (semester.value === '1') {
      courseList.innerHTML = H1_S1
    }
    if (semester.value === '2') {
      courseList.innerHTML = H1_S2
    }
  } else {
    courseList.innerHTML = 'No available course for selected level and semester'
  }
}

level.addEventListener('change', populateCourseList)
semester.addEventListener('change', populateCourseList)

populateCourseList()

btn.addEventListener('click', (e) => {
  e.preventDefault()
  const checkboxes = document.querySelectorAll(
    'li input[name="course"]:checked'
  )

  // Create an array to store the selected values
  const selectedCourses = []

  // Loop through the selected checkboxes and push their values to the array
  checkboxes.forEach((li) => {
    selectedCourses.push(li.parentElement.textContent.trim())
  })

  if (selectedCourses.length === 0)
    return alert('Pls select atleast one course to be registered')
  const user = {
    id: 1,
    email: queryParams.get('email'),
    matno: queryParams.get('matno'),
    registeredCourse: {
      level: level.value,
      semester: semester.value,
      courses: selectedCourses,
    },
  }

  localStorage.setItem('user', JSON.stringify(user))
  alert('Successfully registered selected courses')

  const regCoursePage = `${window.location.origin}/courses.html?refId=${user.id}`

  return window.location.replace(regCoursePage)
})
