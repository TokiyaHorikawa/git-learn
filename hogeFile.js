function hogehoge() {
  console.log("this is Test hoge')
}

const data = hogehoge()

const fn = () => {
 return hogehoge()
}

// コンフリクトのために編集
fn()
