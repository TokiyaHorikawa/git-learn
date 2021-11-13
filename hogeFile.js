function hogehoge() {
  console.log("this is Test hoge')
}

const data = hogehoge()

const fn = () => {
 return hogehoge()
}

// コミットの改行テスト
fn()
