let answer = "";
let set = 0;
let data = [
    {
        "QUESTION": "フンボルトペンギン",
        "DIR": "penguin",
        "ANSWER": "6"
    },
    {
        "QUESTION": "カーネーション",
        "DIR": "flower",
        "ANSWER": "5"
    },
    {
        "QUESTION": "ガボン共和国",
        "DIR": "flag",
        "ANSWER": "2"
    }
]

function clickListener(e) {
    //クイズ画像をクリックすると実行される
    //クリックされた画像番号がanswerと同じなら「正解！！！」、そうでなければ「不正解！」と表示する

    //各画像のidの最後の文字が、画像番号に対応しているため、その画像番号を抜き出す。
    let img_name = e.target.getAttribute("id");//画像ファイル名取得
    let img_number = String(img_name).substring(3);//一番最後の数字を切り出し

    //画像番号が正解の番号と一致しているかを確認する
    if (img_number == answer) {
        //画像番号がanswerと一致すれば
        alert("正解！！！");
    } else {
        alert("不正解！");
    }
}

function set_quiz() {

    //ボタンを次に押したときに表示されるクイズのデータを指定する
    let data_set_num = set;//set変数に入っている値を取得
    let data_size = data.length;//dataセットの数
    set = (set + 1) % data_size;//{set変数の値に1足した数}を{dataセットの数}で割った時のあまりを新たにセット。
    //(これでdisplay_img()を呼び出すごとに0,1,2,0,1,2...と繰り返し代入される)

    //問題文を表示する
    let question = document.getElementById("question");//idがquestionのタグを取得する
    let text = data[data_set_num].QUESTION;//データから問題文を取得
    question.innerHTML = text + 'を選べ！';//問題文を設定する

    //データから答えを取得する
    answer = data[data_set_num].ANSWER;//answer変数にANSWERを格納

    //クイズ画像を表示する
    //すべての画像に対して、「クリックしたらclickListener関数が実行される」ように設定する
    for (let i = 1; i <= 6; i++) {
        //i=1から6まで繰り返す
        let img = document.getElementById(`img${i}`);//idがimg{i}のタグを取得する
        img.src = `img/${data[data_set_num].DIR}/img${i}.png`;//imgタグのソースを設定する
        img.addEventListener('click', clickListener);//「画像をクリックしたら，clickListener関数が実行される」というイベントを追加
    }
}