class FileType {
  name: string;
  size: number;
  files?: FileType[];
  parentDir: FileType;
}

const getTotalSize = (dir: FileType) => {
  let total = dir.size;
  dir.files.forEach((file) => {
    total += file.size;
    if (file?.files) {
      total += getTotalSize(file);
    }
  });

  return total;
};

const getDirectories = (dir: FileType): FileType[] => {
  if (dir?.files) {
    let directories: FileType[] = [];
    dir.files.forEach((file) => {
      if (file?.files) {
        directories.push(file);
        const subDirectories = getDirectories(file);
        directories = directories.concat(subDirectories);
      }
    });
    return directories;
  }
  return [];
};

export function work(input: string): number {
  const lines = input.split('\n');

  let fileSystem: FileType = undefined;
  let currentDirectory: string = undefined;
  let currentDir: FileType = undefined;
  fileSystem = new FileType();

  fileSystem.files = [new FileType()];
  fileSystem.files[0].name = '/';
  fileSystem.files[0].size = 0;
  fileSystem.files[0].files = [];
  fileSystem.files[0].parentDir = fileSystem;
  currentDir = fileSystem.files[0];
  lines.map((line) => {
    // command
    if (line.startsWith('$')) {
      // Tokenize and drop prompt
      const cmds = line.split(' ').splice(1);
      switch (cmds[0]) {
        case 'cd':
          if (currentDirectory === undefined) {
            currentDirectory = cmds[1];
          } else if (cmds[1] === '..') {
            // drop down a directory
            currentDirectory = currentDirectory.split('/').slice(0, -1).join('/');
            // don't let it go below the root directory
            if (currentDirectory.length === 0) {
              currentDirectory = '/';
            }
            currentDir = currentDir.parentDir;
          } else {
            // Avoid adding a double slash when appending to the root
            if (currentDirectory.length === 1) {
              currentDirectory = currentDirectory.concat(cmds[1]);
            } else {
              currentDirectory = currentDirectory.concat('/', cmds[1]);
            }
            let newDir: FileType = undefined;
            currentDir.files.forEach((file) => {
              if (file.name === cmds[1]) {
                newDir = file;
              }
            });
            if (newDir === undefined) {
              newDir = new FileType();
              newDir.name = cmds[1];
              newDir.size = 0;
              newDir.parentDir = currentDir;
              newDir.files = [];
              currentDir.files.push(newDir);
            }

            currentDir = newDir;
          }

          break;
        case 'ls':
          // We can just ignore the command as we need to parse nothing
          break;
        default:
          throw new Error(`Unexpected command ${cmds[0]}`);
      }
    } else {
      const output = line.split(' ');
      if (output[0] === 'dir') {
        // parse dir
      } else {
        // parse file
        const file = new FileType();
        file.size = Number(output[0]);
        file.name = output[1];
        file.parentDir = currentDir;
        currentDir.files.push(file);
      }
    }
  });

  let sumBelow100000 = 0;
  const dirs = getDirectories(fileSystem);

  dirs.forEach((dir) => {
    const dirSum = getTotalSize(dir);
    if (dirSum <= 100000) {
      sumBelow100000 += dirSum;
    }
  });

  return sumBelow100000;
}

export function work2(input: string): number {
  const lines = input.split('\n');

  let fileSystem: FileType = undefined;
  let currentDirectory: string = undefined;
  let currentDir: FileType = undefined;
  fileSystem = new FileType();

  fileSystem.files = [new FileType()];
  fileSystem.files[0].name = '/';
  fileSystem.files[0].size = 0;
  fileSystem.files[0].files = [];
  fileSystem.files[0].parentDir = fileSystem;
  currentDir = fileSystem.files[0];
  lines.map((line) => {
    // command
    if (line.startsWith('$')) {
      // Tokenize and drop prompt
      const cmds = line.split(' ').splice(1);
      switch (cmds[0]) {
        case 'cd':
          if (currentDirectory === undefined) {
            currentDirectory = cmds[1];
          } else if (cmds[1] === '..') {
            // drop down a directory
            currentDirectory = currentDirectory.split('/').slice(0, -1).join('/');
            // don't let it go below the root directory
            if (currentDirectory.length === 0) {
              currentDirectory = '/';
            }
            currentDir = currentDir.parentDir;
          } else {
            // Avoid adding a double slash when appending to the root
            if (currentDirectory.length === 1) {
              currentDirectory = currentDirectory.concat(cmds[1]);
            } else {
              currentDirectory = currentDirectory.concat('/', cmds[1]);
            }
            let newDir: FileType = undefined;
            currentDir.files.forEach((file) => {
              if (file.name === cmds[1]) {
                newDir = file;
              }
            });
            if (newDir === undefined) {
              newDir = new FileType();
              newDir.name = cmds[1];
              newDir.size = 0;
              newDir.parentDir = currentDir;
              newDir.files = [];
              currentDir.files.push(newDir);
            }

            currentDir = newDir;
          }

          break;
        case 'ls':
          // We can just ignore the command as we need to parse nothing
          break;
        default:
          throw new Error(`Unexpected command ${cmds[0]}`);
      }
    } else {
      const output = line.split(' ');
      if (output[0] === 'dir') {
        // parse dir
      } else {
        // parse file
        const file = new FileType();
        file.size = Number(output[0]);
        file.name = output[1];
        file.parentDir = currentDir;
        currentDir.files.push(file);
      }
    }
  });

  const dirs = getDirectories(fileSystem);
  const currentUsage = getTotalSize(dirs[0]);

  const fileSystemSize = 70000000;
  const currentFree = fileSystemSize - currentUsage;
  const updateSize = 30000000;
  const neededForUpdate = updateSize - currentFree;

  let largestRemovable: FileType = dirs[0];
  dirs.forEach((dir) => {
    const directorySize = getTotalSize(dir);
    if (directorySize >= neededForUpdate && directorySize < getTotalSize(largestRemovable)) {
      console.log(
        `${directorySize} >= ${neededForUpdate} && ${directorySize} < ${getTotalSize(
          largestRemovable,
        )}`,
      );
      largestRemovable = dir;
    }
  });

  return getTotalSize(largestRemovable);
}
