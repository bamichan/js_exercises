$(function() {
  //FadeThisプラグイン
  // $(window).fadeThis();

	$(document).ready(function() {
	$('.drawer').drawer();
	});

  // スマホレイアウトのときに、ハンバーガーボタンを押すとメニューを表示させる
  // $('.hum_menu').on('click', function () {
  //   $('header').toggleClass('open');
  // });

  //グローバルメニュー切り替え
  $('#ja').on('click',function(){
    // $('header ul li .header_en').hide();
    // $('header ul li .header_ja').show();
    
    // $('header ul li .header_ja').removeClass('displayLang');
    // $('header ul li .header_en').addClass('displayLang');

    //答え（中の文字だけ変える）
    $("#menu-sec1").text('見出しのエリア');
    $("#menu-sec2").text('flexのエリア');
    $("#menu-sec3").text('センタリングエリア');
    $("#menu-sec4").text('制作実績');
  });
  $('#en').on('click',function(){
    // $('header ul li .header_ja').hide();
    // $('header ul li .header_en').show();
    
    // $('header ul li .header_en').removeClass('displayLang');
    // $('header ul li .header_ja').addClass('displayLang');

    //答え
    $('#menu-sec1').text('Heading');
    $('#menu-sec2').text('Flex');
    $('#menu-sec3').text('Centering');
    $('#menu-sec4').text('Portfolio');

  });

  //三角形の面積
  //コンソール上で入力できるのはjs６？
  function triarea(width,height) {
    var area=(width*height)/2;
    console.log('底辺が'+width+'高さが'+height+'の三角形の面積は'+area);
  }
  triarea(3,4);

  //制作実績画像の横幅を600pxに
  $('#bigimg_btn').on('click',function(){
    $('#sec4 .portfolio img').css("width", "600px");
  });

  //制作実績画像を変える
$('#changeimg_btn').on('click',function(){
    $('#sec4 .portfolio img').attr('src','./img/photo_01.png');
});

  // 3つのブロックエリアflexとの上手な付き合い方の下に「エリア追加」ボタンを設置し、ボタンクリック時、flex_areaというクラスの中に、全く同じブロックエリアを1つ、追加してください。
  // 縦３列を維持すること
  function appendFlex() {
    var add_contents = '<div class="flex_area_padding flex_area_content"><h2>flexを使って左から詰めていく</h2><p>ここにflexに関してのテキストが入りますここにflexに関してのテキストが入ります ここにflexに関してのテキストが入りますここにflexに関してのテキストが入りますここにflexに関してのテキストが入りますここにflexに関してのテキストが入ります ここにflexに関してのテキストが入りますここにflexに関してのテキストが入ります</p></div>';
    // var appendedDiv = $('.flex_area_padding').last().clone(); // これでもできる
    $('.flex_area').append(add_contents);
  }
    
  $('#addflex_btn').on('click',function(){
    appendFlex();
  });

  // 入力フォームに入力された数追加する
  // もし文字列型&１〜１０以外の整数&小数が入力された時、警告文を表示すること。
  // もし１〜１０の整数が入力された場合、警告文を非表示にすること。
  // 入力フォームをクリックした際、イベントをキャンセルしてページ最上部への移動を防ぐ

  $("#copyflex_btn").on("click", function (e) {
    // イベントをキャンセルしてページ最上部への移動を防ぐ
    e.preventDefault();
    // 入力フォームの値を取得
    var copyflex_form = $('#copyflex_form').val();
    // 入力フォームから入力された値は「文字列型」
    console.log(typeof copyflex_form);
    // 入力されたものは「文字列型」なので「数値型」に型変換
    copyflex_form = Number(copyflex_form);
    console.log(typeof copyflex_form);

    // 参考サイト https://joyplot.com/documents/2017/07/26/javascript-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0-%E6%95%B0%E5%80%A4-%E5%8F%96%E5%BE%97/


    if (copyflex_form > 0 && copyflex_form < 11 && Number.isInteger(copyflex_form)) {
        console.log("1~10までの整数です")
        for (var i = 0; i < copyflex_form; i++) {
            appendFlex();
        }
        $("#attention").css("display", "none");
    } else {
        console.log("文字列または0または11以上の整数または小数です")
        $("#attention").css("display", "block");
    }


  });

  //チャット追加

  function addChat(chatText) {
    var chatContent = '<p class="chatContent">' + chatText + '</p>'
    $("#chatBox").append(chatContent);
  }

  // "送信する" というボタンが押されたときに
  $("#addChat").on("click", function (e) {

    // イベントをキャンセルしてページ最上部への移動を防ぐ
    e.preventDefault();

    // 入力フォームの値を取得
    var chatText = $("#chatForm").val();

    // 入力されたテキスト何も無い or 半角・全角スペースのみだった場合
    if (chatText.match(/^[ 　\r\n\t]*$/)) { // 参考サイト https://techmemo.biz/javascript/form-spaceonly-denial/
        // 正規表現 で検索してみよう！ 
        console.log("何か入力してください")
    }
    // テキストのみが正しく入力された場合
    else {
        addChat(chatText);
        $("#chatWrap").scrollTop($("#chatWrap")[0].scrollHeight); // 参考サイト http://www.koikikukan.com/archives/2014/10/30-013333.php

        // 送信されたら入力されたテキストを空欄にする
        $("#chatForm").val(""); // 参考サイト https://code-examples-ja.hateblo.jp/entry/2014/07/18/jQuery_%7C_%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9%E3%81%AB%E5%85%A5%E3%82%8C%E3%81%9F%E5%80%A4%E3%82%92%E3%82%AF%E3%83%AA%E3%82%A2%E3%81%99%E3%82%8B
    }
  });



});//この中にjs,jquery全部書く
