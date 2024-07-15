document.addEventListener('DOMContentLoaded', function() {
  var iframeContainer = document.getElementById('iframeContainer');
  iframeContainer.style.display = 'none'; // Đảm bảo trạng thái ban đầu
});

document.getElementById('showButton').addEventListener('click', function() {
  var iframeContainer = document.getElementById('iframeContainer');
  if (iframeContainer.style.display === 'none' || iframeContainer.style.display === '') {
      iframeContainer.style.display = 'block';
  } else {
      iframeContainer.style.display = 'none';
  }
});