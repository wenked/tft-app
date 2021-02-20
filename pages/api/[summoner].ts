// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'



const summonerName = async (req: NextApiRequest, res: NextApiResponse) => {
  const riotApiKey = process.env.RIOT_API_KEY
  const testDate = new Date()
  let regionString = ''

  console.log(riotApiKey)
  const {
    query: { summoner,region },
  } = req
  const riotApiUrl = `https://${region}.api.riotgames.com/tft`
  
  const fetchSummoner = await fetch(`${riotApiUrl}/summoner/v1/summoners/by-name/${summoner}?api_key=${riotApiKey}`)
 
  const summonerResponse = await fetchSummoner.json()
  console.log(summonerResponse.id) 
  const fetchRankedData = await fetch(`${riotApiUrl}/league/v1/entries/by-summoner/${summonerResponse.id}?api_key=${riotApiKey}`) 
  const rankedDataResponse = await fetchRankedData.json()

  if(region === 'br1' || 'la1' || 'la2' ||'na1' ){
    regionString = 'americas'

  }else if (region === 'eun1' || 'euw1' || 'ru' || 'tr1'){
    regionString = 'europe'
  } else {
    regionString ='asia'
  }
  
  const fetchMatchListData = await fetch(`https://${regionString}.api.riotgames.com/tft/match/v1/matches/by-puuid/${summonerResponse.puuid}/ids?count=3&api_key=${riotApiKey}`)
  const matchListDataResponse = await fetchMatchListData.json()

    
  const matchDetailsArray = await Promise.all(matchListDataResponse.map( async (matchId:String) => {
    const matchDetail = await fetch(`https://${regionString}.api.riotgames.com/tft/match/v1/matches/${matchId}?api_key=${riotApiKey}`)
    return  matchDetail.json()
  }))

 console.log(matchDetailsArray,'aqui')

  res.setHeader('Cache-Control','s-maxage=10, stale-while-revalidate')
 
  res.status(200).json({ 
    summoner: summonerResponse,
    rankedData:rankedDataResponse,
    date: testDate.toUTCString(),
    matchListIds:matchListDataResponse,
    matchDetailsArray })
    
}


export default summonerName;