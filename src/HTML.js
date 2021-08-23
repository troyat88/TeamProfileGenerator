//create cards for each class w template literals 
//create HTML with placeholder for cards
//create an object or array to collect cards
function managerCard(manager){ 
    return `
<div class="container">
        <div class="card" style="width: 18rem;">
           
            <div class="card-body bg-info">
              <h2 class="card-title">Troy Atkinson</h2>
              <h4 class="card-text">Manager</h4>
            </div>
            <ul class="list-group list-group-flush">
              <li id="id" class="list-group-item">An item</li>
              <li id="email" class="list-group-item">A second item</li>
              <li id="office" class="list-group-item">A third item</li>
            </ul>
            <div class="card-body bg-info">  
            </div>
        </div>   
    </div>
`
}

function engineerCard(engineer){
    return `
<div class="container">
    <div class="card" style="width: 18rem;">
   
    <div class="card-body bg-info">
      <h2 class="card-title">Troy Atkinson</h2>
      <h4 class="card-text">Manager</h4>
    </div>
    <ul class="list-group list-group-flush">
      <li id="id" class="list-group-item">An item</li>
      <li id="email" class="list-group-item">A second item</li>
      <li id="office" class="list-group-item">A third item</li>
    </ul>
    <div class="card-body bg-info">  
    </div>
</div>   
</div>
`
}

function internCard(intern){
    return `
<div class="container">
    <div class="card" style="width: 18rem;">
   
    <div class="card-body bg-info">
      <h2 class="card-title">Troy Atkinson</h2>
      <h4 class="card-text">Manager</h4>
    </div>
    <ul class="list-group list-group-flush">
      <li id="id" class="list-group-item">An item</li>
      <li id="email" class="list-group-item">A second item</li>
      <li id="office" class="list-group-item">A third item</li>
    </ul>
    <div class="card-body bg-info">  
    </div>
</div>   
</div>
`
}

function renderHTML(){
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

    <div class="container">
        <div class="card" style="width: 18rem;">
           
            <div class="card-body bg-info">
              <h2 class="card-title">Troy Atkinson</h2>
              <h4 class="card-text">Manager</h4>
            </div>
            <ul class="list-group list-group-flush">
              <li id="id" class="list-group-item">An item</li>
              <li id="email" class="list-group-item">A second item</li>
              <li id="office" class="list-group-item">A third item</li>
            </ul>
            <div class="card-body bg-info">  
            </div>
        </div>   
    </div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>  
</body>
</html>
`
}

module.exports = htmlScript