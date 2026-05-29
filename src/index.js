export const ARC_CHAIN = {
  "id": 5042002,
  "name": "Arc Testnet",
  "rpc": "https://rpc.testnet.arc.network",
  "explorer": "https://testnet.arcscan.app",
  "nativeCurrency": {
    "name": "USDC",
    "symbol": "USDC",
    "decimals": 6
  }
};

export function formatUsdc(units){const value=BigInt(units);const whole=value/1000000n;const frac=String(value%1000000n).padStart(6,'0').replace(/0+$/,'');return frac?`${whole}.${frac} USDC`:`${whole} USDC`;}
export function txUrl(hash){if(!/^0x[0-9a-fA-F]{64}$/.test(hash))throw new Error('invalid tx hash');return `${ARC_CHAIN.explorer}/tx/${hash}`;}
export function splitUsdc(totalUnits,recipients){if(!Array.isArray(recipients)||recipients.length===0)throw new Error('recipients required');const total=BigInt(totalUnits);const sum=recipients.reduce((a,r)=>a+BigInt(r.weight),0n);if(sum<=0n)throw new Error('positive weights required');let allocated=0n;return recipients.map((r,i)=>{const amt=i===recipients.length-1?total-allocated:total*BigInt(r.weight)/sum;allocated+=amt;return {address:r.address,amount:amt.toString()};});}
