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

async function countUsers() {
    try{
        const data = await fs.readFile('./data/users.json','utf-8');
        const users = JSON.parse(data);

        const usersB = users.filter(user=>user.name.startsWith("B"));
        const count = usersB.length;
        const names = usersB.map(user=>user.name).join(",");

        await fs.writeFile(
            "./output/countB.txt",
            `Total users: ${users.length}\nUser names:${names}`
        );
        console.log("countB.txt created");
        

    }catch(err){
        console.error("error",err.message)
    };
};
countUsers();

async function uppercaseUsers() {
    try{
        const data = await fs.readFile("./data/users.json","utf-8");
        const users = JSON.parse(data);

        const uUsers = users.map(user=> user.name.toUpperCase()).join(",");
        await fs.writeFile(
            "./output/allCaps.txt",
            `Total users: ${users.length}\nUser names: ${uUsers}`
        );
        console.log("allCaps.txt created");
        
    }catch(err){
        console.error("error",err.message)
    };
};
uppercaseUsers();