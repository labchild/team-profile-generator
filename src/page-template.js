const renderTeamCards = teamArr => {
    // return card row
    // filter arr to get manager, return card
    // filter arr to get engineers, return cards joined
    // filter arr to get interns, return cards joined
    return `
<div class="row">
${teamArr.filter(manager => {
        if (manager.getRole() === 'Manager') {
            return `
        <div class="card">
        <div class="card-header">
            <h3>${employee.getName()}</h3>
            <p><i class="fa-solid fa-mug-hot> ${employee.getRole()}</p>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${employee.id}</li>
                <li class="list-group-item">Email: ${employee.email}</li>
                <li class="list-group-item">Office: ${employee.office}</li>
            </ul>
        </div>
        `;
        }
    })
        }
${teamArr.filter(employee => {
            if (employee.getRole() === 'Engineer') {
                return `
        <div class="card">
        <div class="card-header">
            <h3>${employee.getName()}</h3>
            <p><i class="fa-solid fa-glasses> ${employee.getRole()}</p>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${employee.id}</li>
                <li class="list-group-item">Email: ${employee.email}</li>
                <li class="list-group-item">Office: ${employee.github}</li>
            </ul>
        </div>
        `;
            }
        }).join('')}
${teamArr.filter(employee => {
            if (employee.getRole() === 'Engineer') {
                return `
        <div class="card">
        <div class="card-header">
            <h3>${employee.getName()}</h3>
            <p><i class="fa-solid fa-gradutation-cap> ${employee.getRole()}</p>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${employee.id}</li>
                <li class="list-group-item">Email: ${employee.email}</li>
                <li class="list-group-item">Office: ${employee.school}</li>
            </ul>
        </div>
        `;
            }
        }).join('')}
`;
};

const renderDate = () => {
    const date = new Date();
    return `${date.getMonth()} ${date.getDate()}, ${date.getFullYear()}`;
}
const generateHTML = data => {

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
    <link rel="stylesheet" href="/style.css" />
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>

    <main class="container">
        ${renderEmployeeCards(data)}
    </main>

    <footer class="bg-secondary bg-gradient bg-opacity-50">
        <div class="text-center text-light">
            updated on ${renderDate()}
        </div>
    </footer>
</body>
</html>
`;
};

module.exports = generateHTML;