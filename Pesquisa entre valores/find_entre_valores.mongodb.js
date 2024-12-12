const database = "bd3_atv2";

const collection = "bd3_atv2_produtos";

use(database);

db[collection].find({
  valor: { $gte: 150.9, $lte: 200.9 },
}).limit(6);
