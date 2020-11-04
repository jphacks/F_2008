<template>
  <h1>Terminal</h1>
  <p>parentbossHP:{{$parent.num}}</p>
  <p>myHp: {{$parent.myHp}}</p>
  <p>currentDir:{{$parent.currentPathForDisplay[$parent.currentDir]}}$</p>
  <p>{{textInput}}</p>
  <div v-for="(outputLine) in outputLines" v-bind:key="outputLine">{{outputLine}}</div>
  <input type="text"
  v-model="textInput"
  v-bind:disabled="this.isEnemyTurn"
  v-on:keydown.enter.exact.prevent
  v-on:keyup.enter.exact="runCommand"
  >
  <button v-on:click="runCommand">runCommand</button>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "terminal",
  data() {
      return {
          textInput: '',
          outputLines: ['ここに','Terminalの画面に流す','Textを表示していく', 'あなたのターンです'],
          outputLinesMaxLimit:10
      }
  },
  components: {
    // HelloWorld
  },
  methods: {
    updateLines(newLine){
    //端末の出力を書き換えたい時はこれを使う実行する
    //今までのconsole.logをこれに変えれば画面内に表示できる
      if (this.outputLines.length == this.outputLinesMaxLimit){
        this.outputLines.shift()
      }
      this.outputLines.push(newLine);

    },
    parseCommand(textInput){
      // テキスト入力をスペースで区切って配列に変換する
      // 関数の引数とかにアクセスしやすいように
      // runCommandメソッド直下で実行
      console.log("parseSTART:",textInput);
      var parsedCommandsArray = textInput.split(/[\s]+/);
      console.log("parseEND:",textInput)
      return parsedCommandsArray
    },
    runCommand() {
      var parsedCommandsArray = this.parseCommand(this.textInput);
      console.log(parsedCommandsArray);
      this.updateLines(this.textInput)
      var commandKind = parsedCommandsArray[0];
      if (parsedCommandsArray.length >= 2){
        var commandArg = parsedCommandsArray[1];
      }
      console.log(commandKind);
      switch(commandKind){
        case 'attack':
          this.attack();
          this.checkIfContinue();
          break
        case 'ls':
          this.ls();
          this.checkIfContinue();
          break
        case 'cd':
          this.cd(commandArg);
          this.checkIfContinue();
          break
        case 'rm':
          this.rm();
          this.checkIfContinue();
          break
        default:
          this.updateLines(`command ${this.textInput} not found`);
          console.log(`command ${this.textInput} not found`);
      }
    },
    attack() {
      if (this.$parent.isEnemyTurn === false){
        this.$parent.num -= 200;
        this.updateLines('bossに200のダメージ');
        this.$parent.turnContinue = false;
      }
      else if(this.isEnemyTurn === true){
        console.log('your turn has not come yet')
      }
      else {
        console.log('isEnemyTurn typeerror')
      }
    },

    cd(strPath) {
      if(strPath === ''){
        this.$parent.currentDir = '~';
      }
      else if(typeof strPath === 'undefined'){
        this.$parent.currentDir = '~';
      }
      else if(strPath === '.'){
        return
      }
      else if (strPath === '..'){
        this.$parent.currentDir = this.$parent.parentDir[this.$parent.currentDir];
      }
      else{
        //今いるディレクトリにつながっているディレクトリを全てチェックしている
        for(var i = 0;i < this.$parent.linkedDirs[this.$parent.currentDir].length;i++){
          console.log(this.$parent.linkedDirs[this.$parent.currentDir][i])
          if (this.$parent.linkedDirs[this.$parent.currentDir][i] === strPath){
            this.$parent.currentDir = strPath;
            this.updateLines(strPath);
            return
          }
        }
        this.updateLines('such a directory does not exist')
      }
      this.$parent.turnContinue = true
    },
    //コマンドが実行されるたびに続けるか判断
    checkIfContinue() {
      if(this.$parent.turnContinue === false){
        this.changeTurnToEnemy();
      }
      },
    changeTurnToEnemy(){
      if(this.$parent.num <= 0){
        this.$parent.num = 0
        this.updateLines('あなたの勝利です!')

      }
      else if(this.$parent.num > 0){
        this.updateLines('Bossのターンです')
        this.$parent.isEnemyTurn = true;
        setTimeout(this.enemyTurn, 1000);
      }
      else {
        console.log('changeTurnToEnemyがエラーを吐いています')
      }
    },
    //敵のターンにする処理はこの中に入れる
    enemyTurn(){
      this.rm();
      this.changeTurnToPlayer();
    },
    rm() {
      //~が攻撃される確率をへらすためにrmPositionnにright とleftを増やしています
      let rmPosition = ['~', 'right', 'right', 'right', 'left', 'left', 'left']
      let bossRmDamage = 200;
      if (this.$parent.isEnemyTurn === true) {
        let whichToRm = rmPosition[Math.floor(Math.random() * rmPosition.length)]
        this.updateLines(`Bossは'${whichToRm}'以下のフォルダを攻撃した！`)
        if (whichToRm == '~') {
          this.updateLines(`playerに${bossRmDamage}のダメージ！`)
          console.logs(`playerに${bossRmDamage}のダメージ！`)
        }
        else if (whichToRm ==  this.$parent.currentDir) {
          this.$parent.myHp -= bossRmDamage;
          this.updateLines(`playerに${bossRmDamage}のダメージ！`)
          console.logs(`playerに${bossRmDamage}のダメージ！`)
        }
        else {
          this.updateLines('Bossの攻撃は外れた！')
        }

      }
      else if (this.$parent.isEnemyTurn === false) {
        console.log('isEnemyTurn boolean error turn is not enemyTurn');
      }
      else{
        console.log('isEnemyTurn type error');
      }
    },
    changeTurnToPlayer() {
      if(this.$parent.myHp <= 0) {
        this.$parent.myHp = 0;
        this.updateLines('あなたの敗北です')
      }
      else if(this.$parent.myHp > 0) {
        this.updateLines('あなたのターンです')
        this.$parent.isEnemyTurn = false;
      }
    },
    ls(){
      this.updateLines(this.$parent.nextDirs[this.$parent.currentDir])
      console.log(this.$parent.nextDirs[this.$parent.currentDir])
      
    }
  },
};
</script>

