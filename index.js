const fs = require("fs/promises");

async function processUsers() {
    try{
        const data = await fs.readFile('./data/users.json','utf-8');
        const users = JSON.parse(data);

        const namesA = users.filter(user=> user.name.startsWith('A'));
        const names = namesA.map(user=> user.name).join(',');

        await fs.writeFile(
          "./output/summary.txt",
          `Total users: ${users.length}\nUser names:${names}`

        );
        console.log("Summary.txt created");
        

        
    }catch(err){
        console.error("Error",err.message)
    };
};

processUsers();

