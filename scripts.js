let navigationButton = document.getElementById("navButton");

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
navigationButton.addEventListener("click", mobileMenu);

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
window.addEventListener('resize', resetMenu);