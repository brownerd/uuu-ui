'use babel';

export default function (pathToFile, arr, encoding) {
  return new Promise(
    function (resolve, reject) {
      fs.writeFile(
        pathToFile,
        arr.map(item => `${item.sassvar}: ${item.value};`).join('\n'),
        encoding,
        (err) => {console.log(err ? `Error: ${err}` : 'ok');}
      );
    }
  )
}


// (err) => {console.log(err ? `Error: ${err}` : 'ok');}

// () => {
//   var themePack = atom.packages.getLoadedPackage('uuu-ui');
//
//   if (themePack) {
//       themePack.deactivate();
//       setImmediate(() => themePack.activate());
//   }
// }
