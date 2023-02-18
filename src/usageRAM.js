const { clear } = require("console");
const os = require("os")
const {totalmem, platform, arch, freemem} = os; 


setInterval(()=>{

    const status = {
        os: platform(),
        arquitetura: arch(),
        free: `${parseInt(freemem() / (1024 * 1024))}`,
        total: `${parseInt(totalmem() / (1024 * 1024))}`
    }

    exports.stats = status;
    console.clear();
    console.table(status);
}, 1000)


