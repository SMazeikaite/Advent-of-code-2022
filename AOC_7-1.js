const fs = require("fs");

fs.readFile("AOC_7_input.txt", (err, data) => {
    if (err) throw err;

    const inputs = data.toString().split('\r\n');
    let folders = [{path: ['/'], size: 0}];
    let currentPath = ['/'];

    inputs.forEach(line => {
        // user typed cd command
        if (line.startsWith('$ cd')) {
            const goTo = line.replace('$ cd ', '');
            switch(goTo) {
                case '/': {
                    currentPath = ['/'];
                    break;
                }
                case '..': {
                    currentPath.length && currentPath.pop();
                    break;
                }
                default: {
                    currentPath.push(goTo);
                    const exploredFolder = folders.find(f => JSON.stringify(f.path) === JSON.stringify([...currentPath]));
                    if (!exploredFolder) {
                        folders.push({path: [...currentPath], size: 0});
                    }
                }
            }
            return;
        }
        
        // used typed ls comand
        if (line.startsWith('$ ls')) return;

        // directory found
        if (line.startsWith('dir ')) {
            const containsFolder = line.replace('dir ', '');
            const folder = folders.find(f => JSON.stringify(f.path) === JSON.stringify([...currentPath, containsFolder]));
            if (!folder) folders.push({path: [...currentPath, containsFolder], size: 0});
            return;
        }
        
        // files found
        const currentFolder = folders.find(f => JSON.stringify(f.path) === JSON.stringify(currentPath));
        const fileSize = line.match(/\d+/g);
        currentFolder.size += Number(fileSize);
    });

    let result = 0;
    
    folders.forEach(folder => {
        // checking if root folder
        if (folder.path.length === 1) return;
        
        const pathLength = folder.path.length;
        const foldersInTheSamePath = folders.filter(f => {
            return JSON.stringify(f.path.slice(0, pathLength)) === JSON.stringify(folder.path)
        });
        
        const size = Number(sum(foldersInTheSamePath, 'size'));
        let currentFolder = folders.find(f => JSON.stringify(f.path) === JSON.stringify(folder.path));
        currentFolder.size = size;

        if (size <= 100000) {
            result += size;
        }
    });

    console.log(result);
    
})

sum = function(items, prop) {
    return items.reduce( function(a, b){
        return a + b[prop];
    }, 0);
};