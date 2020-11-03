<template>
  <h1>Terminal</h1>
  <p>parentbossHP:{{$parent.num}}</p>
  <p>myHp: {{$parent.myHp}}</p>
  <p>currentDir:{{$parent.currentPathForDisplay[$parent.currentDir]}}$</p>
  <input type="text"
  v-model="textInput"
  v-bind:disabled="this.isEnemyTurn"
  v-on:keydown.enter.exact.prevent
  v-on:keyup.enter.exact="runCommand"
  >
  <button v-on:click="runCommand">runCommand</button>
  <p>{{textInput}}</p>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "terminal",
  data() {
      return {
          textInput: '',
      }
  },
  components: {
    // HelloWorld
  },
  methods: {
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
          console.log(`command ${this.textInput} not found`);
      }
    },
    attack() {
      this.num -= 200
      this.$parent.num -= 100
      this.$parent.turnContinue = false;
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
            return
          }
        }
        console.log('such a directory does not exist')
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
      //alertでYou Win と表示されるとき、まだ体力表示が0以下の値に変わっておらず、alertが押されてから0以下になるという問題あり
        alert('You Win!!!');
      }
      else if(this.$parent.num > 0){
        this.$parent.isEnemyTurn = false;
        this.enemyTurn()
      }
    },
    //敵のターンにする処理はこの中に入れる
    enemyTurn(){
      this.rm();
      this.changeTurnToPlayer()
    },
    //rmは便宜的に作っただけで未完成です
    //enemyが攻撃する際の遅延は未実装です
    rm() {
      if (this.$parent.isEnemyTurn == false) {
        this.$parent.myHp -= 200;
      }
      else if (this.$parent.isEnemyTurn == true) {
        console.log('isEnemyTurn boolean error');
      }
      else{
        console.log('isEnemyTurn type error');
      }
    },
    changeTurnToPlayer() {
      //alertでYou lose と表示されるとき、まだ体力表示が0以下の値に変わっておらず、alertが押されてから0以下になるという問題あり
      if(this.$parent.myHp <= 0) {
        this.$parent.myHp = 0;
        alert('You lose!!');
      }
      else if(this.$parent.myHp > 0) {
        this.$parent.isEnemyTurn = true;
      }
    },
    ls(){
      console.log(this.$parent.nextDirs[this.$parent.currentDir])
    }
  },
};
</script>

