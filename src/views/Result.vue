<template>

<h1 class="sample">
  {{ usedCommands }}
</h1>
<div class="resultBackground">
  <div v-show="isWin" class="TheResult">
    <div class="resultTop">
    <span class="resultTopMessage">
    <h1>Conguratulations!!</h1>
    <h1>You Win!</h1>
    </span>
    <br>
    <p>おめでとうございます！<br>このゲームのコマンドはMacOSやLinuxOSを操作する<br>「ターミナル」のコマンドに基づいています</p>
    <p>このゲームで使ったコマンドは、きっと実際のターミナルでも<br>使うことができるでしょう。</p>
    </div>
    <div class="resultText">
    <br>
    </div>
    <p>あなたはこのゲームを通して、以下のターミナル、Linuxコマンドが使えるようになりました!</p>
    <div v-for="usedCommand in usedCommands" v-bind:key="usedCommand">
      <p>------------------------------------------</p>
      <p>{{ usedCommand }}: {{ resultDescription[usedCommand] }}</p>
    </div> 
  </div>
  <div v-show="!isWin" class="TheResult">
    <div class="resultTop">
    <span class="resultTopMessage">
    <h1>You Lose!</h1>
    </span>
    <br>
    <p>残念ながらあなたは負けてしまいました。</p>
    <p>気が向いたら、次のコマンドを使って<br>再チャレンジしてくださいね！</p>
    </div>
    <div class="resultText">
    <br>
    <div v-for="defeatDescription in defeatDescriptions" v-bind:key="defeatDescription">
      <div v-show="unUsedCommands.includes(defeatDescription.name)">
    <p>--------------------------</p>
      <p>
        コマンド: {{ defeatDescription.name }}<br />
        {{ defeatDescription.comment }}<br />
        例: {{ defeatDescription.example }}<br />
      </p>
      </div>
    </div>
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
      allCommands:['cd', 'ls', 'source', 'rm', 'touch', 'mkdir'],
      usedCommands: ['cd', 'ls', 'touch', 'rm', 'source'],
      unUsedCommands: ['cd', 'ls', 'source', 'rm', 'touch', 'mkdir'],
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
        {
          name: 'touch',
          comment: '指定した武器を生成する事ができます　生成できる武器はgun, spear, sword, rock, hummer, stickのいずれかで、すでに存在するものは生成できません',
          example: 'touch gun'
        },
      ],
    }
  },
  created() {    
    this.usedCommands = this.$route.query.usedCommandsArray
  },
  methods: {
    judgeUnusedCommands: function() {
      let unUsed = []
      for  (let arg in this.allCommands) {
        if (!this.usedCommands.includes(arg)){
          this.unUsed.push(arg)
        }
      }
      return unUsed
    },
  }
}

</script>
<style>
.sample{
  color: red;
}
.resultBackground {
  padding-top:40px;
  width: 100%;
  min-height: 100vh;
  background: #181a1b;
}
.resultTop {
  text-align: center;
}
.resultTopMessage {
  font-size:20px;
}
.resultText {
  text-align: left;
}
.TheResult {
  max-width: 600px;
  height: auto;
  margin: auto;
  padding: 35px;
  background: black;
  border: 2px solid white;
  border-radius: 4px;
  overflow: auto;
}

.TheResult > * {
  color: white;
}
.sample{
  color: red;
}
</style>
