const themeToggleBtn = document.querySelector(".icon-btn");
const theme = localStorage.getItem("theme");
if (theme) {
	document.body.classList.toggle("dark-mode");
}
themeToggleBtn.addEventListener("click", () => {
	document.body.classList.toggle("dark-mode");
	if (document.body.classList.contains("dark-mode")) {
		localStorage.setItem("theme", "dark-mode");
	} else {
		localStorage.removeItem("theme");
	}
});
const characters = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"~",
	"`",
	"!",
	"@",
	"#",
	"$",
	"%",
	"^",
	"&",
	"*",
	"(",
	")",
	"_",
	"-",
	"+",
	"=",
	"{",
	"[",
	"}",
	"]",
	",",
	"|",
	":",
	";",
	"<",
	">",
	".",
	"?",
	"/",
];
const generateBtn = document.querySelector(".btn");
var passwordText = "";
generateBtn.addEventListener("click", () => {
	for (let i = 0; i < 15; i++) {
		var randomCharacter =
			characters[Math.floor(Math.random() * characters.length)];
		passwordText += randomCharacter;
	}
	document.getElementById((field.value = passwordText));
	passwordText = "";
	document.querySelector(".copied").classList.remove("show");
});
/*const copyBtn = document.querySelector(".copy-btn");
copyBtn.addEventListener("click", () => {
	const text = copyBtn.value;
	if (text !== "") {
		navigator.clipboard.writeText(text);
	}
});*/

const copyBtn = document.querySelector(".copy-btn");
copyBtn.addEventListener("click", () => {
	const text = copyBtn.value;
	if (text !== "") {
		navigator.clipboard.writeText(text);
		document.querySelector(".copied").classList.add("show");
	}
});
