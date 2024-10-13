let n, r, sum=0, temp;

n = parseInt(prompt("Enter The Number : "));

temp = n;

while (n > 0)
{
	r = parseInt (n % 10);
	sum = sum + (r*r*r);
	n = parseInt (n / 10);
}

if (sum == temp)
{
	document.write("Entered Number Is Armstrong Number.");
	console.log("Entered NUmber Is Armstrong Number.")
}
else
{
	document.write("Entered Number Is Not Armstrong Number.");
	console.log("Entered Number Is Not Armstrong Number.");
}