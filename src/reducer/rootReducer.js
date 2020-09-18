
import { act } from 'react-test-renderer'
import {COINSELECTION,PINCODEENTERED,ENTEREDPIN,
    CONFIRMPIN, SEEDADD,SEEDNUMBERCHANGE,SUFFLEDSEEDLIST,
    ORIGINALSUFFLEDSEEDLIST} from '../actions/coinSelection'

const initState = {
    coinInfo:[
        {key:'1', name:'BTC', walletID:'123adasd213', amount:1235.12312 ,dolarAmount:'=$ 423.1412' },
        {key:'2', name:'ETH', walletID:'123adasd213', amount:1231.12312 ,dolarAmount:'=$ 234.1412' },
        {key:'3', name:'WAVES', walletID:'123adasd213', amount:34543.12312 ,dolarAmount:'=$ 12.1412' },
        {key:'4', name:'OTUM', walletID:'123adasd213', amount:876867.12312 ,dolarAmount:'=$ 876.1412' },
        {key:'5', name:'XRP', walletID:'123adasd213', amount:4345.12312 ,dolarAmount:'=$ 2352.1412' },
        {key:'6', name:'CHAIN', walletID:'123adasd213', amount:12312.12312 ,dolarAmount:'=$ 64.1412' },
        {key:'7', name:'POLDAKOT', walletID:'123adasd213', amount:1231.12312 ,dolarAmount:'=$ 234.1412' },
        {key:'8', name:'EOS', walletID:'123adasd213', amount:15345235.12312 ,dolarAmount:'=$ 43.1412' },
        {key:'9', name:'CARDANO', walletID:'123adasd213', amount:345.12312 ,dolarAmount:'=$ 123.1412' },
        {key:'10', name:'TRON', walletID:'123adasd213', amount:3453.12312 ,dolarAmount:'=$ 787.1412' },
        {key:'11', name:'NEO', walletID:'123adasd213', amount:234.12312 ,dolarAmount:'=$ 4.1412' }
    ],
    selectedCoin:{key:1, name:'BTC', walletID:'123adasd213', amount:1235.12312 ,dolarAmount:'=$ 12313.1412'},
    isPinCodeEntered:false,
    enteredPin:'',
    confirmPin:'',
    seedList:[],
    seedNumber:12,
    suffledSeedList:[],
    originalSuffledSeedList:[]
}


const rootReducer = (state=initState,action) =>{
   switch (action.type) {
        case COINSELECTION:
           return {...state, selectedCoin:action.payload}
        case PINCODEENTERED:
            return {...state, isPinCodeEntered:action.payload}
        case ENTEREDPIN:
            return {...state, enteredPin:action.payload}
        case CONFIRMPIN:
            return {...state,confirmPin:action.payload}
        case SEEDADD:
            return {...state, seedList:action.payload}
        case SEEDNUMBERCHANGE:
            return {...state, seedNumber:action.payload }
        case SUFFLEDSEEDLIST:
            return {...state, suffledSeedList:action.payload}
        case ORIGINALSUFFLEDSEEDLIST:
            return {...state, originalSuffledSeedList:action.payload}
       default:
           return {...state}
   }
}


export default rootReducer