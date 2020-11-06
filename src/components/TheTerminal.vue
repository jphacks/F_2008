<template>
  <button @click="goResultPage">go result</button>
  <div class="terminal">    
    <!-- Note: ログを表示するコンテイナー -->
    <div class="outputs-container">
      <template
        v-for="outputObject in this.outputObjects"
        v-bind:key="outputObject"
      >
        <div v-if="outputObject._inputCommand">
          <span class="output__dir">
            {{ $parent.currentPathForDisplay[outputObject._commandDir] }}$
          </span>
          <span>{{ outputObject._inputCommand }}</span>
        </div>

        <template v-if="outputObject._hasOutputLines">
          <p
            v-for="_outputline in outputObject._outputlines"
            v-bind:key="_outputline"
          >
            {{ _outputline }}
          </p>
        </template>
      </template>
    </div>
    <!-- Note:  入力関係をまとめたコンテイナー -->
    <div class="input-container">
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
export default {
  name: 'terminal',
  data() {
    return {
      textInput: '',
      usedCommandsArray: [], //ここに使ったコマンド群の文字列が格納されます
      outputObjects: [
        // {
        //   _inputCommand: 'inputだけだよ',
        //   _hasInputCommand: true,
        //   _commandDir: '~',
        //   _hasOutputLines: false,
        //   _outputlines: [],
        // },
        // {
        //   _inputCommand: '',
        //   _hasInputCommand: false,
        //   _commandDir: '~',
        //   _hasOutputLines: true,
        //   _outputlines: [
        //     '一行だと見にくいログ（敵の攻撃によるログ）は',
        //     'このように複数の行にまたがって',
        //     '描画していくよ',
        //   ],
        // },
        // {
        //   _inputCommand: 'ls',
        //   _hasInputCommand: true,
        //   _commandDir: '~',
        //   _hasOutputLines: true,
        //   _outputlines: ['left right center sword stick konna kanji nisuru'],
        // },
      ],
      outputLinesMaxLimit: 10,
    }
  },
  methods: {
    goResultPage() {
      this.$router.push({name: "Result", query: {  usedCommandsArray: this.usedCommandsArray}})
    },    
    updateLines(newLine) {
      //TODO これの追加先が配列outputLinesからLogObjectの末尾の配列に変わればok
      //端末の出力を書き換えたい時はこれを使う実行する
      let lastLogObject = this.outputObjects[this.outputObjects.length - 1]
      lastLogObject._outputlines.push(newLine)

      let overLinesNumofLastLog =
        lastLogObject.length - this.outputLinesMaxLimit
      for (let i = 0; i < overLinesNumofLastLog; i++) {
        lastLogObject._outputlines.shift()
      }
      //上までで書き換わった
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
    _pushUsedCommand(commandName) {
      this.updateLines(this.usedCommandsArray)
      if (this.usedCommandsArray.includes(commandName)) {
        return
      } else {
        this.usedCommandsArray.push(commandName)
      }
    },
    _utilRandomRangeInt(minInt, maxInt) {
      //ゲームバランス調整用
      //minInt以上maxInt未満の整数を等確率で返す
      return Math.floor(Math.random() * (maxInt - minInt) + minInt)
    },
    _arrayToOneLineString(Array) {
      //一行の文字列にする
      return Array.join(' ')
    },
    runCommand() {
      let newLogObject = {
        _inputCommand: '',
        _hasInputCommand: true,
        _commandDir: this.$parent.currentDir, //コマンド実行時パスが欲しい
        _hasOutputLines: true,
        _outputlines: [],
      }
      this.outputObjects.push(newLogObject) //コマンド実行を起点にそのログを入れるオブジェクトを配列に確保
      let lastLogObject = this.outputObjects[this.outputObjects.length - 1]
      var parsedCommandsArray = this.parseCommand(this.textInput)
      lastLogObject._hasInputCommand = true //入力コマンドがあるので
      lastLogObject._inputCommand = this._arrayToOneLineString(
        parsedCommandsArray
      ) //入力コマンドはここでログに格納
      console.log(parsedCommandsArray)
      var commandKind = parsedCommandsArray[0]
      if (parsedCommandsArray.length >= 2) {
        var commandArg = parsedCommandsArray[1]
      }
      console.log(commandKind)
      this.textInput = ''
      switch (commandKind) {
        case 'source':
          this.source(commandArg)
          this._pushUsedCommand(commandKind)
          this.checkIfContinue()
          break
        case 'touch':
          this.touch(commandArg)
          this._pushUsedCommand(commandKind)
          this.checkIfContinue()
          break
        case 'ls':
          this.ls()
          this._pushUsedCommand(commandKind)
          this.checkIfContinue()
          break
        case 'cd':
          this.cd(commandArg)
          this._pushUsedCommand(commandKind)
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
        case 'clear':
          this.outputObjects = []
          this.outputLines = []
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
    touch(weaponName) {
      if (!this.$parent.armsKind.includes(weaponName)) {
        this.updateLines(`武器${weaponName}は作れません`)
        //何なら作れますって言ってほしい
      } else if (
        weaponName in this.$parent.armsPosition[this.$parent.currentDir]
      ) {
        this.updateLines(`武器${weaponName}は既に存在しています`)
      } else if (
        Object.keys(this.$parent.armsPosition[this.$parent.currentDir])
          .length >= 4
      ) {
        this.updateLines(`武器は4つまでしか作れません`)
      } else {
        this.$parent.armsPosition[this.$parent.currentDir][
          weaponName
        ] = this._utilRandomRangeInt(10, 300)
        this.updateLines(this.$parent.armsPosition[this.$parent.currentDir])
        this.updateLines(`武器${weaponName}を作りました`)
        this.$parent.turnContinue = false
      }
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
        if (this.$parent.currentDir === 'home') {
          return
        } else {
          this.$parent.currentDir = this.$parent.parentDir[
            this.$parent.currentDir
          ]
        }
      } else {
        //今いるディレクトリにつながっているディレクトリを全てチェックしている
        for (
          var i = 0;
          i < this.$parent.linkedDirs[this.$parent.currentDir].length;
          i++
        ) {
          if (this.$parent.linkedDirs[this.$parent.currentDir][i] === strPath) {
            this.$parent.currentDir = strPath
            this.updateLines(`${this.$parent.currentDir}に移動しました`)
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
        //TODO ここで勝利ページへ移行
      } else if (this.$parent.num > 0) {
        //ここにログ追加
        let newLogObject = {
          _inputCommand: '',
          _hasInputCommand: false,
          _commandDir: '~',
          _hasOutputLines: true,
          _outputlines: [],
        }
        //ここから次の自分のコマンド実行までの敵のターン開始とそれに伴うログが追加されていく
        this.outputObjects.push(newLogObject)
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
      //let rmPosition = ['~','right','left']
      let rmIndex = this._utilRandomRangeInt(0, rmPosition.length)
      let bossRmDamage = this._utilRandomRangeInt(100, 300)
      let targetDir = rmPosition[rmIndex]
      this.updateLines(`Bossは'${targetDir}'以下のフォルダを攻撃した！`)
      if (targetDir == '~') {
        //全体攻撃
        this.updateLines(`playerに${bossRmDamage}のダメージ！`)
        this.updateLines('Bossによってすべての武器が削除された!')
        this.$parent.armsPosition['~'] = {}
        this.$parent.armsPosition['left'] = {}
        this.$parent.armsPosition['right'] = {}
      } else if (targetDir == this.$parent.currentDir) {
        //一部攻撃命中
        this.$parent.myHp -= bossRmDamage
        this.updateLines(`playerに${bossRmDamage}のダメージ！`)
        this.$parent.armsPosition[targetDir] = {}
        this.updateLines(`Bossによって${targetDir}の武器が削除された！`)
      } else {
        this.updateLines(`Bossの攻撃はプレイヤーには当たらなかった！`) //武器にのみ命中
        this.updateLines(`しかし${targetDir}の武器が破壊された!`)
        this.$parent.armsPosition[targetDir] = {}
      }

      if (this.$parent.isEnemyTurn == false) {
        this.updateLines('rmが敵のターンでないのに実行されてます')
      }
    },
    changeTurnToPlayer() {
      if (this.$parent.myHp <= 0) {
        this.$parent.myHp = 0
        this.updateLines('あなたの敗北です')
        //TODO ここで敗北ページへ移行
      } else if (this.$parent.myHp > 0) {
        this.updateLines('あなたのターンです')
        this.$parent.isEnemyTurn = false
      }
    },

    ls() {
      let childDirsArray = this.$parent.nextDirs[this.$parent.currentDir]
      this.updateLines(this._arrayToOneLineString(childDirsArray))
      this.updateLines(this.$parent.armsPosition[this.$parent.currentDir])
      this.$parent.turnContinue = true
    },
  },
}
</script>

<style lang="scss">
.terminal {
  max-width: 700px;
  height: 250px;
  margin: auto;
  padding: 4px;
  background: black;
  border: 2px solid white;
  border-radius: 4px;
  overflow: auto;
  * {
    color: white;
  }
  .outputs-container {
    .output__dir {
      color: aqua;
    }
  }
  .input-container {
    span {
      color: aqua;
    }
    input {
      background: none;
      color: white;
      outline: 0;
      border: none;
    }
  }
}
</style>
