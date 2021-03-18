import _ from 'lodash'
import wallpaper from 'wallpaper'
import schedule from 'node-schedule'

import { getImage } from './getImage'
import { IMAGE_NAME } from './config'

//
const changeWallpaper = async () => {
    try {
        //get random image & save to drive
        await getImage()

        //set wallpaper
        await wallpaper.set(IMAGE_NAME, {
            scale: 'fit',
        })
    } catch (error) {
        console.log(error.message)
    }
}

schedule.scheduleJob('set-wallpaper', '0 * * * *', changeWallpaper)
