// Galeri elementlerini seç
var gallery = document.querySelector('.gallery');
var modal = document.getElementById('myModal');
var modalImg = document.getElementById('modalImg');
var closeBtn = document.getElementsByClassName('close')[0];
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');
var images = document.querySelectorAll('.gallery img');
var currentImageIndex = 0;

// Galeriye tıklandığında modalı aç ve resmi göster
gallery.addEventListener('click', function(e) {
  if (e.target.tagName === 'IMG') {
    modal.style.display = 'block';
    modalImg.src = e.target.src;
    currentImageIndex = Array.from(images).indexOf(e.target);
  }
});

// Kapatma düğmesine tıklandığında modalı kapat
closeBtn.addEventListener('click', function(e) {
  modal.style.display = 'none';
});

// Önceki resim butonuna tıklandığında bir önceki resmi göster
prevBtn.addEventListener('click', function() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  modalImg.src = images[currentImageIndex].src;
});

// Sonraki resim butonuna tıklandığında bir sonraki resmi göster
nextBtn.addEventListener('click', function() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  modalImg.src = images[currentImageIndex].src;
});
