// render employee cards data arr
const renderManagerCard = manager => {
    console.log(manager);
    // get manager, return card
    // filter arr to get engineers, return cards joined
    // filter arr to get interns, return cards joined
    return `
        <div class="col-md-4 mt-2">
            <div class="card">
                <div class="card-header bg-danger">
                    <h3>${manager.getName()}</h3>
                    <p><i class="fa-solid fa-mug-hot"></i> ${manager.getRole()}</p>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${manager.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.email}" target="_blank">${manager.email}</a></li>
                        <li class="list-group-item">Office: ${manager.office}</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
};

const renderEmployeeCards = employees => {
    console.log(employees);

    return `
    ${employees.filter(employee => employee.getRole() === 'Engineer')
            .map(engineer => {
                return `
            <div class="col-md-4 mt-2">
                <div class="card">
                    <div class="card-header bg-primary">
                        <h3>${engineer.getName()}</h3>
                        <p><span class="fa-solid fa-glasses"></span> ${engineer.getRole()}</p>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${engineer.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${engineer.email}" target="_blank">${engineer.email}</a></li>
                            <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            `
            }).join('')}
    ${employees.filter(employee => employee.getRole() === 'Intern')
            .map(intern => {
                return `
            <div class="col-md-4 mt-2">
                <div class="card">
                    <div class="card-header bg-info">
                        <h3>${intern.getName()}</h3>
                        <p><span class="fa-solid fa-graduation-cap"></span> ${intern.getRole()}</p>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${intern.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${intern.email}" target="_blank">${intern.email}</a></li>
                            <li class="list-group-item">School: ${intern.school}</li>
                        </ul>
                    </div>
                </div>
            </div>
            `
            }).join('')}`
};

// render date
const renderDate = () => {
    const date = new Date();
    return `${date}`;
}

// function to render page template
const generateHTML = data => {
    const [manager, ...employees] = data;

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initialscale=1.0" />
    <meta name="description" content="Team profile with contact information" />
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
    crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" 
    integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" 
    crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="./style.css" />
</head>

<body>
    <header>
        <h1 class="text-center mx-auto">My Team</h1>
    </header>

    <main class="container w-100">
        <div class="row">
        ${renderManagerCard(manager)}${renderEmployeeCards(employees)}
        </div>
    </main>

    <footer class="w-100 py-4">
        <div class="text-center">
            updated ${renderDate()}
        </div>
    </footer>
</body>
</html>
`;
};

module.exports = generateHTML;