const myArgs = process.argv.slice(2);
if(!myArgs.length) throw new Error('No Url provided')
const [urlArg] = myArgs;
const {host, pathname} = new URL(urlArg);
const [,businesses,,branches] = pathname.split('/').filter(p => p);
const hostName = host === 'console-dev.phorest.com' ? 'app-dev.phorest.com' : 'app.phorest.com';
const url = `https://${hostName}/businesses/${businesses}/branches/${branches}/manager`;

function pbcopy(data) {
    const proc = require('child_process').spawn('pbcopy'); 
    proc.stdin.write(data); proc.stdin.end();
}
return pbcopy(url);