// code your solution here
function saturdayFun (act)
{
    if (act==undefined)
         act="roller-skate"

    return "This Saturday, I want to " + act +"!";
}

function mondayWork(act)
{
    if (act==undefined)
         act="go to the office"

    return "This Monday, I will " + act +".";
}

//Must return a function
function wrapAdjective(wrap)
{
    const wrapAdj = (adj) => "You are " + wrap+adj+wrap + "!"; 
    return wrapAdj;
}