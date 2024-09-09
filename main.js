
//Q1

for(let i=0 ; i<=25 ; i++){
if(i%2==0){
  console.log(i);
}
}


//Q2


let x=0
for(let i=0 ; i<=10 ; i++){
console.log(i*i)
}


//Q3


for(let i=0 ; i<=20 ; i++){
  if(i%2 !==0){
    console.log(i);
  }
  }
  

  //Q4


let a = 0, b = 1;


for (let i = 0; i < 10; i++) {
    console.log(a);
    [a, b] = [b, a + b];
}


//Q5

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
      process.stdout.write((i * j).toString().padStart(4, ' '));
  }
  console.log();
}