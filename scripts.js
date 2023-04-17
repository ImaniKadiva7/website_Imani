let navigationButton = document.getElementById("navButton");
navigationButton.addEventListener("click", mobileMenu);

window.addEventListener('resize', resetMenu);

function mobileMenu()
{
    if(document.getElementById('mainMenu').style.display == 'none')
    {
        document.getElementById('mainMenu').style.display = 'block';
    }
    else
    {
        document.getElementById('mainMenu').style.display = 'none';
    }
}

function resetMenu()
{
    if(window.innerWidth >= 900)
    {
        document.getElementById('mainMenu').style.display = 'flex';
    }
    else if(window.innerWidth < 900)
    {
        document.getElementById('mainMenu').style.display = 'none';
    }
}