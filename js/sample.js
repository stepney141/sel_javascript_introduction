let answer = "";
let set = 0;
let data = [{
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
    let img_number = String(img_name).substring(3); //一番最後の数字を切り出し

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
    let data_set_num = set; //set 変数に入っている値を取得
    let data_size = data.length; //data セットの数
    set = (data_set_num + 1) % data_size;

    //問題文を表示する
    let question = document.getElementById("question"); //id がquestion のタグを取得する
    let text = data[data_set_num].QUESTION; //データから問題文を取得
    question.innerHTML = text + "を選べ!"; //問題文を設定する

    //データから答えを取得する
    answer = data[data_set_num].ANSWER; //answer 変数に ANSWER を格納

    //クイズ画像を表示する
    //すべての画像に対して、「クリックしたら clickListener 関数が実行される」ように設定する
    for (let i = 1; i <= 6; i++) {
        //i=1 から 6 まで繰り返す
        let img = document.getElementById(`img${i}`); //id が img{i}のタグを取得する
        img.src = `img/${data[data_set_num].DIR}/img${i}.png`; //imgタグのソースを設定する
        img.addEventListener("click", clickListener);
    }
}

document.getElementById("set_quiz").addEventListener("click", set_quiz);
