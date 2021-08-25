//create cards for each class w template literals 
//create HTML with placeholder for cards
//create an object or array to collect cards

function managerCardTemp(manager){ 
    return `

  <div class="col">
    <div class="card" style="width: 18rem;">
            <div class="card-body bg-info">
              <h2 class="card-title">${manager.name}</h2>
              <h4 class="card-text">${manager.title}</h4>
              <img src="assets/icons8-strict-50.png">
            </div>
            <ul class="list-group list-group-flush">
              <li id="id" class="list-group-item">ID: ${manager.id}</li>
              <li id="email" class="list-group-item">Office# ${manager.officeNumber}</li>
              <li id="office" class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            </ul>
            <div class="card-body bg-info">  
            </div>
        </div>   
    </div>`

}

function engineerCardTemp(engineer){
    return `
    <div class="col">
     <div class="card" style="width: 18rem;">
         <div class="card-body bg-info">
       <h2 class="card-title">${engineer.name}</h2>
       <h4 class="card-text">${engineer.title}</h4>
       <img src="assets/icons8-worker-60.png" style="height: 50px;">
        </div>
        <ul class="list-group list-group-flush">
       <li id="id" class="list-group-item">ID: ${engineer.id}</li>
       <li id="email" class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
       <li id="office" class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
        </ul>
        <div class="card-body bg-info">  
        </div>
     </div>
    </div>`   
}

function internCardTemp(intern){
    return `
<div class="col">  
    <div class="card" style="width: 18rem;">
            <div class="card-body bg-info">
            <h2 class="card-title">${intern.name}</h2>
            <h4 class="card-text">${intern.title}</h4>
            <img src="assets/icons8-student-registration-50.png">
        </div>
        <ul class="list-group list-group-flush">
        <li id="id" class="list-group-item">ID: ${intern.id}</li>
        <li id="email" class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
        <li id="office" class="list-group-item">School: ${intern.school}</li>
        </ul>
        <div class="card-body bg-info">  
        </div>
    </div>  
</div>     

`
}

function renderHTML(compCards){
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <title>Team Profile</title>
</head>
<body>
    <header>
       <h1 style="text-align: center; background-color: rgb(226, 174, 32); height: 100px;">Meet the Team</h1>
    </header>
<main>
    <div class="container">
        <div class="row justify-content-center" id="cardholder">
            <div class="row row-cols-1 row-cols-md-3 g-4">
            
                ${compCards}
            </div>
        </div>
    </div>
</main>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>  
</body>
</html>
`
}

function createCardsArray(data) {
    cardsArray = []
    for (i = 0; i <data.length; i++){

    const employee = data[i]
    const role = employee.getRole()
    if (role === 'Manager'){
        const managerCard = managerCardTemp(employee)
        cardsArray.push(managerCard)
    }
    if (role === 'Engineer'){
        const engineerCard = engineerCardTemp(employee)
        cardsArray.push(engineerCard)
    }
    if (role === 'Intern'){
        const internCard = internCardTemp(employee)
        cardsArray.push(internCard)
    }
    }
    const compCards = cardsArray.join('')
    const compTeam = renderHTML(compCards)
    return compTeam;
    
}




module.exports = createCardsArray;
