// Tip: You can either hide the answer on page load with js or use display:none in css
$('#question1').on('click',function (){
	$('#answer1').slideDown();
	});

$('#question2').on('click',function (){
	$('#answer2').slideDown();
	});

$('#question3').on('click',function (){
	$('#answer3').slideDown();
	});

$('#answer1').on('click',function (){
	$('#answer1').slideUp();
	});

$('#answer2').on('click',function (){
	$('#answer2').slideUp();
	});

$('#answer3').on('click',function (){
	$('#answer3').slideUp();
	});

