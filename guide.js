document.addEventListener("DOMContentLoaded", function() {
    fetch("guide.json")
        .then(response => response.json())
        .then(data => {
            let currentIndex = 0;
            const title = document.getElementById("guideTitle");
            const text = document.getElementById("guideText");
            const image = document.getElementById("guideImage");
            const nextBtn = document.getElementById("nextButton");

            function updateStep() {
                title.textContent = data[currentIndex].title;
                text.textContent = data[currentIndex].text;
                image.src = data[currentIndex].image;
            }

            nextBtn.addEventListener("click", function() {
                if (currentIndex < data.length - 1) {
                    currentIndex++;
                    updateStep();
                }
            });

            updateStep(); // 最初のステップを表示
        })
        .catch(error => console.error("JSONの読み込みに失敗しました:", error));
});
