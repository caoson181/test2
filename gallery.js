/*Name this external file gallery.js*/

function upDate(previewPic) {
    // Kiểm tra sự kiện có kích hoạt không
    console.log("Event triggered");
    console.log(previewPic.alt);  // In ra giá trị alt
    console.log(previewPic.src);  // In ra đường dẫn ảnh

    // Thay đổi nội dung văn bản
    const imageElement = document.getElementById("image");
    imageElement.innerHTML = previewPic.alt;

    // Thay đổi ảnh nền
    imageElement.style.backgroundImage = `url(${previewPic.src})`;
       }

   
       function undo() {
        const imageElement = document.getElementById("image");
    
        // Đặt lại nội dung và ảnh nền
        imageElement.innerHTML = "Hover over an image below to display here.";
        imageElement.style.backgroundImage = "url('')";
    }
    