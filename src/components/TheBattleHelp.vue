<template>
<p>help me!!!</p>>
</template>
<script>
export default {
    name: 'battleHelp',
    data() {
        return {
            commands:{
                cd:{
                    comment:'自分が今いる位置を移動します',
                    example:'cd left'
                },
                ls:{
                    comment:'自分がいる場所にあるものを表示します',
                    example:'ls',
                },
                rm:{
                    comment:'敵の攻撃です、場所を指定して攻撃がきて、攻撃された場所に存在する武器は消去されます',
                    example:'敵の攻撃です プレイヤーが使うことはできません'
                },
                source: {
                    comment:'自分がいる位置に存在している武器を使い、敵を攻撃することができます。<br> 自分の位置にある武器は,lsで確認できます。',
                    example:'source sword'
                },
                mkdir: {
                    comment: '自分がいる位置にフォルダを作る事ができます。~（一番上の階層のフォルダの名前）の下にフォルダを作ることで、<br>敵の攻撃が当たる可能性を低くできるかも...',
                    example: 'mkdir hoge'
                }

            }
        }
    },
    components: {

    },
    methods: {

    }
}
</script>