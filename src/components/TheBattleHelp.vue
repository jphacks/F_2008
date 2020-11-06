<template>
  <div class="battleHelp">
    <!-- <h3>ゲーム説明</h3><br>
    <p>{{ description }}</p><br> -->
    <h3>コマンド説明</h3>
    <br />
    <p>--------------------------</p>
    <div v-for="command in commands" v-bind:key="command">
      <p>
        コマンド: {{ command.name }}<br />
        {{ command.comment }}<br />
        例: {{ command.example }}<br />
        --------------------------
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'battleHelp',
  data() {
    return {
      commands: [
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
          comment:
            '武器(sword, rock, stick, hummer, gun, spear)の生成ができる',
          example: 'touch sword'
        },
      ],
      //ないほうが見通しがいいような気もする
      description:
        'このゲームは様々なコマンドを使って敵の攻撃を避けたり、敵を攻撃したりして遊ぶゲームです。自分のHPが亡くなったら敗北、敵のHPを0にしたら勝ちです。頑張ってください！',
    }
  },
  components: {},
  methods: {},
}
</script>
<style>
.battleHelp {
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

.battleHelp > * {
  color: white;
}
</style>
