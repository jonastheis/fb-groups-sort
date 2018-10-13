# Facebook groups post sorting & highlighting

This little [Tampermonkey](https://tampermonkey.net/) script sorts and highlights posts in a Facebook group by date (descending). So it makes it easier to browse the **Actual Latest Posts**, compared to the options Facebook offers *Recent Activity* and *Top Posts*.

I wrote the script to simplify my room hunt (literally) in Amsterdam in summer 2018 and now thought it would be great to share it. Have fun!

## Screens
<span><img src="assets/screen.png?raw=true" width="400px" /></span>

## Installation & Setup

1. Install [Tampermonkey](https://tampermonkey.net/) in your browser
2. Create new script and copy contents from [script.js](script.js)
3. Optional: Edit words you want to be highlighted in file
4. Optional 2: Remove `._3b-9 { display: none;}'` to display comments
5. Activate script
6. You can verify if it is active by going to a Facebook group and checking for a small red 1 at the Tampermonkey icon

## Usage

1. Go to [your Facebook groups](https://www.facebook.com/groups/)
2. Open the group you want the script to be executed for in a new tab
3. Wait (takes up to 30 secs or more, depending on your connection) until you see the message `Sorted XX room listings`
4. Enjoy a descending by date sorted list of posts

## License

This project is licensed under the [Apache Software License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

See [`LICENSE`](LICENSE) for more information.

    Copyright 2018 Jonas Theis

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
