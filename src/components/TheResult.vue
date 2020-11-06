<template>
  <div class="TheVictory">
    <h1>Conguratulation!</h1>
    <h2>You Win!!</h2>
    <p>
      おめでとうございます！このゲームのコマンドはMacOSやLinuxOSのコンピュータを操作する’ターミナル’のコマンドに基づいています
    </p>
    <p>
      このゲームで使ったコマンドは、きっと実際のターミナルでも使うことができるでしょう。
    </p>
    <p>あなたは、このゲームを通して、以下のコマンドが使えるようになりました!</p>
    <p v-for="resultCommand in resultCommands" v-bind:key="resultCommand">
      {{ resultCommand }}
    </p>
  </div>
  <div class="TheDefeat">
    <h1>You Lose!</h1>
    <p>残念ながらあなたは負けてしまいました。</p>
  </div>
</template>
<script>
export default {
  name: 'TheResult',
  data() {
    return {
      resultCommands: ['cd', 'ls', 'touch', 'rm', 'source'],
      resultDescription: {
        cd: '特定のフォルダに移動します',
        ls: 'フォルダの内容をリスト形式で表示します',
        touch: '新規ファイルを作成します',
        mkdir: '新規フォルダを作成します',
        source: 'ファイルからコマンドを読み込んでターミナルで実行します',
      },
    }
  },
}
</script>
<style>
.TheVictory {
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

.TheVictory > * {
  color: white;
}
</style>
