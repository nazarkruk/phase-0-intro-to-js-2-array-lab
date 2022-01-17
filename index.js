
// Write your solution here!

function cats(){
    cats = ["Milo", "Otis", "Garfield"];
    return cats
} 
cats()


function beforeEach(cats){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    return cats;
}
beforeEach()


function  destructivelyAppendCat(cat){
    return cats.push(cat);
} 
destructivelyAppendCat("Ralph")


beforeEach()


function destructivelyPrependCat(cat){
    return cats.unshift(cat);
} 
destructivelyPrependCat("Bob")


beforeEach()

function destructivelyRemoveLastCat(){
    return cats.pop();
} 
destructivelyRemoveLastCat()
  
beforeEach()


function destructivelyRemoveFirstCat(){
    return cats.shift();
}

destructivelyRemoveFirstCat()
  
beforeEach()

function appendCat(cat){
    
    return  [...cats, cat]

} 
appendCat("Bob")

beforeEach() 


function prependCat(cat){
    return [cat, ...cats];
}
prependCat("Arnold")

beforeEach()

function removeLastCat(){
    return cats.slice(0,cats.length-1);
}

removeLastCat()

beforeEach()


function removeFirstCat(){
    return cats.slice(1)
}

removeFirstCat()