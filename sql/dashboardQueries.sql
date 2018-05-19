    SELECT	U.company_name, R.rig_name, UR.ownership_percent, MP.mining_pool_name, MP.mining_pool_wallet_address, 
			RMP.total_coins, T.currency_price, (RMP.total_coins*T.currency_price) AS rig_total, 
            (RMP.total_coins*T.currency_price *UR.ownership_percent) AS investor_total
	FROM	users_rigs UR
		INNER JOIN users U 	ON UR.user_id	= U.user_id
		INNER JOIN rigs R 	ON UR.rig_id	= R.rig_id	
		INNER JOIN rigs_mining_pools RMP ON UR.rig_id	= RMP.rig_id	
		INNER JOIN mining_pools MP ON RMP.mining_pool_id	= MP.id
		INNER JOIN tickers T 	ON MP.mining_pool_symbol	= T.currency_symbol;

    SELECT	U.company_name, 
			SUM(RMP.total_coins) AS total_coins, 
            SUM(RMP.total_coins*T.currency_price *UR.ownership_percent) AS investor_total
	FROM	users_rigs UR
		INNER JOIN users U 	ON UR.user_id	= U.user_id
		INNER JOIN rigs R 	ON UR.rig_id	= R.rig_id	
		INNER JOIN rigs_mining_pools RMP ON UR.rig_id	= RMP.rig_id	
		INNER JOIN mining_pools MP ON RMP.mining_pool_id	= MP.id
		INNER JOIN tickers T 	ON MP.mining_pool_symbol	= T.currency_symbol
	GROUP BY U.company_name
