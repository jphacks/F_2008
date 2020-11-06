<template>
  <div v-show="isWin" class="TheResult">
    <div class="resultTitle">
    <h1>Conguratulations!!</h1>
    <h1>You Win!</h1>
    <br>
    </div>
    <div class="resultText">
    <p>おめでとうございます！<br>このゲームのコマンドはMacOSやLinuxOSを操作する「ターミナル」のコマンドに基づいています</p>
    <p>
      このゲームで使ったコマンドは、きっと実際のターミナルでも使うことができるでしょう。
    </p>
    <br>
    </div>
    <p>あなたはこのゲームを通して、以下のターミナル、Linuxコマンドが使えるようになりました!</p>
    <p>------------------------------------------</p>
    <div v-for="resultCommand in resultCommands" v-bind:key="resultCommand">
      <p>{{ resultCommand }}: {{ resultDescription[resultCommand] }}</p>
      <p>------------------------------------------</p>
    </div> 
  </div>
  <div v-show="!isWin" class="TheResult">
    <div class="resultTitle">
    <h1>You Lose!</h1>
    <br>
    <p>残念ながらあなたは負けてしまいました。</p>
    <p>気が向いたら、次のコマンドを使って<br>再チャレンジしてくださいね！</p>
    </div>
    <div class="resultText">
    <br>
    <p>--------------------------</p>
    <div v-for="defeatDescription in defeatDescriptions" v-bind:key="defeatDescription">
      <p>
        コマンド: {{ defeatDescription.name }}<br />
        {{ defeatDescription.comment }}<br />
        例: {{ defeatDescription.example }}<br />
        --------------------------
      </p>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TheResult',
  data() {
    return {
      isWin:true,
      resultCommands: ['cd', 'ls', 'touch', 'rm', 'source'],
      resultDescription: {
        cd: '特定のフォルダに移動する',
        rm: '指定したフォルダやファイルを削除する',
        ls: 'フォルダの内容をリスト形式で表示する',
        touch: '新規ファイルを作成する',
        mkdir: '新規フォルダを作成する',
        source: 'ファイルからコマンドを読み込んでターミナルで実行する',
      },
      defeatDescriptions: [
        {
          name: 'cd',
          comment: '自分が今いる位置から、指定した位置に移動します',
          example: 'cd left',
        },
        {
          name: 'ls',
          comment: '自分がいる場所にある武器やものを表示します',
          example: 'ls',
        },
        {
          name: 'source',
          comment:
            '自分がいる位置に存在している武器を使い、敵を攻撃することができます。自分の位置にある武器は,lsで確認できます。',
          example: 'source sword',
        },
        {
          name: 'rm',
          comment:
            '敵の攻撃です。3つ場所、left, right, ~(真ん中)のどれかが攻撃され、攻撃された場所の武器はなくなります',
          example: 'プレイヤーが使うことはできません',
        },
        {
          name: 'mkdir',
          comment:
            '自分がいる位置にフォルダを作る事ができます。~（一番上の階層のフォルダの名前）の下にフォルダを作ることで、敵の攻撃が当たる可能性を低くできるかも...',
          example: 'mkdir hoge',
        },
      ],
    }
  },
}
</script>
<style>
.resultTitle {
  text-align: center;
}
.resultText {
  text-align: left;
}
.TheResult {
  max-width: 400px;
  height: auto;
  margin: auto;
  padding: 8px;
  background: black;
  border: 2px solid white;
  border-radius: 4px;
  overflow: auto;
}

.TheResult > * {
  color: white;
}

.TheDefeat {
  max-width: 400px;
  height: auto;
  margin: auto;
  padding: 4px;
  background: black;
  border: 2px solid white;
  border-radius: 4px;
  text-align: left;
  overflow: auto;
}

.TheDefeat > * {
  color: white;
}
</style>
