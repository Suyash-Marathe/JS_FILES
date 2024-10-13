function add ()
{
	let a, b;

	a = parseInt(prompt("Enter The Value Of A : "));
	b = parseInt(prompt("Enter The Value Of B : "));

	document.write(`<br>${a} + ${b} = `, a + b);
	console.log(`${a} + ${b} = `, a + b);
}

function sub ()
{
	let a, b;

	a = parseInt(prompt("Enter The Value Of A : "));
	b = parseInt(prompt("Enter The Value Of B : "));

	document.write(`<br>${a} - ${b} = `, a - b);
	console.log(`${a} - ${b} = `, a - b);
}

function mul ()
{
	let a, b;

	a = parseInt(prompt("Enter The Value Of A : "));
	b = parseInt(prompt("Enter The Value Of B : "));

	document.write(`<br>${a} * ${b} = `, a * b);
	console.log(`${a} * ${b} = `, a * b);
}

function div ()
{
	let a, b;

	a = parseInt(prompt("Enter The Value Of A : "));
	b = parseInt(prompt("Enter The Value Of B : "));

	document.write(`<br>${a} / ${b} = `, a / b);
	console.log(`${a} / ${b} = `, a / b);
}

function rem ()
{
	let a, b;

	a = parseInt(prompt("Enter The Value Of A : "));
	b = parseInt(prompt("Enter The Value Of B : "));

	document.write(`<br>${a} % ${b} = `, a % b);
	console.log(`${a} % ${b} = `, a % b);
}

add ();
sub ();
mul ();
div ();
rem ();

add ();
sub ();
mul ();
div ();
rem ();