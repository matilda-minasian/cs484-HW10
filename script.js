$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.sleep-button').click(clickedSleepButton);
    $('.info-button').click(logInfo);
    $('.warning-button').click(logWarning);
    $('.error-button').click(logError);
    $('.table-button').click(logTable);
    $('.group-button').click(logGroup);
    $('.custom-button').click(logCustom);
    $('.button-404').click(click404);
    $('.type-button').click(clickTypeError);
    $('.violation-button').click(clickViolation);
  
  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Tank", weight:68, happiness:100, sleepiness: 30};
  
    function clickedTreatButton() {
      // Increase pet happiness
      // Increase pet weight
      // Introduced a bug to track and then fixed it by changing the code to update the pet_info object
      // instead of taking it in as a string from the HTML and trying to add to it, which was resulting in
      // concatenation instead of addition because it was treating the weight as a string instead of a number
      //var currWeight = ($('.weight').text());
      pet_info['happiness'] += 10;
      pet_info['weight'] = pet_info['weight'] + 5;

      //Added a class to the pet image to make it bigger in size, to show its weight going up when it eats a treat
      //then removed that class after 2 seconds
      $('.pet-image').addClass('pet-eating');
      setTimeout(function() {
        $('.pet-image').removeClass('pet-eating');
      }, 2000);
      $('.pet-message').append("<p>Yummy! Thanks for the treat!</p>");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      // Decrease pet weight
      pet_info['happiness'] += 5;
      pet_info['weight'] -= 5;
      pet_info['sleepiness'] += 10;

      //Added a class to the pet image to make it look like it's playing by making the image bounce up and down quickly
      //then removed that class after 2 seconds
      $('.pet-image').addClass('pet-playing');
      setTimeout(function() {
        $('.pet-image').removeClass('pet-playing');
      }, 2000);
      $('.pet-message').append("<p>Yay! I love playing with you!</p>");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      // Decrease pet weight
      pet_info['happiness'] -= 5;
      pet_info['weight'] -= 10;
      pet_info['sleepiness'] += 20;
      
      //Added a class to the pet image to make it look like it's exercising by making the image shake left and right quickly
      //Because the pet doesn't like exercising
      //then removed that class after 2 seconds
      $('.pet-image').addClass('pet-exercising');
      setTimeout(function() {
        $('.pet-image').removeClass('pet-exercising');
      }, 2000);
      $('.pet-message').append("<p>Ugh, I don't like exercising...</p>");
      checkAndUpdatePetInfoInHtml();
    }
    function clickedSleepButton() {
      // Increase pet happiness
      // Decrease pet sleepiness
      pet_info['happiness'] += 5;
      pet_info['sleepiness'] -= 10;

      //Added a class to the pet image to make it look like it's sleeping by making the opacity of the image lower
      //then removed that class after 3 seconds
      $('.pet-image').addClass('pet-sleeping');
      setTimeout(function() {
        $('.pet-image').removeClass('pet-sleeping');
      }, 3000);
      $('.pet-message').append("<p>Ahhh, I needed that nap!</p>");
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      if (pet_info['weight'] < 0) {
        pet_info['weight'] = 0;
      }
      if (pet_info['happiness'] < 0) {
        pet_info['happiness'] = 0;
      }
      if (pet_info['sleepiness'] < 0) {
        pet_info['sleepiness'] = 0;
      }
      
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.sleepiness').text(pet_info['sleepiness']);
    }
  

//Message logging demos

function logInfo(){
  console.info('Pet Name: ' + pet_info['name'] + ', Pet Weight: ' + pet_info['weight'] + ', Pet Happiness: ' + pet_info['happiness'] + ', Pet Sleepiness: ' + pet_info['sleepiness']);
}


function logWarning(){
  if (pet_info['weight'] > 100) {
    console.warn('Tank is overweight! Give him more exercise and less treats.');
  }
  if (pet_info['happiness'] < 20) {
    console.warn('Tank is very unhappy! Give him more treats and playtime.');
  }
  if (pet_info['sleepiness'] > 80) {
    console.warn('Tank is very sleepy! Give him more sleep time and less exercise.');
  }
}

function logError(){
  console.error('Tank can not turn into a frog!');
}

function logTable(){
  console.table({
    Name: pet_info['name'],
    Weight: pet_info['weight'],
    Happiness: pet_info['happiness'],
    Sleepiness: pet_info['sleepiness']  
  });
}

function logGroup(){
  console.group('Pet Health Check');
    console.log('Sleepiness: ' + pet_info['sleepiness']);
    console.log('Happiness: ' + pet_info['happiness']);
    console.log('Weight: ' + pet_info['weight']);
  console.groupEnd();
}

function logCustom(){
  if (pet_info['happiness'] > 80) {
    console.log('%c' + pet_info['happiness'], 'color: green; font-size: 20px;');
  }
  else if (pet_info['happiness'] > 50) {
    console.log('%c' + pet_info['happiness'], 'color: yellow; font-size: 20px;');
  }
  else if (pet_info['happiness'] > 20) {
    console.log('%c' + pet_info['happiness'], 'color: orange; font-size: 20px;');
  }
  else {
    console.log('%c' + pet_info['happiness'], 'color: red; font-size: 20px;');
  }
}


//Browser errors

function click404() {
  fetch('https://jsonplaceholder.typicode.com/pets/' + pet_info['name'])
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

function clickTypeError() {
  try {
    let undefinedVariable;
    console.log(undefinedVariable.someProperty);
  } catch (error) {
    console.error('TypeError caught:', error);
  }
}

function clickViolation() {
  'use strict';
  try {
    undeclaredVariable = 10;
  } catch (error) {
    console.error('ReferenceError caught:', error);
  }
}