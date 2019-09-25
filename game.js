alert("The Game: Kom je op tijd op school?");
alert("Bij de vragen dient u A of B in te vullen");
alert("Je staat op om naar school te gaan en pakt wat eten. Wat ga je eten? A: Brood. B: Muesli.");
var keuze1 = prompt(" Wat ga je eten? A: Brood of B: Muesli");
if (keuze1 == "A"){
	alert("Je pakt brood en gaat daarna naar school.");
}
else 
{
	alert("Je pakt Muesli en gaat daarna naar school.");
}

alert("Je bent te laat voor de bus dus moet je lopend of met de fiets naar school, wat doe je? ");
var keuze2 = prompt("Hoe ga je naar school? A: Lopend of B: met de fiets?");
if (keuze2 == "A"){
	alert("Je pakt je spullen en loopt naar school");
}
else
{
	alert("Je pakt je spullen en gaat fietsend naar school");
}

if(keuze2 == "A"){
	var lopend1 = alert("Je word gebeld door een vriend en hij vraagt of je hem komt ophalen. A: Je haalt hem op of B: Je verzint een smoes om niet te gaan.")
	var lopend1 = prompt("A: Je haalt hem op. B: Je verzint een smoes om niet te gaan");
	if(lopend1 == "A"){
		alert("Je loopt naar je vriend en haalt hem op.");
	}
	else
	{
		alert("Je loopt door naar school zonder je vriend door een smoes die je hebt verteld.");
	}
}

if(keuze2 == "B"){
	var fiets1 = alert("Je hebt haast maar het stoplicht staat op rood, wat doe je? A: Je fietst door rood of B: Je wacht tot het stoplicht op groen staat.")
	var fiets1 = prompt("A: Je fietst door. B: Je wacht tot het stoplicht op groen staat");
	if(fiets1 == "A"){
		alert("Je word aangereden door een hard rijdende auto en bent op slag dood.(Slecht einde)");
	}
	else
	{
		alert("Je wacht tot het stoplicht op groen staat en fietst door.");
	}
}


if(lopend1 == "A"){
	var lopend2 = alert("Je hebt wat vertraging opgelopen omdat je je vriend ging ophalen en komt te laat in de les, wat voor smoes verzin je? A: je zegt de waarheid. B: je zegt dat je op school een leraar bent tegengekomen en daarmee een gesprek had.");
	var lopend2 = prompt("A: Je zegt de waarheid. B: Je bent een leraar tegengekomen en hebt daarmee een gesprek gehad.");
	if(lopend2 == "A"){
		alert("De leraar stuurt jullie uit de les en geeft strafwerk op. (Slecht einde)");
	}
	else
		{
			alert("De leraar gelooft het verhaal en jullie mogen het lokaal in.(Goed einde) ");
		}
}

if(fiets1 == "B"){
	var fiets2 = alert("Je word gebeld door een vriend en hij of hij je moet ophalen met de auto. A: Hij haalt je op of B: Je verzint een smoes om niet te gaan.");
	var fiets2 = prompt("A: Hij haalt je op. B: Je verzint een smoes om niet te gaan");
	if(fiets2 == "A"){
		alert("Jullie komen beide op tijd op school. (Goed einde)");
	}
	else
	{
		alert("Je verzint een smoes dat je door je vader naar school word gebracht.")
	}
}


if(lopend1 == "B"){
	var lopend3 = alert("Onderweg kom je je vriend tegen en hij is het zat dat je voor de zoveelste keer hebt gelogen en komt boos op je af lopen. Wat doe je? A: Je zegt waarom je eigenlijk niet met hem naar school wilde. B: Je weet dat hij agressief is en geeft hem uit voorzorg al een klap in z'n gezicht.");
	var lopend3 = prompt("A: Je legt hem uit waarom je niet samen naar school wilde. B: Je geeft hem een klap in z'n gezicht.");
	if(lopend3 == "A"){
		alert("Je legt uit waarom je niet samen naar school wilde en je vriend zegt dat je dat eerder mocht zeggen zonder leugens. Jullie lopen uiteindelijk samen naar school om alles uit te praten. (Goed einde)");
	}
	else
	{
		alert("Nadat je de eerste klap gegeven hebt trekt hij een mes uit zijn zak waarna je een paar keer gestoken word en het uiteindelijk niet overleeft. (Slecht einde)");
	}
}

if(fiets2 == "B"){
	var fiets3 = alert("Terwijl je aan het fietsen bent kom je je vriend tegen die in de auto zit. Hij vraagt waarom je niet met je vader meerijd. Wat doe je? A: Je zegt dat je vader nog snel iets moest doen waardoor je anders te laat zou komen. B: Je zegt niks en fietst door.");
	var fiets3 = prompt("A: Je zegt dat je vader nog bezig was, je anders te laat kwam en het raar vond om alsnog te vragen of je vriend je kon ophalen . B: Je fietst door zonder iets te zeggen.")
	if(fiets3 == "A"){
		alert("Je vriend zegt dat je alsnog met hem kon meerijden en het hem niet uitmaakte of hij je moest ophalen nadat je had gezegd dat je door je vader gebracht werd. Je fietst gewoon naar school en komt op tijd in de les.(Goed einde)");
	}
	else
	{
		alert("Je vriend is het helemaal zat en krijgt een storing in zijn hoofd waarna hij je een stukje laat doorfietsen. Als je eenmaal wat verder bent gefietst komt je vriend met 150km/u aanrijden en schept je vol van achteren en vliegt een aantal meters door de lucht en een aantal botten breekt. Dit ongeluk heeft een fataal einde, je schedel is gespleten en al je ribben zijn gebroken. (Slecht eind)");
	}
}







