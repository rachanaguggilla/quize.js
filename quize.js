# quize.js
const quizData = [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "Home Tool Markup Language",
          "Hyperlinks and Text Mark Language",
          "None of the above"
        ],
        answer: "Hyper Text Markup Language"
      },
      {
        question: "Which tag is used to insert a line break in HTML?",
        options: [
          "&lt;br&gt;",
          "&lt;break&gt;",
          "&lt;lb&gt;",
          "&lt;line&gt;"
        ],
        answer: "&lt;br&gt;"
      },
      {
        question: "Which HTML5 element is used to create a navigation bar?",
        options: ["&lt;nav&gt;", "&lt;menu&gt;", "&lt;navigation&gt;", "&lt;ul&gt;"],
        answer: "&lt;nav&gt;"
      },
      {
        question: "Which meta tag is essential for responsive design?",
        options: [
          '&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;',
          '&lt;meta name="responsive" content="true"&gt;',
          '&lt;meta charset="UTF-8"&gt;',
          '&lt;meta name="device-width" content="yes"&gt;'
        ],
        answer: '&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;'
      },
      {
        question: "Which HTML tag is used to include external CSS?",
        options: ["&lt;link&gt;", "&lt;style&gt;", "&lt;css&gt;", "&lt;script&gt;"],
        answer: "&lt;link&gt;"
      }
    ];

    const quizForm = document.getElementById("quizForm");

    quizData.forEach((q, index) => {
      const qDiv = document.createElement("div");
      qDiv.innerHTML = `
        <div>
          <p class="mb-2 font-medium">${index + 1}. ${q.question}</p>
          <div class="space-y-2">
            ${q.options.map((opt, i) => `
              <label class="flex items-center space-x-2">
                <input type="radio" name="q${index}" value="${opt}" class="accent-blue-600" />
                <span>${opt}</span>
              </label>
            `).join('')}
          </div>
        </div>
      `;
      quizForm.appendChild(qDiv);
    });

    function submitQuiz() {
      let score = 0;
      quizData.forEach((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && selected.value === q.answer) {
          score++;
        }
      });
      document.getElementById("result").textContent = `You scored ${score} out of ${quizData.length}`;
    }
