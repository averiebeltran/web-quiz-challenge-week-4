window.addEventListener('DOMContentLoaded', (event) => {
	const myQuestions = [
		{
			question: "1. What does CSS stand for?",
			answers:{
				a: "Character Style Sheets",
				b: "Cascading Style Sheets ",
				c: "Creative Style Sheets",
				d: "Comma Style Sheets"
			},
			correctAnswer: "b"
		},
		{
			question: "2. What do you need to define an object?",
			answers:{
				a: "[ ]",
				b: "**",
				c: "{ }",
				d: "$$"
			},
			correctAnswer: "c"
		},
		{
			question: "3. Which of the following is not a pseudo class?",
			answers:{
				a: ":hover",
				b: ":selected",
				c: ":unchecked",
				d: ":active"
			},
			correctAnswer: "b"
		},
		{
			question: "4. Which CSS property can stick an element on your screen to ignore scrolling?",
			answers:{
				a: "positiom",
				b: "fix",
				c: "display",
				d: "float"
			},
			correctAnswer: "a"
		},
		{
			question: "5. Which command can be used to go into a newly created branch?",
			answers:{
				a: "git checkout new branch",
				b: "cd ..",
				c: "mkdir",
				d: "git checkout -b new branch"
			},
			correctAnswer: "d"
		},
		{
			question: "6. Arrays in JavaScript can be used to store:",
			answers:{
				a: "numbers & strings",
				b: "other arrays",
				c: "brooleans",
				d: "all of the both"
			},
			correctAnswer: "d"
		}
	];

	const start = document.getElementById("start");
	start.addEventListener("click", () => {
		document.querySelector(".page-start").classList.add("hide");
		document.querySelector(".quiz").classList.remove("hide");
	})
});
