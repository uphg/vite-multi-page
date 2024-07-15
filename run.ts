import { execa } from 'execa';

console.log(123)

run()

function run() {
    // TODO: Implement the run function
  console.log(process.argv)

  execa`npm run test`;
  // execa('vite', ['-c', 'packages/bar/vite.config.ts'])
}