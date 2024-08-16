/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

let transactions=[
  {
		'id': 1,
		'timestamp': 1656076800000,
		'price': 10,
		'category': 'Food',
		'itemName': 'Pizza',
	},
  {
		'id': 2,
		'timestamp': 1656076800000,
		'price': 20,
		'category': 'Food',
		'itemName': 'Fries',
	},
  {
		'id': 3,
		'timestamp': 1656076800000,
		'price': 15,
		'category': 'Drink',
		'itemName': 'Milk',
	},
  {
		'id': 3,
		'timestamp': 1656076800000,
		'price': 15,
		'category': 'Drink',
		'itemName': 'Energy-Drink',
	}
];

function calculateTotalSpentByCategory() {
  categorywise_spent = [];
  for(let i=0;i<transactions.length;i++)
  {
    if(transactions[i].category in categorywise_spent )
    {
      categorywise_spent[transactions[i].category] = categorywise_spent[transactions[i].category] + transactions[i].price; 
    }
    else{
      categorywise_spent[transactions[i].category] = transactions[i].price;
    }
    
  }

  ans = [];
  for(const key in categorywise_spent)
  {
      category_price = {};
      category_price['category'] = key;
      category_price['totalSpent'] = categorywise_spent[key];
      ans.push(category_price)
  }
  return ans;
}

console.log(calculateTotalSpentByCategory());
