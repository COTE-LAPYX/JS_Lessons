// script to load lesson pages on index.html

const lessons = [
    [2]
];

let output = '<ul>';

for (let i = 0; i < lessons.length; i++) {
    const lessonNum = lessons[i][0];

    output += `<li><a href="./Lesson_${lessonNum}/lesson.html">Lessons ${lessonNum}</a>`;
}

output += `</ul>`;

document.write(output);