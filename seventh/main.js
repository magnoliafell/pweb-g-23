const api_url = `http://apilayer.net/api/live?access_key=9ef422f47928929826c73e18de9441ab&pairs=EURUSD,EURGBP,GBPUSD,USDJPY,AUDUSD,USDCHF,NZDUSD,USDCAD,USDZAR`;
const apikey = `9ef422f47928929826c73e18de9441ab`;
async function getRate(url){
    const response = await fetch(url)
    const data = await response.json();
    console.log(data);
    try{
    document.getElementById("eurusd").innerHTML = `${data.quotes.USDEUR}`;
    document.getElementById("eurgbp").innerHTML = `${data.quotes.USDGBP}`;
    document.getElementById("gbpusd").innerHTML = `${data.quotes.USDGBP}`;
    document.getElementById("usdjpy").innerHTML = `${data.quotes.USDJPY}`;
    document.getElementById("audusd").innerHTML = `${data.quotes.USDAUD}`;
    document.getElementById("usdchf").innerHTML = `${data.quotes.USDCHF}`;
    document.getElementById("nzdusd").innerHTML = `${data.quotes.USDNZD}`;
    document.getElementById("usdcad").innerHTML = `${data.quotes.USDCAD}`;
    document.getElementById("usdzar").innerHTML = `${data.quotes.USDZAR}`;
    } catch {
        console.error(error);
    }
} getRate(api_url)