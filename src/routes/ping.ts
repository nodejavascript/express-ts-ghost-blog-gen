import { Request, Response } from 'express'
import pkg from '../../package.json'

const ping = async (req: Request, res: Response) => {
  const now: string = new Date().toISOString()
  const version: string = pkg.version
  return res.status(200).json({ now, version })
}

export default ping
