const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&meta_info=VR6`;


function fetchAndUpdateCryptoData() {
 const sheet = SpreadsheetApp.getActiveSpreadsheet();
 const currentSheet = sheet.getSheetByName("Current Prices") || sheet.insertSheet("Current Prices");
 const historySheet = sheet.getSheetByName("Price History") || sheet.insertSheet("Price History");


 // Setup headers if not present
 if (currentSheet.getLastRow() === 0) {
   currentSheet.appendRow(["Coin ID", "Symbol", "Name", "Current Price (USD)", "Market Cap (USD)", "24h % Change", "Last Updated", "Last Synced"]);
 }
 if (historySheet.getLastRow() === 0) {
   historySheet.appendRow(["Timestamp", "Coin ID", "Symbol", "Name", "Internal Ref Code", "Current Price (USD)", "Market Cap (USD)", "24h % Change"]);
 }


 const response = UrlFetchApp.fetch(API_URL);
 console.log("response",response)
 const data = JSON.parse(response.getContentText());


 const now = new Date();
 const nowStr = Utilities.formatDate(now, Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss");


 // Clear and update current prices
 const currentRows = [["Coin ID", "Symbol", "Name", "Current Price (USD)", "Market Cap (USD)", "24h % Change", "Last Updated", "Last Synced"]];
 data.forEach(coin => {
   currentRows.push([
     coin.id,
     coin.symbol,
     coin.name,
     coin.current_price,
     coin.market_cap,
     coin.price_change_percentage_24h,
     coin.last_updated,
     nowStr
   ]);
 });
 currentSheet.clear();
 currentSheet.getRange(1, 1, currentRows.length, currentRows[0].length).setValues(currentRows);


 // Append to history
 data.forEach(coin => {
   historySheet.appendRow([
     nowStr,
     coin.id,
     coin.symbol,
     coin.name,
     "", 
     coin.current_price,
     coin.market_cap,
     coin.price_change_percentage_24h
   ]);
 });
}



