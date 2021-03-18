# Auto Wallpaper

Auto Wallpaper is a script that lets you change your desktop wallpaper every hour from a subreddit `'r/EarthPorn'`

## Initial Setup

```bash
$ git clone
# clone this repository
$ cd wallpaper
# move inside cloned repository
$ npm install
# instal all modules
```

### Environment Setup

Add `.env` file with your own keys

```bash
$ mv .env.example .env
# rename .env.example to .env
```

Add your own key

```txt
REDDIT_CLIENT_ID=<YOUR_KEY>
REDDIT_CLIENT_SECRET=<YOUR_KEY>
REDDIT_USERNAME=<YOUR_KEY>
REDDIT_PASSWORD=<YOUR_KEY>
```

#### For Windows

Go to windows startup folder or type this run command `shell:startup` and paste the `get_wallpaper.bat` file on the directory.
