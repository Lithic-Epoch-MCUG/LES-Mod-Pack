ServerEvents.entityLootTables(event => {
    event.addEntity("minecraft:silverfish", loot => {
        loot.addPool(pool => {
            pool.addItem("iron_nugget").weight(4).count(1)
            pool.addItem("gold_nugget").weight(2).count(1)
            pool.addItem("create:zinc_nugget").weight(6).count(1)
            pool.addItem("create:copper_nugget").weight(6).count(1)
            pool.addItem("create:zinc_nugget").weight(1).count([2,6])
            pool.addItem("create:copper_nugget").weight(1).count([3,7])
            pool.setUniformRolls(1,2)
            pool.lootingEnchant(1,9)
        })
    })
})