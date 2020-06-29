const getFactors = n => {
	let factors = [];
	for (var i=1;i<=Math.ceil(Math.sqrt(n));i++){
		if (n%i===0){
			factors.push(i);
      let recip = n/i;
      if (recip != i){
        factors.push(recip);
      }
		}
	}
	return factors;
}

const isPrime = n => {
	for (var i=2;i<n;i++){
		if (n%i===0){
			return false;
		}
	}
	return n>1;
}

function largestPrimeFactor(number) {
  return getFactors(number).filter(isPrime).pop();
}

console.log(largestPrimeFactor(7));
