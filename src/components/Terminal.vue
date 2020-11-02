<template>
  <h1>Terminal</h1>
  <p>bossHP:{{num}}</p>
  <p>currentDir:{{currentPathForDisplay[currentDir]}}$</p>
  <p></p>
  <input type="text"
  v-model="textInput"
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
          break
        case 'cd':
          this.cd(commandArg);
          break
        default:
          console.log(`command ${this.textInput} not found`);
      }
    },
    attack() {
      this.num -= 200
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
    }
  }
};
</script>

