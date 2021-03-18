import axios from 'axios'
import _ from 'lodash'
import Snoowrap from 'snoowrap'
import fs from 'fs/promises'
import { IMAGE_NAME, keys } from './config'

const userAgent = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36`

//
const r = new Snoowrap({
    clientId: keys.REDDIT_CLIENT_ID,
    clientSecret: keys.REDDIT_CLIENT_SECRET,
    username: keys.REDDIT_USERNAME,
    password: keys.REDDIT_PASSWORD,
    userAgent,
})

export const getImage = async () => {
    //get subreddits top post
    const topPosts = await r.getTop(`earthporn`, {
        time: 'day',
        limit: 20,
        count: 20,
    })
    //filter all the post that ends with .jpg
    const filteredPosts = _.filter(topPosts, (post) =>
        _.endsWith(post.url, '.jpg')
    )

    const randomNumber = _.random(filteredPosts.length - 1) //get a random number from filtered list
    const randomPost = filteredPosts[randomNumber] //get a random post from filtered list
    const imageUrl = randomPost.url //get images url from random post

    //get image
    const { data: imageData } = await axios.get(imageUrl, {
        responseType: 'arraybuffer',
    })
    const buffer = Buffer.from(imageData, 'base64') //--> convert to buffer

    //write image
    await fs.writeFile(IMAGE_NAME, buffer)
}

getImage()
