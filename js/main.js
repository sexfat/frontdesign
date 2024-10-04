// 動態創建一個 p 標籤
        var pElement = document.createElement('p');
        pElement.id = 'displayWidth';  // 設定 id，以便後續操作
        document.body.appendChild(pElement);  // 將 p 標籤添加到 body 中

        // 創建一個函數來更新和顯示瀏覽器寬度
        function updateWidth() {
            var width = window.innerWidth; // 獲取當前瀏覽器視窗的寬度
            document.getElementById('displayWidth').textContent = 'Browser Width: ' + width + 'px';
        }

        // 初始調用一次，以顯示初始寬度
        updateWidth();

        // 監聽瀏覽器視窗大小變化事件
        window.addEventListener('resize', updateWidth);