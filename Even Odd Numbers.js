function changebg()
{
    document.body.style.backgroundColor='maroon';
}

function resetbg()
{
    document.body.style.backgroundColor='pink';
}

function check()
{
    let n = document.getElementById("number").value;

    if (n == "")
    {
        let n2 = prompt("Enter The Number : ");

        let choice = confirm("Do You Want To Check Entered Number Is Even Number Or Odd Number ?");
        if (choice == true)
        {
            if (n2 % 2 == 0)
            {
                alert("Entered Number Is Even Number !");
            }
            else
            {
                alert("Entered Number Is Odd Number !");
            }
        }
        else
        {
            alert("Bye !!");
        }
    }
    else
    {
        let choice = confirm("Do You Want To Check Entered Number Is Even Number Or Odd Number ?");
        if (choice == true)
        {
            if (n % 2 == 0)
            {
                alert("Entered Number Is Even Number !");
            }
            else
            {
                alert("Entered Number Is Odd Number !");
            }
        }
    }
}