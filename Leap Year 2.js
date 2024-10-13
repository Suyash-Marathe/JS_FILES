function changebg()
{
    document.body.style.backgroundColor='yellow';
}

function resetbg()
{
    document.body.style.backgroundColor='lightgreen';
}

function check()
{
    let y = document.getElementById("year").value;

    if (y == "")
    {
        let n = prompt("Enter The Year : ");

        let choice = confirm("Do You Want To Check Entered Year Is Leap Year Or Not Leap Year ?");
        if (choice == true)
        {
            if (n % 4 == 0)
            {
                alert("Entered Year Is Leap Year !");
            }
            else
            {
                alert("Entered Year Is Not Leap Year !");
            }
        }
        else
        {
            alert("Bye !!");
        }
    }
    else
    {
        let choice = confirm("Do You Want To Check Entered Year Is Leap Year Or Not Leap Year ?");
        if (choice == true)
        {
            if (y % 4 == 0)
            {
                alert("Entered Year Is Leap Year !");
            }
            else
            {
                alert("Entered Year Is Not Leap Year !");
            }
        }
        else
        {
            alert("Bye !!");
        }
    }
}