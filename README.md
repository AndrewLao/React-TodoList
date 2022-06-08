# todolist

Extremely simple React implementation of a todo list application

Saves data in client's browser data for web implementation but not for desktop

# Running on Localhost
`npm install`

`npm start`

# Dependencies for Web

- node 16.14 or later
- npm version 8.3.1 or later

# Windows Dependencies

- All dependencies for the Web version
- Rust
- Tauri

Documentation for Rust and Tauri below:

Install Rust [here](https://www.rust-lang.org/tools/install)

For Tauri, follow the `getting started` portion of the guide [here](https://tauri.studio/v1/guides/)

# Windows Install

Once everything is set up run in order
`npm install`

`npm run tauri init`

`npm run build`

`npm run bundle`

The executable file and installer can be found in src-tauri->target->release

Optionally there is a msi installer that is built when the bundle is created under src-tauri->target->release->bundle

# Screenshots
Web Sample:
![Web Example](https://github.com/AndrewLao/todolist/blob/main/webexample.jpg)

Desktop Sample:
![Desktop Example](https://github.com/AndrewLao/todolist/blob/main/desktopexample.jpg)

