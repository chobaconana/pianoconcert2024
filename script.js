document.addEventListener("DOMContentLoaded", function() {
    var table = document.getElementById("data-table");
    var selectedNumber = document.getElementById("selected-number");
    var selectedGrade = document.getElementById("selected-grade");
    var selectedTitle = document.getElementById("selected-title")
    var logTable = document.getElementById("log-table");
    var currentIndex = 0; // 現在の選択されている行のインデックス
  
    // 時刻を更新する関数
  function updateCurrentTime() {
    var currentTime = new Date();
    var timeDifference = Math.floor((currentTime - startTime) / 1000 / 3600); // 分単位の差を計算
    document.getElementById("current-time").textContent = "現在の時間: " + currentTime.toLocaleTimeString() + " (" + timeDifference + "分経過)";
    setTimeout(updateCurrentTime, 1000); // 1秒ごとに時刻を更新
  }

  

    // 上ボタンがクリックされたときの処理
    document.getElementById("up-button").addEventListener("click", function() {
      if (currentIndex > 0) {
        currentIndex--;
        updateSelectedInfo();
      }
      logButtonClick("上");
    });
  
    // 下ボタンがクリックされたときの処理
    document.getElementById("down-button").addEventListener("click", function() {
      var rowsCount = table.rows.length - 1; // ヘッダー行を除く
      if (currentIndex < rowsCount) {
        currentIndex++;
        updateSelectedInfo();
      }
      logButtonClick("下");
    });
   
  
    // 選択された情報を更新する関数
    function updateSelectedInfo() {
      for (var i = 0; i < table.rows.length - 1; i++) { // ヘッダー行を除く
        table.rows[i].classList.remove("highlighted-row");
      }
  
      var row = table.rows[currentIndex + 1]; // ヘッダー行を除くので +1
      row.classList.add("highlighted-row");
  
      selectedNumber.textContent = "No." + row.cells[0].textContent;
      selectedGrade.textContent = "学年: " + row.cells[1].textContent;
      selectedTitle.textContent = "曲名: " + row.cells[2].textContent;
    }
  
    // 初期情報を更新
    updateSelectionCounts();
    updateSelectedInfo();
  });
  
    //現在の時間を表示
    function showClock1() {
        var nowTime = new Date();
        var nowHour = nowTime.getHours();
        var nowMin  = nowTime.getMinutes();
        var nowSec  = nowTime.getSeconds();
        var msg = "現在時刻: " + nowHour + "時" + nowMin + "分" + nowSec + "秒";
        document.getElementById("NowTime").innerHTML = msg;
     }
     setInterval('showClock1()',1000);
