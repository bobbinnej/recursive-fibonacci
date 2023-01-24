function recursiveFibo(n){
    if(n<2){
        return n;
    }

    return recursiveFibo(n-1) + recursiveFibo(n-2);
}

console.log(recursiveFibo(6));

// here we have created an algorithm to find the nth value in the fibonacci series.
// i have opted to find the 6th value in the series
   