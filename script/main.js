// script to load lesson pages on index.html

const lessons = [
    [2,8]
];

let output = '<ul>';

for (let i = 0; i < lessons.length; i++) {
    const lessonNum = lessons[i][0];
    const taskCount = lessons[i][1];

    output += `<li>Lessons ${lessonNum}<ul>`;

    for (let t = 0; t < taskCount; t++){
        const href = `./Lesson_${lessonNum}/task${t}/task.html`;
        output += `<li><a href="${href}"> Task ${t}</a></li>`;
    };

    output += `</ul>`;
};

document.write(output);