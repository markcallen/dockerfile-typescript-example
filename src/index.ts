console.log('hello world!!');

// Keep the process alive until Ctrl-C
process.stdin.resume();

// Optional: Handle graceful shutdown on Ctrl-C
process.on('SIGINT', () => {
  console.log('\nGoodbye!');
  process.exit();
});
