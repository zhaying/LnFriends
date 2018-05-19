module.exports = function (sequelize, DataTypes) {
  /*
  {
"data": {
"id": 2616,
"name": "Stipend",
"symbol": "SPD",
"website_slug": "stipend",
"rank": 573,
"circulating_supply": 4830099,
"total_supply": 5070099,
"max_supply": 19340594,
"quotes": {
"USD": {
"price": 1.60534,
"volume_24h": 106374,
"market_cap": 7753951,
"percent_change_1h": -4.41,
"percent_change_24h": 0.03,
"percent_change_7d": -11.35
}
},
"last_updated": 1526594963
},
"metadata": {
"timestamp": 1526594868,
"error": null
}
}
  */

    var tickers = sequelize.define('tickers', {
        "currency_id":      DataTypes.INTEGER,
        "currency_name":    DataTypes.STRING,
        "currency_symbol":  DataTypes.STRING,
        "currency_price":   DataTypes.FLOAT 
    });

  return tickers;
};
