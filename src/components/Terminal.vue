<template>
  <!-- Note: テスト機能 -->
  <!-- <button v-on:click="runCommand">runCommand</button>
  <p>parentbossHP:{{ $parent.num }}</p>
  <p>myHp: {{ $parent.myHp }}</p>
  <p>currentDir:{{ $parent.currentPathForDisplay[$parent.currentDir] }}$</p>
  <p>{{ textInput }}</p> -->

  <!-- Note: 実際の機能 -->
  <div class="terminal">
    <div v-for="outputLine in outputLines" v-bind:key="outputLine">
      {{ outputLine }}
    </div>
    <div class="inputField">
      <span>{{ $parent.currentPathForDisplay[$parent.currentDir] }}$</span>
      <input
        type="text"
        v-model="textInput"
        v-bind:disabled="this.$parent.isEnemyTurn"
        v-on:keydown.enter.exact.prevent
        v-on:keyup.enter.exact="runCommand"
      />
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'terminal',
  data() {
    return {
      textInput: '',
      outputLines: [
        // 'ここに',
        // 'Terminalの画面に流す',
        // 'Textを表示していく',
        // 'あなたのターンです',
      ],
      outputLinesMaxLimit: 10,
    }
  },
  components: {
    // HelloWorld
  },
  methods: {
    updateLines(newLine) {
      //端末の出力を書き換えたい時はこれを使う実行する
      //今までのconsole.logをこれに変えれば画面内に表示できる
      if (this.outputLines.length == this.outputLinesMaxLimit) {
        this.outputLines.shift()
      }
      this.outputLines.push(newLine)
    },
    parseCommand(textInput) {
      // テキスト入力をスペースで区切って配列に変換する
      // 関数の引数とかにアクセスしやすいように
      // runCommandメソッド直下で実行
      console.log('parseSTART:', textInput)
      var parsedCommandsArray = textInput.split(/[\s]+/)
      console.log('parseEND:', textInput)
      return parsedCommandsArray
    },
    runCommand() {
      var parsedCommandsArray = this.parseCommand(this.textInput)
      console.log(parsedCommandsArray)
      this.updateLines(this.textInput)
      var commandKind = parsedCommandsArray[0]
      if (parsedCommandsArray.length >= 2) {
        var commandArg = parsedCommandsArray[1]
      }
      console.log(commandKind);
      this.textInput = ''
      switch(commandKind){
        case 'source':
          this.source(commandArg)
          this.checkIfContinue()
          break
        case 'ls':
          this.ls()
          this.checkIfContinue()
          break
        case 'cd':
          this.cd(commandArg)
          this.checkIfContinue()
          break
        case 'rm':
          this.rm()
          this.checkIfContinue()
          break
        case 'mkdir':
          this.mkdir(commandArg)
          this.checkIfContinue()
          break
        default:
          this.updateLines(`command ${this.textInput} not found`)
          console.log(`command ${this.textInput} not found`)
      }
    },
    source(commandArg) {
      if (this.$parent.isEnemyTurn === false) {
        let sourceDir = this.$parent.currentDir
        if (commandArg in this.$parent.armsPosition[sourceDir]) {
          let armsDamage = this.$parent.armsPosition[sourceDir][commandArg]
          this.$parent.num -= armsDamage
          this.updateLines(`${commandArg}を使った`)
          this.updateLines(`bossに${armsDamage}のダメージ`)
          this.$parent.turnContinue = false
        } else {
          this.updateLines(
            '現在のファイルには指定した武器ファイルが存在しません'
          )
          console.log('現在のファイルには指定した武器ファイルが存在しません')
        }
      } else if (this.$parent.isEnemyTurn === true) {
        console.log('your turn has not come yet')
      } else {
        console.log('isEnemyTurn typeerror')
        console.log(this.$parent.isEnemyTurn)
      }
      this.$parent.turnContinue = false
    },
    mkdir(dirName) {
      //FIX同名の場合はバグる
      this.$parent.nextDirs[this.$parent.currentDir].push(dirName)
    },

    cd(strPath) {
      if (strPath === '') {
        this.$parent.currentDir = '~'
      } else if (typeof strPath === 'undefined') {
        this.$parent.currentDir = '~'
      } else if (strPath === '.') {
        return
      } else if (strPath === '..') {
        this.$parent.currentDir = this.$parent.parentDir[
          this.$parent.currentDir
        ]
      } else {
        //今いるディレクトリにつながっているディレクトリを全てチェックしている
        for (
          var i = 0;
          i < this.$parent.linkedDirs[this.$parent.currentDir].length;
          i++
        ) {
          console.log(this.$parent.linkedDirs[this.$parent.currentDir][i])
          if (this.$parent.linkedDirs[this.$parent.currentDir][i] === strPath) {
            this.$parent.currentDir = strPath
            this.updateLines(strPath)
            return
          }
        }
        this.updateLines('such a directory does not exist')
      }
      this.$parent.turnContinue = true
    },
    //コマンドが実行されるたびに続けるか判断
    checkIfContinue() {
      if (this.$parent.turnContinue === false) {
        this.changeTurnToEnemy()
      }
    },
    changeTurnToEnemy() {
      if (this.$parent.num <= 0) {
        this.$parent.num = 0
        this.updateLines('あなたの勝利です!')
      } else if (this.$parent.num > 0) {
        this.updateLines('Bossのターンです')
        this.$parent.isEnemyTurn = true
        setTimeout(this.enemyTurn, 1000)
      } else {
        console.log('changeTurnToEnemyがエラーを吐いています')
      }
    },
    //敵のターンにする処理はこの中に入れる
    enemyTurn() {
      if (this.$parent.isEnemyTurn == true) {
        this.rm()
        this.changeTurnToPlayer()
      }
    },
    rm() {
      //~が攻撃される確率をへらすためにrmPositionnにright とleftを増やしています
      let rmPosition = ['~', 'right', 'right', 'right', 'left', 'left', 'left']
      let bossRmDamage = 200
      if (this.$parent.isEnemyTurn === true) {
        let whichToRm =
          rmPosition[Math.floor(Math.random() * rmPosition.length)]
        this.updateLines(`Bossは'${whichToRm}'以下のフォルダを攻撃した！`)
        if (whichToRm == '~') {
          this.updateLines(`playerに${bossRmDamage}のダメージ！`)
          console.log(`playerに${bossRmDamage}のダメージ！`)
        } else if (whichToRm == this.$parent.currentDir) {
          this.$parent.myHp -= bossRmDamage
          this.updateLines(`playerに${bossRmDamage}のダメージ！`)
          console.logs(`playerに${bossRmDamage}のダメージ！`)
        } else {
          this.updateLines('Bossの攻撃は外れた！')
        }
      } else if (this.$parent.isEnemyTurn === false) {
        console.log('isEnemyTurn boolean error turn is not enemyTurn')
      } else {
        console.log('isEnemyTurn type error')
      }
    },
    changeTurnToPlayer() {
      if (this.$parent.myHp <= 0) {
        this.$parent.myHp = 0
        this.updateLines('あなたの敗北です')
      } else if (this.$parent.myHp > 0) {
        this.updateLines('あなたのターンです')
        this.$parent.isEnemyTurn = false
      }
    },

    ls() {
      let childArray = this.$parent.nextDirs[this.$parent.currentDir]
      for (let i = 0; i < childArray.length; i++) {
        this.updateLines(childArray[i])
      }
      this.updateLines(this.$parent.armsPosition[this.$parent.currentDir])
      console.log(this.$parent.nextDirs[this.$parent.currentDir])
      this.$parent.turnContinue = true
    },
  },
}
</script>

<style>
.terminal {
  max-width: 700px;
  height: 250px;
  margin: auto;
  padding: 4px;
  background: black;
  border: 2px solid white;
  border-radius: 4px;
  text-align: left;
  overflow: auto;
}
.terminal > * {
  color: white;
}
.inputField > input {
  background: none;
  color: white;
  outline: 0;
  border: none;
}
.inputField > span {
  color: aqua;
}
</style>
