var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03, 49.94,
52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];



function update(a,b){
	document.getElementById(b).innerHTML = a;
}

function calculate(){

	var globalAplus = "";
	var globalA = "";
	var globalAminus = "";
	var globalBplus = "";
	var globalB = "";
	var globalBminus = "";
	var globalCplus = "";
	var globalC = "";
	var globalCminus = "";
	var globalD = "";
	var globalF = "";

	update("Errors will show here. (No errors at this time)", 'Errors')


	var Max = document.getElementById('Max').value;
	var Aplus = document.getElementById('A+').value;
	var A = document.getElementById('A').value;
	var Aminus = document.getElementById('A-').value;
	var Bplus = document.getElementById('B+').value;
	var B = document.getElementById('B').value;
	var Bminus = document.getElementById('B-').value;
	var Cplus = document.getElementById('C+').value;
	var C = document.getElementById('C').value;
	var Cminus = document.getElementById('C-').value;
	var D = document.getElementById('D').value;
	var F = document.getElementById('F').value;

	var error = [Max, Aplus, A, Aminus, Bplus, B, Bminus, Cplus, C, Cminus, D, F]


	for(j=0; j<12; j++)
	{
		if(parseFloat(Max)<parseFloat(error[j+1]))
		{
			//window.alert("Max has to be greater then the grades below it.\nYou will see incorrect results in your histogram until you fix this.\nIf you do not want this letter grade please clear the textbox.");
			update("Max has to be greater then the grades below it.", 'Errors')
			return;
		}
		if(parseFloat(Aplus)<parseFloat(error[j+2]))
		{
			update("A+ has to be greater then the grades below it.", 'Errors')
			return;
		}
		if(parseFloat(A)<parseFloat(error[j+3]))
		{
			update("A has to be greater then the grades below it.", 'Errors')
			return;
		}
		if(parseFloat(Aminus)<parseFloat(error[j+4]))
		{
			update("A- has to be greater then the grades below it.", 'Errors')
			return;
		}
		if(parseFloat(Bplus)<parseFloat(error[j+5]))
		{
			update("B+ has to be greater then the grades below it.", 'Errors')
			return;
		}
		if(parseFloat(B)<parseFloat(error[j+6]))
		{
			update("B has to be greater then the grades below it.", 'Errors')
			return;
		}
		if(parseFloat(Bminus)<parseFloat(error[j+7]))
		{
			update("B- has to be greater then the grades below it.", 'Errors')
			return;
		}
		if(parseFloat(Cplus)<parseFloat(error[j+8]))
		{
			update("C+ has to be greater then the grades below it.", 'Errors')
			return;
		}
		if(parseFloat(C)<parseFloat(error[j+9]))
		{
			update("C has to be greater then the grades below it.", 'Errors')
			return;
		}
		if(parseFloat(Cminus)<parseFloat(error[j+10]))
		{
			update("C- has to be greater then the grades below it.", 'Errors')
			return;
		}
		if(parseFloat(D)<parseFloat(error[j+11]))
		{
			update("D has to be greater then the grades below it.", 'Errors')
			return;
		}
	}


	for(var i = 0; i<25; i++){
		/*if (grades[i] >= Max && Max>=0 && Max!=""){
			globalAplus += "&#9733";
		}*/
		if (Aplus <= grades[i] && Aplus>=0 && Aplus!=""){
			globalAplus += "&#9733";
		}
		else if (A <= grades[i] && A>=0 && A!=""){
			globalA += "&#9733";
		}
		else if (Aminus <= grades[i] && Aminus>=0 && Aminus!=""){
			globalAminus += "&#9733";
		}
		else if (Bplus <= grades[i] && Bplus>=0 && Bplus!=""){
			globalBplus += "&#9733";
		}
		else if (B <= grades[i] && B>=0 && B!=""){
			globalB += "&#9733";
		}
		else if (Bminus <= grades[i] && Bminus>=0 && Bminus!=""){
			globalBminus += "&#9733";
		}
		else if (Cplus <= grades[i] && Cplus>=0 && Cplus!=""){
			globalCplus += "&#9733";
		}
		else if (C <= grades[i] && C>=0 && C!=""){
			globalC += "&#9733";
		}
		else if (Cminus <= grades[i] && Cminus>=0 && Cminus!=""){
			globalCminus += "&#9733";
		}
		else if (D <= grades[i] && D>=0 && D!=""){
			globalD += "&#9733";
		}
		else if (grades[i] < D && F>=0 && F!=""){
			globalF += "&#9760";
		}
	}
		console.log(globalAplus);
		update(globalAplus, 'Hist1')
		update(globalA, 'Hist2')
		update(globalAminus, 'Hist3')
		update(globalBplus, 'Hist4')
		update(globalB, 'Hist5')
		update(globalBminus, 'Hist6')
		update(globalCplus, 'Hist7')
		update(globalC, 'Hist8')
		update(globalCminus, 'Hist9')
		update(globalD, 'Hist10')
		update(globalF, 'Hist11')


}
window.onload = function(){
			calculate();
			window.alert("Please check the Error box at the bottom right.\nYour histogram may show incorrect answers until you fix all errors.\nIf you do not want a certain grade point just erase all number inputs in that textbox.\nOnly float numbers with decimals (no strings or special characters) will be calculated in the histogram.")
		}


