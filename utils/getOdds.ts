import {champions,Champion} from './champions'
import _ from 'lodash'

export interface loadedDiceOdds {
    champion: String,
    level_1: Number,
    level_2: Number,
    level_3: Number,
    level_4: Number,
    level_5: Number,
    level_6: Number,
    level_7: Number,
    level_8: Number,
    level_9: Number,
  }
  
  const LevelOdds = [[1,0,0,0,0],[1,0,0,0,0],[0.75,0.25,0,0,0],[0.55,0.30,0.15,0,0],[0.45,0.33,0.20,0.02,0],[0.35,0.35,0.25,0.05,0],[0.22,0.35,0.30,0.12,0.01],[0.15,0.25,0.35,0.20,0.05],[0.10,0.15,0.30,0.30,0.15]]
  
   
  
  
  const getUnitsWithSameTraits = (unit: String):Champion[] => {
  
    const UnitWithTrait = champions.filter((champ) => 
      champ.name === unit
    )
  
    
  
    let unitswithsametrait:Champion[][] = []
    UnitWithTrait[0].traits.forEach((trait) => {
      const champs = champions.filter((x) => x.traits.includes(trait))
       
      unitswithsametrait.push(champs)
       
          
    })
  
    
    
    return _.uniq(_.flatten(unitswithsametrait))
  }
  
  
  export const getOddsOfDesiredChamps = (desiredChamp:String) => { 
   
    const desiredChampObject = champions.filter(x => x.name === desiredChamp)[0]
    let champOddsArray: loadedDiceOdds[] = []
  
    const ChampsWithSameTraitz = getUnitsWithSameTraits(desiredChamp)
    console.log(ChampsWithSameTraitz,'same trait')
     ChampsWithSameTraitz.forEach((champ) => {
      
      const champs =_.groupBy(getUnitsWithSameTraits(champ.name),'cost')
   
      const getCosts = Object.keys(champs)
   
      let oddsArray:Number[] = []
      LevelOdds.forEach((level,i) => { 
        
          getCosts.forEach(cost => {
          if(Number(cost) === desiredChampObject.cost) {
            let champOdds:loadedDiceOdds = {
              champion:'',
              level_1:1,
              level_2:2,
              level_3:3,
              level_4:3,
              level_5:5,
              level_6:5,
              level_7:1,
              level_8:1,
              level_9:1
            }
  
            
            let odds = level[Number(desiredChampObject.cost) - 1]/champs[Number(desiredChampObject.cost)].length
            
            
            
            oddsArray.push(odds)
            
           
            if(oddsArray.length === 9){
              champOdds.champion = champ.name
              champOdds.level_1 = oddsArray[0]
              champOdds.level_2 = oddsArray[1]
              champOdds.level_3 = oddsArray[2]
              champOdds.level_4 = oddsArray[3]
              champOdds.level_5 = oddsArray[4]
              champOdds.level_6 = oddsArray[5]
              champOdds.level_7 = oddsArray[6]
              champOdds.level_8 = oddsArray[7]
              champOdds.level_9 = oddsArray[8]
              
             
              champOddsArray.push(champOdds)
            }
          }
          
          
        })
       
      })
      
      console.log(oddsArray,'oddsarray')
      console.log(champOddsArray)
      
  
    })
    return _.sortBy(champOddsArray,'level_9').reverse()
  }
  