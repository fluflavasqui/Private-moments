(function(root){
const categories=['WD','JD','SD','Shop','Cinema'];
function cents(v){if(!/^\d{1,7}([.,]\d{1,2})?$/.test(String(v)))throw Error('Informe um valor válido, como 10,50.');return Math.round(Number(String(v).replace(',','.'))*100)}
function price(c,p=0,l=0,n=0){if(c==='WD')return p*5000+l*1500;if(c==='SD')return p*6000+l*2000;if(c==='Cinema')return n*1800;if(c==='JD'){const a=[0];for(let i=1;i<=n;i++)a[i]=Math.min(a[i-1]+2000,i>=4?a[i-4]+5500:Infinity,i>=7?a[i-7]+9000:Infinity);return a[n]}return 0}
function totals(sales){const t={Cash:0,Card:0,Total:0};for(const c of categories)t[c]=0;for(const s of sales){t[s.category]+=s.cents;t.Cash+=s.cash;t.Card+=s.card;t.Total+=s.cents}return t}
function remaining(state,c){return state.settings.stock[c]-state.sales.filter(s=>s.category===c).reduce((a,s)=>a+s.quantity,0)}
const api={categories,cents,price,totals,remaining};if(typeof module!=='undefined')module.exports=api;else root.Core=api;
})(globalThis);
