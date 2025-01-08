const images = [
    "https://picsum.photos/300/400?random=1",
    "https://picsum.photos/300/400?random=2",
    "https://picsum.photos/300/400?random=3",
    "https://picsum.photos/300/400?random=4",
    "https://picsum.photos/300/400?random=5"
];

let currentIndex = 0;
let progressInterval;

function showLoading() {
    document.getElementById("loading").classList.remove("hidden");
    let progressBar = document.getElementById("progressBar");
    let width = 0;
    progressInterval = setInterval(function() {
        if (width >= 100) {
            clearInterval(progressInterval);
            
            // hideLoading(); 
        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }, 20);
}

function hideLoading() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("content").classList.add("visible");
}

function loadRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    currentIndex = randomIndex;
    const img = document.getElementById("randomImage");
    img.onload = function() {
        // 图片加载完成后隐藏加载器
        hideLoading();
    };
    img.onerror = function() {
        // 图片加载失败时也可以隐藏加载器，并可能显示错误消息
        hideLoading();
        alert("图片加载失败！");
    };
    img.src = images[randomIndex];
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    loadRandomImage(); // 使用loadRandomImage来确保加载逻辑一致
}

window.onload = function() {
    showLoading();
    loadRandomImage();
    
    document.getElementById("nextImageButton").addEventListener("click", showNextImage);
};