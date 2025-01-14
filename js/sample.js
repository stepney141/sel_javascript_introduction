let answer = "";
let pagination_id = 0;
let quiz_metadata = [{
        QUESTION: "フンボルトペンギン",
        DIR: "penguin",
        ANSWER: "6"
    },
    {
        QUESTION: "カーネーション",
        DIR: "flower",
        ANSWER: "5"
    },
    {
        QUESTION: "ガボン共和国",
        DIR: "flag",
        ANSWER: "2"
    }
];

function clickListener(e) {
    //クイズ画像をクリックすると実行される
    //クリックされた画像番号が answer と同じなら「正解!!!」、そうでなければ「不正解!」と表示する

    //各画像の id の最後の文字が、画像番号に対応しているため、その画像番号を抜き出す。
    let img_name = e.target.getAttribute("id"); //画像ファイル名取得
    let img_number = img_name.substring(3); //一番最後の数字を切り出し

    //画像番号が正解の番号と一致しているかを確認する
    if (img_number === answer) {
        //画像番号が answer と一致すれば
        alert("正解!!!");
    } else {
        alert("不正解!");
    }
}

function set_quiz() {
    //出題するクイズの番号を取得し、次のクイズ番号をセットする
    let current_quiz_id = pagination_id;
    pagination_id = (current_quiz_id + 1) % quiz_metadata.length;

    //問題文を表示する
    let question_dom = document.getElementById("question");
    let question_text = quiz_metadata[current_quiz_id].QUESTION;
    question_dom.innerHTML = question_text + "を選べ!";

    //データから答えを取得する
    answer = quiz_metadata[current_quiz_id].ANSWER;

    //クイズ画像を表示する
    //すべての画像に対して、「クリックしたら clickListener 関数が実行される」ように設定する
    for (let i = 1; i <= 6; i++) {
        //i=1 から 6 まで繰り返す
        let img = document.getElementById(`img${i}`); //id が img{i} になっているタグを取得する
        img.src = `img/${quiz_metadata[current_quiz_id].DIR}/img${i}.png`; //imgタグのソースを設定する
        img.addEventListener("click", clickListener);
    }
}

document.getElementById("set_quiz").addEventListener("click", set_quiz);
