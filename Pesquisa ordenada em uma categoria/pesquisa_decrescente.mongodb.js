const database = 'bd3_atv2'

const collection = 'bd3_atv2_produtos'


use(database)

db[collection].find({categoria: "Eletrodomésticos"}).sort({valor: -1}).limit(3)