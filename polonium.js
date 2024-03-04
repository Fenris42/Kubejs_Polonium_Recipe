ServerEvents.recipes(event => {
	
	//bigreactors blutonium ingot -> mekanism plutonium gas in mekanism chemical oxidizer
	event.custom({
		
		type: 'mekanism:oxidizing',
		input: 
		{
			ingredient: 
				{item: 'bigreactors:blutonium_ingot'}
		},
		output: 
			{gas: 'mekanism:plutonium', amount: 1000}
	});
	
	//mekanism plutonium gas - > mekanism polonium gas in mekanism isotopic centrifuge
	event.custom({

		type: 'mekanism:centrifuging',
		input:
			{gas: 'mekanism:plutonium', amount: 1000},
		output:
			{gas: 'mekanism:polonium', amount: 100}
	});
});