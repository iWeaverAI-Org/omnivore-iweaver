/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios'
import cors from 'cors'
import express from 'express'
import { corsConfig } from '../../utils/corsConfig'

export function imageProxyRouter() {
  const router = express.Router()

  router.options(
    '/:url(*)',
    cors<express.Request>({ ...corsConfig, maxAge: 600 })
  )

  router.get('/:url(*)', async (req, res) => {
    const imageUrl = decodeURIComponent(req.params.url)
    if (!imageUrl.startsWith('http')) {
      return res.status(400).send('Invalid URL')
    }

    try {
      const response = await axios({
        url: imageUrl,
        method: 'GET',
        responseType: 'stream',
      })

      res.setHeader('Content-Type', response.headers['content-type'])
      return response.data.pipe(res)
    } catch (error) {
      console.error('Error fetching image:', error)
      return res.status(500).send('Error fetching image')
    }
  })

  return router
}
