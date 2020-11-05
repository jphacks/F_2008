<template>
<p>help me!!!</p>>
<div class="battleHelp">
    <h2>コマンド説明</h2><br>
    <br>
    <div v-for="command in commands" 
        v-bind:key="command">
            コマンド: {{ command.name }}<br>
            {{ command.comment }}<br>
            例:{{ command.example }}<br>
            ----------------------------
            
    </div>
</div>
</template>


<script>
export default {
    name: 'battleHelp',
    data() {
        return {
            commands:[
                {
                    name:'cd',
                    comment:'自分が今いる位置を移動します',
                    example:'cd left'
                },
                {
                    name:'ls',
                    comment:'自分がいる場所にあるものを表示します',
                    example:'ls',
                },
                {
                    name:'rm',
                    comment:'敵の攻撃です、場所を指定して攻撃がきて、攻撃された場所に存在する武器は消去されます',
                    example:'敵の攻撃です プレイヤーが使うことはできません'
                },
                {
                    name:'source',
                    comment:'自分がいる位置に存在している武器を使い、敵を攻撃することができます。自分の位置にある武器は,lsで確認できます。',
                    example:'source sword'
                },
                {
                    name:'mkdir',
                    comment: '自分がいる位置にフォルダを作る事ができます。~（一番上の階層のフォルダの名前）の下にフォルダを作ることで、敵の攻撃が当たる可能性を低くできるかも...',
                    example: 'mkdir hoge'
                }

            ]
        }
    },
    components: {

    },
    methods: {

    }
}
</script>
<style>
.battleHelp {
  max-width: 400px;
  height:auto;
  margin: auto;
  padding: 4px;
  background: black;
  border: 2px solid white;
  border-radius: 4px;
  text-align: left;
  overflow: auto;
}

.battleHelp > * {
    color:white;
}


</style>