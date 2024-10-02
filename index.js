/*/Loop through all numbers from 1 to 100.
If a number is divisible by 3, log “Fizz.”
If a number is divisible by 5, log “Buzz.”
If a number is divisible by both 3 and 5, log “Fizz Buzz.”
If a number is not divisible by either 3 or 5, log the number.*/

/*let i=0
for (i=0;i<=100;i++)
{
    if(i%3==0)
    {
        console.log(`Fizz`)

    }
    else if(i%5==0)

        {
            console.log(`Buzz`)
        }
        else if(i%3 ==0 && i%5==0)
        {
            console.log(`FizzBuzz`)
        }
        else 
        {
            console.log(i)
        }
}*/
/*let prime
for ( let i = 0; i <=25; i++)
    {
    if(i<2)
    {
        continue
    }
   else if (i%2==0 && i>2  )
    {
                        
        continue
    }
    else 
    {
        if(i%3 >=1  )
        console.log(`prime:${i}`)
    }

}*/
let n = 100;
for( let number=1;number<=n;number++)
 // Change this to limit how many prime numbers to print
 {
let nextnum= number+1
let isPrime= false
while(true)

{
    let isPrime = true;
   
    for (let j = 2; j <= Math.sqrt(nextnum); j++) {
        if (nextnum % j === 0) {
            isPrime = false;
            break; // Exit the loop if it's not prime
        }
    }

    if (isPrime) {
        console.log(`the next prime number after:${number} is ${nextnum}`)
        // Print the prime numberb
        break
    }
    nextnum++
}
 }

        



