import { config } from 'dotenv'

config()

export const IMAGE_NAME = 'img.jpg'

export const keys = {
    REDDIT_CLIENT_ID: process.env.REDDIT_CLIENT_ID!,
    REDDIT_CLIENT_SECRET: process.env.REDDIT_CLIENT_SECRET!,
    REDDIT_USERNAME: process.env.REDDIT_USERNAME!,
    REDDIT_PASSWORD: process.env.REDDIT_PASSWORD!,
}

//C:/Users/root/Desktop/garbage/wallpaper
