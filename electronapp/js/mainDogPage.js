const $ = selector => document.querySelector(selector)

document.addEventListener("DOMContentLoaded", () => {


  const botonshow = $('#addDogButton');
  const dogSection = $('.dogMainPage');
  let dogCardCount = 0;
  
  botonshow.addEventListener("click", () => {
    dogCardCount ++;
    createDogCard(dogCardCount);
    
  })

  let name, age, breed;
  let checkDogCardCreated = false;
  

  function createDogCard(count){
    
    const container = document.createElement("div");
    container.classList.add("dog-card");
    container.id = "dogcard" + count; // Se le agrega count para hacer un id unico

    // ELEMENTO DEL NOMBRE DEL PERRO
    const label_name = document.createElement("label");
    label_name.textContent = "Nombre del perro";
    label_name.classList.add("dogCardAttributeText");
    container.appendChild(label_name);

    container.appendChild(document.createElement("br"));

     name = document.createElement("input");
    name.classList.add("dogCardAttributeText");
    container.appendChild(name); //SE AGREGA EL INPUT DEL NOMBRE DEL PERRO

    container.appendChild(document.createElement("br"));

    // ELEMENTO DE LA EDAD DEL PERRO
    const label_age = document.createElement("label");
    label_age.textContent = "Edad del perro";
    label_age.classList.add("dogCardAttributeText");
    container.appendChild(label_age);

    container.appendChild(document.createElement("br"));

    age = document.createElement("input");
    age.classList.add("dogCardAttributeText");
    container.appendChild(age); //SE AGREGA EL INPUT DE LA EDAD DEL PERRO

    container.appendChild(document.createElement("br"));
    
    // ELEMENTO DE LA RAZA DEL PERRO
    const label_breed = document.createElement("label");
    label_breed.textContent = "Raza del perro";
    label_breed.classList.add("dogCardAttributeText");
    container.appendChild(label_breed);

    container.appendChild(document.createElement("br"));
    
    breed = document.createElement("input");
    breed.classList.add("dogCardAttributeText");
    container.appendChild(breed); //SE AGREGA EL INPUT DE LA RAZA DEL PERRO

    container.appendChild(document.createElement("br"));

    const botonSendInfoDogCard = document.createElement("button"); //SE CREA EL BOTON DE SIGUIENTE
    botonSendInfoDogCard.classList.add("botonNextDogCard");
    botonSendInfoDogCard.textContent ="Siguiente";
    container.appendChild(botonSendInfoDogCard);

    checkDogCardCreated = true;
    
    document.querySelector("#dogsContainer").appendChild(container);
  }
  
  
})
