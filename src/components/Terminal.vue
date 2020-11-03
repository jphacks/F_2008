<template>
  <h1>Terminal</h1>
  <p>bossHP:{{num}}</p>
  <p>myHp: {{myHp}}</p>
  <p>currentDir:{{currentPathForDisplay[currentDir]}}$</p>
  <p></p>
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
          num: 10000,
          myHp: 1000,
          turnContinue:true,
          isEnemyTurn:false,
          textInput: '',
          currentDir:'~',
          currentPathForDisplay:{'~':'~',
            'left':'~/left',
            'right':'~/right',
            'home':'/home'
          },
          parentDir:{'~':'home',
            'left':'~',
            'right':'~'
          },
          linkedDirs: {'~':['left','~','right'],
                  'left':['~'],
                  'right':['~'],
                  'home':['~']
                  }
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
        case 'cd':
          this.cd(commandArg);
          this.checkIfContinue();
          break
        default:
          console.log(`command ${this.textInput} not found`);
      }
    },
    attack() {
      this.num -= 200
      this.turnContinue = false;
    },

    cd(strPath) {
      if(strPath === ''){
        this.currentDir = '~';
      }
      else if(typeof strPath === 'undefined'){
        this.currentDir = '~';
      }
      else if(strPath === '.'){
        return
      }
      else if (strPath === '..'){
        this.currentDir = this.parentDir[this.currentDir];
      }
      else{
        //今いるディレクトリにつながっているディレクトリを全てチェックしている
        for(var i = 0;i < this.linkedDirs[this.currentDir].length;i++){
          console.log(this.linkedDirs[this.currentDir][i])
          if (this.linkedDirs[this.currentDir][i] === strPath){
            this.currentDir = strPath;
            return
          }
        }
        console.log('such a directory does not exist')
      }
      this.turnContinue = true
    },
    //コマンドが実行されるたびに続けるか判断
    checkIfContinue() {
      if(this.turnContinue === false){
        this.changeTurnToEnemy();
      }
      },
    changeTurnToEnemy(){
      if(this.num <= 0){
      //alertでYou Win と表示されるとき、まだ体力表示が0以下の値に変わっておらず、alertが押されてから0以下になるという問題あり
        alert('You Win!!!');
      }
      else if(this.num > 0){
        this.isEnemyTurn = false;
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
      if (this.isEnemyTurn == false) {
        this.myHp -= 200;
      }
      else if (this.isEnemyTurn == true) {
        console.log('isEnemyTurn boolean error');
      }
      else{
        console.log('isEnemyTurn type error');
      }
    },
    changeTurnToPlayer() {
      //alertでYou lose と表示されるとき、まだ体力表示が0以下の値に変わっておらず、alertが押されてから0以下になるという問題あり
      if(this.myHp <= 0) {
        this.myHp = 0;
        alert('You lose!!');
      }
      else if(this.myHp > 0) {
        this.isEnemyTurn = true;
      }
    }
  },
};
</script>

