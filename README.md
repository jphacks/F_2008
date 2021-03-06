# Terminal-RPG

![IMAGE ALT TEXT HERE](https://user-images.githubusercontent.com/61449596/98368730-25ab9480-207b-11eb-9010-fbeb7486146c.png)

<h1>製品概要</h1>
    <p>覚えてみると簡単だけど最初はとっつきにくいUNIXコマンドをゲーム感覚で知ってもらう、プログラミング初学者に向けたwebアプリケーションです。</p>
<a href="https://github.com/jphacks/F_2008">
  <button type="button">Terminal-RPG(github)</button>
</a></br>
<a href="https://terminalrpg.web.app/">
  <button type="button">Terminal-RPG(ゲーム)</button>
</a>

<h2>背景(製品開発のきっかけ、課題等）</h2>
  <h3>誰に向けたwebアプリケーション？</h3>
    <p>プログラミングを始めたときを思い出してみてください。</p>
    <p>かっこいいけど、なんとなくCUIに苦手意識が最初あった人も多いと思います。</p>
    <p>CUIが取っつきにくくてよく分からない...</p>
    <p>そんな人にTerminal-RPG!!</p>
  <h3>Terminal-RPG開発のきっかけ</h3>
    <p>開発者の中のひとりに、プログラミング学習を初めたときに、CUI操作で環境構築を行うときに挫折した経験があり、CUI操作習得に関して問題意識がありました。</p>
    <p>その問題を解決するために、初心者にとっても習得しやすいコンテンツはなにか、考えたところ、RPGゲームへと行き着きました。</p>
    <p>これがRPGゲームとターミナルのUNIX操作を融合した本製品TerminalRPG開発のきっかけです。</p>
    <br>
    <br>
    <p>大学の研究室に入ってからや、プログラミング学習を始めたときUNIXコマンドを使う場面が多く、初めて触る人にとっては「なんじゃこりゃ？？」になって簡単便利なのにCUI操作に苦手意識を持ちかねない。</p>
    <p>CUIを使わないなんてもったいない！！、そんな苦手意識や難しく感じることを払拭したい！！という思いからTerminal-RPGを開発しています。。</p>
  <h3>課題</h3>
  <ol>
    <li>プログラミング初心者や未学習者は非常に早い段階から環境構築などでCUIにふれる機会があるが、コマンドなどを習得する機会は少ない</li>
    <li></li>
    <li>ゲーム感覚でターミナルに触れてコマンドに対するイメージを柔らかくする</li>
    <li>実際にコマンドを覚えて端末で使ってもらいCUIの利便性を知ってもらう/li>
  </ol>

<h2>製品説明（具体的な製品の説明）</h2>
    <p>プログラマが日常的に使うUNIXコマンド、これと親しみやすいRPGゲームを融合させた、全く新しいコンセプトの教育コンテンツです</p>
    <p>Terminal-RPGで使うコマンドは実際のUNIXコマンドの機能に近づけており、まずはTerminal-RPGを通してコマンドの機能を直観的に理解してもらうことで、実際の端末でコマンドを扱う際にコマンドの理解を早めることができます。</p>
    <img src='https://github.com/jphacks/F_2008/blob/master/preview.png'>

<h2>特長</h2>
<ul>
  <li>1. 特長1：<br>教育：CUIを知らない子供でも遊べる（知らぬ間にCUIやってた！！）</li>
    
  <li>2. 特長2：<br>初学者にむけて：お堅く感じていたコマンドのイメージを払拭でき、CUIへの学習の第一歩となる</li>
  
</ul>

<h2>解決出来ること</h2>
  <p>CUIがわからなくってプログラミングのモチベーションがさがって環境構築とプログラミング習得を諦めてしまう...なんてことを防ぐことができる</p>

<h2>今後の展望</h2>
  <p>sshやscp,viなどのコマンドの種類を増やす</p>
  <p>ファイルの編集などもできようにする</p>
  <p>unityなどを使って同じコンセプトで３Dゲームを作る</p>
  <p>プログラミング教育コンテンツと提携してこのゲームをUNIX操作の導入としてもらう</p>
  <p>コンセプトをそのままに、より動的なものなど、新たなゲームデザインでゲームを開発する</p>

<h2>注力したこと（こだわり、頑張ったこと）</h2>
<ul>
    <li>コマンドの操作をゲームの画面に表示することで視覚的にわかりやすくすることを意識した</li>
    <li>Terminalを構成するライブラリを<b>一切使わず</b>UI、機能の両面でターミナルを再現できるように努力した</li>
    <li>教育へのつながりを意識し、Terminal-RPGで使うコマンドを実際のUNIXコマンドの使用感に可能な限り近づけるようにUIやゲームデザインの設計を行った。</li>
    <li>スーパーファミコンなどのレトロゲーム風のデザインを作るコンセプトで素材選択、配置、フォントなどに注力していた</li>
    <li>全体認識（RPG画面のドット絵）を常に共有し続けて全員同じ認識を持っていた</li>
</ul>

<h2>開発技術</h2>
<h3>活用した技術</h3>
<ul>
    <li>Firebase</li>
</ul>
<h4>フレームワーク<h4>
<ul>
    <li>Vue.js</li>
</ul>
    
### 独自技術
#### ハッカソンで開発した独自機能・技術
* 従来のターミナルとRPGを融合し、ターミナルからUNIXコマンドを使ってRPGのゲームを操作するという機能を開発した

#### 製品に取り入れた研究内容（データ・ソフトウェアなど）（※アカデミック部門の場合のみ提出必須）
* 
* 

--
## セットアップ

package.json に書かれているライブラリを一括で読み込む

```
npm install
```

## ライブラリのインストール

```
npm install ライブラリー名
```

### ローカルでテストサーバーを立ち上げる

```
yarn serve
```
