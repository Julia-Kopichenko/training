function delay(ms) {
  return promise = new Promise( resolve => setTimeout(() => resolve(ms), ms) );
}

delay(1000).then(  value => console.log('Done with ' + value));