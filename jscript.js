function Max()
{
    d=document
    var a = Number(d.form1.A.value)
    var b = Number(d.form1.B.value)
    var x1 = Math.max(a,b)
    d.form1.x1.value=x1;
}

function Check()
{
d=document
var admin, name; 
name = "Максим";
admin = name;
alert( admin ); 
}

function Age()
{
    d=document
    let age = +prompt('Введите ваш возраст');
        var result = confirm('Вы уверены, что вам '+age);
        if (result == true)
        {
            alert ('Ваш возраст - '+age)
        }
        else 
        {
            age = +prompt('Введите ваш возраст');
            alert ('ОК')
        }
}

function Show()
{
    d=document
    var city, country, area;
    city = "Москва";
    country = "Россия";
    area = "Тверской район";
    alert( country );
    alert( city );
    alert(area);
}

var secondname=" ";
document.getElementById('btn').addEventListener("click",Rename);
function Rename()
{   
    secondname=document.getElementById('_secondname').value;
    document.getElementById('secondname').innerText="Фамилия: "+ secondname;
}