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
    //画像クリック時発火
    let img_name = e.target.getAttribute("id");//画像ファイル名取得
    let img_number = String(img_name).substring(3);//一番最後の数字を切り出し
    if (img_number == answer) {
        //画像番号がanswerと一致すれば
        alert("正解！！！");
    } else {
        alert("不正解！")
    }
}

function display_img() {
    let data_set_num = set;//set変数に入っている値を取得
    let data_size = data.length;//dataセットの数
    set = (set + 1) % data_size;//{set変数の値に1足した数}を{dataセットの数}で割った時のあまりを新たにセット。(これでdisplay_img()を呼び出すごとに0,1,2,0,1,2...と繰り返し代入される)

    let question = document.getElementById("question");//idがquestionのタグを取得する
    question.innerHTML = `${data[data_set_num].QUESTION}を選べ！`;//問題文を設定する

    answer = data[data_set_num].ANSWER;//answer変数にANSWERを格納

    let img_list = document.querySelectorAll("img");//html内のすべてのimageタグを取得する
    for (let j = 0; j < img_list.length; j++) {
        //すべてimageタグ
        img_list[j].addEventListener('click', clickListener);//「画像をクリックしたら，clickListener関数が発火する」というイベントを追加
    }

    for (let i = 1; i <= 6; i++) {
        //i=1から6まで繰り返す
        let img = document.getElementById(`img${i}`);//idがimg{i}のタグを取得する
        img.src = `img/${data[data_set_num].DIR}/img${i}.png`;//imgタグのソースを設定する
    }
}