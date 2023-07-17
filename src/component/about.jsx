
import React, { useState } from "react";

const About=()=>{

    return(
        <div className="aboutpage">
            <div className='textrey'>
                <h2>ABOUT</h2>
                <p>このwebサイトは、「webブラウザで体験できるタイポグラフィックなアート」をテーマに制作しました。<br></br>
                複数の文字を自由に配置し、文字のスタイルをカスタマイズできる文字遊びサイトです。
                </p>
                <h3>遊び方</h3>
                <p>
                ・「文字生成」ボタンまたは「削除」ボタンをクリックすると、文字を入力するフィールドが1つ追加/削除されます。<br></br>
                ・生成されたフィールドに文字を入力すると、キャンバス内に入力した文字が生成されます。<br></br>
                ・生成された文字はドラッグして位置を自由に移動できます。動かせる範囲はキャンバス内のみです。<br></br>
                ・サイト左側のパラメーターを使用して、生成した各文字のスタイルを変更することができます。
                </p>
                <h3>注意事項</h3>
                <p>
                ・フルスクリーンで遊ぶことをお勧めします。また、遊んでいる最中にウィンドウのサイズを変更すると、文字の位置がずれる場合があります。</p>
                <h3>サンプル</h3>
                <img style={{marginBottom:'30px'}} src='typosample2.png' alt="sample"></img>
                <img src='typosample.png' alt="sannple"></img>
                
            </div>
        </div>
    );

}
export default About;