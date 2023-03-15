function testLion() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello testLion");
    }, 2000);
  });
}

async function main() {
  var x = await testLion();
  console.log(x);
}

main();
