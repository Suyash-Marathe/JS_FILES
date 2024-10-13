function changebg()
{
	document.body.style.backgroundColor='yellow';
}

function resetbg()
{
	document.body.style.backgroundColor='green';
}

function show()
{
	let n = parseInt(document.getElementById("number")).value;
	
	if (n == "")
	{
		let choice = confirm("Do You Want To Check Entered Number Is Armstrong Number Or Not Armstrong Number ?");
		if (choice == true)
		{
			alert("Enter The Number And Try Again !");
		}
		else
		{
			alert("Bye !");
		}
	}
	else
	{
		let choice = confirm("Do You Want To Check Entered Number Is Armstrong Number Or Not Armstrong Number ?");
		if (choice == true)
		{
			let r, sum=0, temp;
			temp = n;
			
			while (n > 0)
			{
				r = parseInt(n % 10);
				sum = parseInt(sum + (r*r*r));
				n = parseInt(n / 10);
			}

			if (temp == n)
			{
				alert("Entered Number Is Armstrong Number !");
			}
			else
			{
				alert("Entered Number Is Not Armstrong Number !");
			}
		}
		else
		{
			alert("Bye !");
		}
	}
}