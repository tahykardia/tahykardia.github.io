
	var trigger=0, name, age, sex, education, mathematic, asu, cutting, programming, surname, experience; // обьявляем переменные которые понадобятся в ходе работы
		document.getElementById("startTest").addEventListener("click",test) // добавляем слушателя события click к элементу с id startTest
		function test(){ // Функция которая опрашивает пользователя
			name = prompt("Введите имя");
			while(!isNaN(name))
			{
			name = prompt("Введите имя");
			}
			age = prompt("Введите возраст");
			while(isNaN(age))
			{
			age = prompt("Введите возраст");
			}
			
			sex = prompt("Введите пол");
			while(!(sex.charAt(0) == 'М' || sex.charAt(0) == 'Ж'))
			{
			sex = prompt("Введите пол");
			}
			surname = prompt("Ваша фамилия");
			education = confirm("У вас есть высшее образование?");
			mathematic = confirm("Вы знаете математику?");
			asu = confirm("Вы знаете АСУ ТП?");
			cutting = confirm("Вы знаете теорию резания?");
			programming = confirm("Умеете программировать?");
			experience = confirm("Был ли опыт работы?");
			writeToPage();
		}
		function writeToPage(){ // функция которая записывает значение из наших переменных в элементы на странице
			/*
			document.getElementById("name") - возвращает элемент с id name
			document.getElementById("name").innerText - текст этого элемента
			У ЧЕКБОКСОВ НЕТ ТЕКСТА, поэтому мы пишем в свойство checked значения true или false
			document.getElementById("education").checked = education;
			*/
			$("#name").val(name)
			$("#age").val(age)
			$("#sex").val(sex)
			$("#surname").val(surname)
			$("#sex").focus();
			$("#age").focus();
			$("#name").focus();
			$("#surname").focus();
			document.getElementById("education").checked = education;
			document.getElementById("mathematic").checked = mathematic;
			document.getElementById("asu").checked = asu;
			document.getElementById("cutting").checked = cutting;
			document.getElementById("programming").checked = programming;
			document.getElementById("experience").checked = experience;
			trigger=1;
			myFunction();
		}
		x.style.display = "none";
		function myFunction() { // эта функция автоматически проверяет подходит ли наш кандидат: "кандидаты со знанем АСУ ТП и высшим
					//образованием".
	    	var x = document.getElementById("div1");
		if (trigger==1) {
		if (document.getElementById("mathematic").checked ==true && document.getElementById("programming").checked ==true)
		{
       		var text ='<p class="stroke">ВЫ НАМ ПОДОШЛИ!</p>'
		x.innerHTML = text;
		x.style.display = "block";
		}
		else 	{
        	var text ='<p class="stroke">ВЫ НАМ НЕ НУЖНЫ!</p>'
		x.innerHTML = text;
			}
		document.getElementById("education").disabled = true;
		document.getElementById("mathematic").disabled = true;
		document.getElementById("asu").disabled = true;
		document.getElementById("cutting").disabled = true;
		document.getElementById("programming").disabled = true;
		document.getElementById("opitrab").disabled = true;
		$("#startTest").hide();
		}
		}
